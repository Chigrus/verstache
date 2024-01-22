<script lang='ts'>
	import type {OG, User, EditUrl} from './types'
	import type {Post} from '../../types'
	import { goto } from '$app/navigation';

	import Popup from '../../../components/Popup.svelte';
	import AdminButtons from '../../../components/AdminButtons.svelte';
	import BtnAdminEdit from '../../../components/BtnAdminEdit.svelte';
	import OpenGraphEditor from '../../../components/OpenGraphEditor.svelte';
	import UploaderFiles from '../../../components/UploaderFiles.svelte';
	import UploaderImages from '../../../components/UploaderImages.svelte';
	import Button from '../../../components/Button.svelte';
	import Switch from '../../../components/Switch.svelte';
	import PostNodesEditor from '../../../components/PostNodesEditor.svelte';
	import PostNodesShow from '../../../components/PostNodesShow.svelte';

	import vs2015 from "svelte-highlight/styles/vs2015";

	export let data:{
		post: Post;
		og_data: OG[];
		user: User;
	};

	let post = data.post;
	let og_data = data.og_data[0];
	let user = data.user;

	let edit_url:EditUrl = {
		popup: false,
		url: '',
	};

	let isOpenGraphEdit = false;
	let isUploadFile:boolean;
	let isUploadImages:boolean;


	async function savePostFn(){

		for (let node of post.post){
            delete node.isEdit;
        }

		const response = await fetch('/api/updatepost', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ post: post.post, id: post.id }),
		});

	}

	function openGraphEdit(){
		isOpenGraphEdit = true;
	}

	function isuploadCss(){
		isUploadFile = true;
	}

	function isuploadImages(){
		isUploadImages = true;
	}

	function urlEdit(url:string){
		edit_url.popup = true;
		edit_url.url = url;
	}

	async function saveUrl(url:string){
		const response = await fetch('/api/getcount', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ slug: url }),
		});

		let count:number = await response.json();

		if(count > 0){
			console.log('Запись с таким url: '+url+' уже существует!');
		}else{
			const response = await fetch('/api/updateslug', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({ slug: url, id: post.id }),
			});
			//let total = await response.json();
			goto('/blog/'+url);
			edit_url.popup = false;
			post.slug = url;
		}
	}

	async function changeStatus(){

		post.publication = !post.publication;

		const response = await fetch('/api/update', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ id: post.id, field: 'publication', value: post.publication  }),
		});

		let res = await response.json();

		//console.log(res);
	}

	function initShare(node:Element){
		const div = document.createElement('div');
		div.classList.add('ya-share2');
		div.setAttribute('data-curtain', '');
		div.setAttribute('data-color-scheme', 'whiteblack');
		div.setAttribute('data-services', 'vkontakte,odnoklassniki,telegram,viber,whatsapp,skype');
		node.appendChild(div);
		// @ts-ignore
		window.Ya.share2(div);
	}

	const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

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
	{#if post.includecss}
		<link rel="stylesheet" href="{post.includecss}">
	{/if}
	{@html vs2015}
</svelte:head>

<Popup bind:isOpen={edit_url.popup}>
	<slot slot="title">
		Редактировать url поста
	</slot>
	<slot slot="content">
		<input class="editUrl" type="text" bind:value={edit_url.url} />
	</slot>
	<slot slot="bottom">
		<Button title="Сохранить" on:click="{() => saveUrl(edit_url.url)}" />
	</slot>
</Popup>

{#if isOpenGraphEdit}
	<OpenGraphEditor bind:dataOpenGraph={og_data}  bind:isOpenGraphEdit={isOpenGraphEdit} />
{/if}

{#if isUploadFile}
	<UploaderFiles bind:isUploadFile={isUploadFile} bind:post={post} typeUploadFile='css' fieldPost='includecss' />
{/if}

{#if isUploadImages}
	<UploaderImages bind:isUploadImages={isUploadImages} bind:includeFiles={post.includefiles} idPost={post.id}  />
{/if}

{#if user.isAdmin}
<AdminButtons>
	<BtnAdminEdit title="OpenGraph" bg="opengraph" on:click="{openGraphEdit}" />
	<BtnAdminEdit title="URL" bg="url" on:click="{() => urlEdit(post.slug)}" />
	<BtnAdminEdit title="Icon" bg="css" on:click="{isuploadCss}" />
	<BtnAdminEdit title="Gallery" bg="gallery" on:click="{isuploadImages}" />
</AdminButtons>
{/if}

<div class="wrap wrap_post">
	<div class="work">
		<article class="post">
			{#if user.isAdmin}<div class="publication"><Switch status={post.publication} on:click={changeStatus} /></div>{/if}

			<div class="title">
				{@html post.title}
			</div>
			{#if user.isAdmin}
			<div class="btns">
				<button class="btn save" on:click={savePostFn}>Сохранить</button>
			</div>
			{/if}
			{#if user.isAdmin}
				<PostNodesEditor bind:nodes={post.post} />
			{:else}
				<PostNodesShow bind:nodes={post.post} />
			{/if}
			<div class="share" use:initShare>
				<div class="share-title">Поделиться:</div>
			</div>
		</article>
	</div>
</div>

<style lang="scss">
.wrap_post{
	padding: 140px 0 50px 0;
}

.btns{
	width: 100%;
	margin: 20px 0;
	display: flex;
	justify-content: flex-end;
}

.btn{
	padding: 7px 14px;
	background-color: #000;
	border: none;
	outline: none;
	color: #fff;
	margin-left: 10px;
	cursor: pointer;
	font-size: 12px;
	&:hover{
		background-color: rgba(0,0,0,0.75);
	}
}

.post{
	position: relative;
	width: 100%;
}

.title{
	position: relative;
    width: 100%;
    color: var(--text-primary);
    text-align: center;
    font-size: 28px;
    margin-top: 20px;
}

.editUrl{
	width: 100%;
	box-sizing: border-box;
	outline: none;
	border: 1px solid #000;
	padding: 7px 10px;
}

.share{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
}

.share-title{
	font-weight: 600;
	margin-right: 5px;
}

@media only screen and (max-width: 639px){
	.title{
		font-size: 22px;
		line-height: 1.5em;
	}
}
</style>