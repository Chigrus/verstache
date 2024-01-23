<script lang='ts'>

	import type {OG, User, Post} from '../types';

	import PostNodesEditor from '../../components/PostNodesEditor.svelte';
	import PostNodesShow from '../../components/PostNodesShow.svelte';
	import AdminButtons from '../../components/AdminButtons.svelte';
	import BtnAdminEdit from '../../components/BtnAdminEdit.svelte';
	import OpenGraphEditor from '../../components/OpenGraphEditor.svelte';
	import WhySvelte from '../../components/WhySvelte.svelte';
	import Chronology from '../../components/Chronology.svelte';

	export let data:{
		og_data: OG[];
		post: Post;
		user: User;
	};

	let og_data = data.og_data[0];
	let post = data.post;
	let user = data.user;

	let isOpenGraphEdit = false;

	async function savePostFn(){

		for (let node of post.post){
            delete node.isEdit;
        }

		const response = await fetch('api/updatepost', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ post: post.post, id: post.id }),
		});

		// let total = await response.json();

		// console.log(total);

	}

	function openGraphEdit(){
		isOpenGraphEdit = true;
	}

	function editNode(id:number){
		console.log(id);
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

{#if isOpenGraphEdit}
	<OpenGraphEditor bind:dataOpenGraph={og_data}  bind:isOpenGraphEdit={isOpenGraphEdit} />
{/if}

{#if user.isAdmin}
<AdminButtons>
	<BtnAdminEdit title="" bg="opengraph" on:click="{openGraphEdit}" />
</AdminButtons>
{/if}

<div class="wrap wrap_about">
	<div class="work">

		<div class="about">
			<div class="left">
				<img src="/uploads/2021-06-01-20-55-47.jpg" alt="Иван Чернов" width="400px" height="400px" />
				<div class="info">
					<h3>Мои контакты</h3>
					<div class="line"><strong>Телефон:</strong> +7 996 631 94 80</div>
					<div class="line"><strong>E-mail:</strong> chigrus@yandex.ru</div>
				</div>
			</div>
			<div class="right">
				<h2 class="title">Привет, меня зовут<br>Иван Чернов</h2>
				<article class="post">
					<p>Моя деятельность в web-индустрии началась в 2008 г.</p> 
					<p>Моя основная стихия – фронтенд-разработка.</p>
					<p>Очень много лет я посвятил html-верстке, поэтому название сайта не случайно.</p>
					<p>Я участвовал в огромном количестве разных проектов – и здесь я делюсь своим опытом. Основная масса статей посвящена интересным задачам, 
						которые рано или поздно предстают перед разработчиками.</p>
					<p>С 2020 года активно изучаю <strong>svelte.js</strong>. Первые сайты на этих технологиях создавал на фреймворке <strong>Sapper</strong>.</p> 
					<p>Как только появилась стабильная версия фреймворка <strong>SvelteKit</strong> – перешел на него.</p>
					<div class="experience">
						<div class="year">15</div>
						<div class="e_title">лет опыта в frontend-разработке.</div>
					</div>
				</article>
			</div>
		</div>

	</div>
</div>

<WhySvelte />
<Chronology />


<style lang="scss">

.wrap_about{
	padding: 40px 0;
	padding-top: 140px;
}

.about{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	width: 100%;
}

.title{
	font-weight: 600;
	font-size: 40px;
	line-height: 1.2em;
}

.left{
	width: 320px;
	img{
		max-width: 100%;
		height: auto;
		vertical-align: bottom;
	}
}

.info{
	width: 100%;
	box-sizing: border-box;
	padding: 20px 15px 15px 15px;
	border: 1px solid rgba(0,0,0,0.1);
}

.info h3{
	font-size: 20px;
	font-weight: 600;
	text-transform: uppercase;
	margin-bottom: 15px;
}

.line{
	width: 100%;
	padding-bottom: 7px;
	margin-bottom: 10px;
	border-bottom: 1px solid rgba(0,0,0,0.1);
	color: #555;
	font-size: 14px;
	&:last-child{
		padding-bottom: 0;
		margin-bottom: 0;
		border: none;
	}
	strong{
		margin-right: 5px;
	}
}

.right{
	width: calc(100% - 320px);
	box-sizing: border-box;
	padding-left: 40px;
}

.experience{
	display: flex;
	align-items: center;
	max-width: 400px;
}

.year{
	font-size: 84px;
	font-weight: 600;
	line-height: 1em;
}

.e_title{
	font-size: 18px;
	text-transform: uppercase;
	padding-left: 15px;
	font-weight: 600;
}

@media only screen and (max-width: 1200px){
	.about{
		align-items: flex-start;
	}

	.title{
		font-size: 32px;
	}
}

@media only screen and (max-width: 767px){
	.left{
		width: 100%;
	}

	.right{
		width: 100%;
		padding-left: 0;
		margin-top: 30px;
	}

	.info{
		margin-top: 25px;
	}

	.title{
		font-size: 28px;
	}
}
</style>