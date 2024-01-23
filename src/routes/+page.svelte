<script lang='ts'>
	import type {OG, User, Posts, AdministrationList} from './types'

	export let data:{
		og_data: OG[];
		user: User;
		notices: Posts;
		news: Posts;
		administration: AdministrationList;
	};

	let og_data = data.og_data[0];
	let user = data.user;

	let isOpenGraphEdit = false;

	import AdminButtons from '../components/AdminButtons.svelte';
	import BtnAdminEdit from '../components/BtnAdminEdit.svelte';
	import OpenGraphEditor from '../components/OpenGraphEditor.svelte';

	function openGraphEdit(){
		isOpenGraphEdit = true;
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
</AdminButtons>
{/if}

{#if isOpenGraphEdit}
	<OpenGraphEditor bind:dataOpenGraph={og_data}  bind:isOpenGraphEdit={isOpenGraphEdit} />
{/if}


<div class="maincontainer">
	<div class="header">
		<div class="wrap">
			<div class="work">
				<div class="about">
					<div class="tille">Профессиональное создание web-интерфейсов.</div>
					<div class="text">Вам нужно лишь знать, что вы хотите сделать – остальное я cделаю за вас. 
						Передовые инструменты создания интерфейса, скорость и качество работы вашего сайта.</div>
					<a href="/about" class="btn">О себе</a>
				</div>
			</div>
		</div>
		<div class="verstache">wwww.verstache.ru</div>
	</div>
</div>
	


<style lang="scss">
.header{
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	background-image: url(/img/header_bg.jpg);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	&::before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
	}
}

.about{
	position: relative;
	z-index: 1;
	width: 100%;
	max-width: 600px;
}

.tille{
	width: 100%;
	font-size: 40px;
	font-weight: 600;
	color: #fff;
	line-height: 1.2em;
}

.text{
	width: 100%;
	margin-top: 10px;
	font-size: 18px;
	color: rgba(255,255,255,0.6);
	line-height: 2em;
	margin-bottom: 30px;
}

.btn{
	background-color: #fff;
	color: #000;
	font-size: 18px;
	padding: 12px 28px;
	border-radius: 3px;
	text-decoration: none;
}

.verstache{
	position: absolute;
	z-index: 1;
	left: 0;
	bottom: 50px;
	width: 100%;
	text-align: center;
	color: #fff;
	font-size: 16px;
	color: rgba(255,255,255,1);
}

@media only screen and (max-width: 767px){
	.tille{
		font-size: 32px;
	}	
}

@media only screen and (max-width: 539px){
	.tille{
		font-size: 28px;
	}

	.text{
		font-size: 16px;
		line-height: 1.5em;
	}
}
</style>
