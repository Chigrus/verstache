<script lang='ts'>
	import type {OG, User, Posts} from './types'

	export let data:{
		posts: Posts;
		og_data: OG[];
		user: User;
	};

	let posts = data.posts;
	let og_data = data.og_data[0];
	let user = data.user;

	let isOpenGraphEdit = false;

	import NewsBlock from '../../components/NewsBlock.svelte';
	import AdminButtons from '../../components/AdminButtons.svelte';
	import BtnAdminEdit from '../../components/BtnAdminEdit.svelte';
	import OpenGraphEditor from '../../components/OpenGraphEditor.svelte';

	function openGraphEdit(){
		isOpenGraphEdit = true;
	}

	async function addPost(){
		const res_is_slug = await fetch('/api/getcount', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ slug: 'new_post' }),
		});

		let count:number = await res_is_slug.json();

		if(count > 0){
			console.log('Запись с таким url: new_post уже существует!');
			return;
		}else{
			const response = await fetch('/api/addog', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
										title: 'Новый пост', 
										description: 'Описание нового поста', 
										og_type: 'article', 
										og_title: '',
										og_description: '',
										og_url: '',
										og_image: '',
										og_image_type: 'image/jpeg',
										og_image_width: 1200,
										og_image_height: 630,
										og_article: {},
										og_profile: {},
										og_video: {},
									}),
			});

			let og_id = await response.json();

			const response_add = await fetch('/api/addpost', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
										category: 1, 
										title: 'Новый пост', 
										text: 'Описание нового поста', 
										icon: '', 
										post: [{"id":1,"type":"h1","content":"Заголовок нового поста"}], 
										slug: 'new_post',
										includefiles: [],
										og_id: og_id
									}),
			});

			let resadd = await response_add.json();

			posts = [...posts, resadd];
		}
	}
</script>

<svelte:head>
	<title>{og_data.title}</title>
	<meta name="description" content="{og_data.description}" />
	<meta property="og:type" content="{og_data.og_type}" />
	<meta property="og:title" content="{og_data.og_title}" />
	<meta property="og:description" content="{og_data.og_description}" />
	<meta property="og:url" content="{og_data.og_url}">
	<meta property="og:image" content="{og_data.og_image}">
	<meta property="og:image:type" content="{og_data.og_image_type}" />
	<meta property="og:image:width" content="{og_data.og_image_width}">
	<meta property="og:image:height" content="{og_data.og_image_height}">
	<meta name="twitter:title" content="{og_data.title}">
	<meta name="twitter:description" content="{og_data.description}">
</svelte:head>

{#if user.isAdmin}
<AdminButtons>
	<BtnAdminEdit title="OpenGraph" bg="opengraph" on:click="{openGraphEdit}" />
	<BtnAdminEdit title="Добавить пост" bg="addpost" on:click="{addPost}" />
</AdminButtons>
{/if}

{#if isOpenGraphEdit}
	<OpenGraphEditor bind:dataOpenGraph={og_data}  bind:isOpenGraphEdit={isOpenGraphEdit} />
{/if}

<div class="wrap wrap__blog">
	<div class="work">
		<div class="posts">
			{#each posts as post}
				<div class="inner">
					<NewsBlock post={post} {user} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
.wrap__blog{
	padding: 40px 0;
	padding-top: 140px;
	background-color: #F0F0F1;
	min-height: 400px;
}

.posts{
    display: flex;
	flex-wrap: wrap;
    width: 100%;
}

.inner{
    width: calc(100%/3 - 30px);
    margin: 15px;
}

@media only screen and (max-width: 1023px){
	.inner{
		width: calc(100%/2 - 30px);
	}	
}

@media only screen and (max-width: 639px){
	.inner{
		width: 100%;
		margin: 15px 0;
	}
}
</style>