<script lang='ts'>
	import type {OG, User} from '../types'

	import AdminButtons from '../../components/AdminButtons.svelte';
	import BtnAdminEdit from '../../components/BtnAdminEdit.svelte';
	import OpenGraphEditor from '../../components/OpenGraphEditor.svelte';

	export let data:{
		og_data: OG[];
		user: User;
	};

	let og_data = data.og_data[0];
	let user = data.user;

	let isOpenGraphEdit = false;

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

<div class="wrap wrap_portfolio">
	<div class="work">
		<div class="portfolio">
			<div class="block">
				<div class="image">
					<img src="/portfolio/engwell.jpg" alt=""  />
				</div>
				<div class="title">www.engwell.ru</div>
				<div class="text">Сайт репетитора по английскому языку. Лендинг с возможностью редактирования, формой отправки сообщений владельцу и формой отправки отзыва о репетиторе.</div>
				<div class="description">
					<div class="description_line">
						<div class="text_desc"><span>Услуги:</span> Дизайн & Верстка & JS</div>
					</div>
					<div class="description_line">
						<div class="text_desc"><span>Платформа:</span> Sapper / Svelte</div>
					</div>
					<div class="link_line">
						<a href="https://engwell.ru" class="link" target="_blank">Перейти на сайт</a>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="image">
					<img src="/portfolio/nevkat.jpg" alt=""  />
				</div>
				<div class="title">www.nevkat.ru</div>
				<div class="text">Лендинг компании занимающейся приемом автомобильных катализаторов. Информеры биржи металлов LME и калькулятор для расчета приемки, доступный для приемщика.</div>
				<div class="description">
					<div class="description_line">
						<div class="text_desc"><span>Услуги:</span> Верстка & JS</div>
					</div>
					<div class="description_line">
						<div class="text_desc"><span>Платформа:</span> Sapper / Svelte</div>
					</div>
					<div class="link_line">
						<a href="https://nevkat.ru" class="link" target="_blank">Перейти на сайт</a>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="image">
					<img src="/portfolio/barbernsk.jpg" alt=""  />
				</div>
				<div class="title">www.barbernsk.ru</div>
				<div class="text">Лендинг для барбершопа в городе Невинномысске. Информация о ценах, услагух и мастерах барбершопа с возможностью онлайн записи на услуги.</div>
				<div class="description">
					<div class="description_line">
						<div class="text_desc"><span>Услуги:</span> Верстка & JS</div>
					</div>
					<div class="description_line">
						<div class="text_desc"><span>Платформа:</span> html / css / js</div>
					</div>
					<div class="link_line">
						<a href="https://barbernsk.ru" class="link" target="_blank">Перейти на сайт</a>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="image">
					<img src="/portfolio/shopusk23.jpg" alt=""  />
				</div>
				<div class="title">www.shop.usk23.ru</div>
				<div class="text">Сайт преподавателя английского языка. Сайт преподавателя английского языка. Сайт преподавателя английского языка. Сайт преподавателя английского языка.</div>
				<div class="description">
					<div class="description_line">
						<div class="text_desc"><span>Услуги:</span>Верстка & JS</div>
					</div>
					<div class="description_line">
						<div class="text_desc"><span>Платформа:</span> 1С-Битрикс</div>
					</div>
					<div class="link_line">
						<a href="https://shop.usk23.ru" class="link" target="_blank">Перейти на сайт</a>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="image">
					<img src="/portfolio/splavld.jpg" alt=""  />
				</div>
				<div class="title">www.splav-ld.ru</div>
				<div class="text">Сайт преподавателя английского языка. Сайт преподавателя английского языка. Сайт преподавателя английского языка. Сайт преподавателя английского языка.</div>
				<div class="description">
					<div class="description_line">
						<div class="text_desc"><span>Услуги:</span> Верстка & JS</div>
					</div>
					<div class="description_line">
						<div class="text_desc"><span>Платформа:</span> WordPress</div>
					</div>
					<div class="link_line">
						<a href="https://splav-ld.ru" class="link" target="_blank">Перейти на сайт</a>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="image">
					<img src="/portfolio/usk23.jpg" alt=""  />
				</div>
				<div class="title">www.usk23.ru</div>
				<div class="text">Сайт преподавателя английского языка. Сайт преподавателя английского языка. Сайт преподавателя английского языка. Сайт преподавателя английского языка.</div>
				<div class="description">
					<div class="description_line">
						<div class="text_desc"><span>Услуги:</span> Верстка & JS</div>
					</div>
					<div class="description_line">
						<div class="text_desc"><span>Платформа:</span> 1С-Битрикс</div>
					</div>
					<div class="link_line">
						<a href="https://usk23.ru" class="link" target="_blank">Перейти на сайт</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
.wrap_portfolio{
	padding: 40px 0;
	padding-top: 140px;
	background-color: #fff;
}

.portfolio{
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
}

.block{
	display: block;
	width: calc(100%/3 - 30px);
	margin: 20px 15px;
	box-sizing: border-box;
	background-color: #f0f0f1;
	box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.20);
	border-radius: 3px;
	overflow: hidden;
}

.image{
	width: 100%;
	img{
		max-width: 100%;
		height: auto;
		vertical-align: bottom;
	}
}

.title{
	width: 100%;
	font-size: 20px;
	font-family: var(--font-subtitle);
	color: #252525;
	text-align: center;
	line-height: 1em;
	font-weight: 600;
	padding: 25px 0;
}

.text{
	width: calc(100% - 50px);
	font-size: 14px;
	line-height: 1.6em;
	font-family: var(--font-subtitle);
	font-weight: 400;
	color: #606060;
	text-align: center;
	box-sizing: border-box;
	margin: 0 25px;
	border-top: 1px solid #dadada;
	border-bottom: 1px solid #dadada;
	padding: 15px 0;
	margin-bottom: 20px;
}

.description{
	width: 100%;
	box-sizing: border-box;
    background-color: #dddddd;
    border-bottom: 3px solid #13181a;
}

.description_line{
	position: relative;
	display: flex;
	width: 100%;
	padding: 15px;
	box-sizing: border-box;
	&::before{
		content: "";
		display: block;
		position: absolute;
		background-color: rgba(0,0,0,0.1);
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
	}
}

.text_desc{
	line-height: 1em;
	font-family: var(--font-subtitle);
	font-weight: 400;
	color: rgba(0,0,0,0.7);
	span{
		display: inline-block;
		width: 100px;
		font-family: var(--font-subtitle);
		font-weight: 500;
		color: #000;
		text-align: right;
		box-sizing: border-box;
		padding-right: 7px;
	}
}

.link_line{
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 10px 15px;
	box-sizing: border-box;
}

.link{
	display: inline-block;
    padding: 11px 23px 12px;
	text-decoration: none;
	font-weight: 500;
	color: rgba(0,0,0,.8);
}

@media only screen and (max-width: 1023px){
	.block{
		width: calc(100%/2 - 30px);
	}	
}

@media only screen and (max-width: 639px){
	.block{
		width: 100%;
		margin: 15px 0;
	}	
}
</style>