<script lang='ts'>
	import type {EditField, OG, User, EditUrl} from './types'
	import type {Post} from '../../types'
	import { goto } from '$app/navigation';

	export let data:{
		post: Post;
		og_data: OG[];
		user: User;
	};

	let post = data.post;
	let og_data = data.og_data[0];
	let user = data.user;

	let edit_field:EditField = {
		popup: false,
		info: {
			id: 0,
			field: '',
			type: '',
			title: '',
		},
	};

	let edit_url:EditUrl = {
		popup: false,
		url: '',
	};

	let actions = ['b', 'i', 'undo', 'redo', ];

	import Popup from '../../../components/Popup.svelte';
	import AdminButtons from '../../../components/AdminButtons.svelte';
	import BtnAdminEdit from '../../../components/BtnAdminEdit.svelte';
	import OpenGraphEditor from '../../../components/OpenGraphEditor.svelte';
	import IconPostEditor from '../../../components/IconPostEditor.svelte';
	import BtnEditBlock from '../../../components/BtnEditBlock.svelte';
	import Button from '../../../components/Button.svelte';
	import Switch from '../../../components/Switch.svelte';

	import PostNodesEditor from '../../../components/PostNodesEditor.svelte';
	import PostNodesShow from '../../../components/PostNodesShow.svelte';

	//import Editor from 'cl-editor';

	import type { ComponentType } from 'svelte';
	import Editor from 'cl-editor';
	// @ts-ignore
	const cedit: ComponentType = Editor;

	let isOpenGraphEdit = false;
	let isIconPostEdit = false;


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

	function iconPostEdit(){
		isIconPostEdit = true;
	}

	function editHtml(e:CustomEvent){
		post[edit_field.info.field] = e.detail;
	}

	async function saveBlock(dataField:EditField){
		const response = await fetch('/api/update', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ id: dataField.info.id, field: dataField.info.field, value: post[dataField.info.field]  }),
		});

		//let total = await response.json();

		//console.log(total);

		edit_field.popup = false;
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

<Popup isOpen={edit_field.popup}>
	<slot slot="title">
		{edit_field.info.title}
	</slot>
	<slot slot="content">
		{#if edit_field.info.field === 'title'}
			<svelte:component this={cedit} actions={actions} html={post['title']} on:change="{(e) => editHtml(e)}" />
		{/if}
		{#if edit_field.info.field === 'text'}
			<svelte:component this={cedit} actions={actions} html={post['text']} on:change="{(e) => editHtml(e)}" />
		{/if}
	</slot>
	<slot slot="bottom">
		<Button title="Сохранить" on:click="{() => saveBlock(edit_field)}" />
	</slot>
</Popup>

{#if isOpenGraphEdit}
	<OpenGraphEditor bind:dataOpenGraph={og_data}  bind:isOpenGraphEdit={isOpenGraphEdit} />
{/if}

{#if isIconPostEdit}
	<IconPostEditor bind:iconPost={post.icon} idPost={post.id} bind:isIconPostEdit={isIconPostEdit} />
{/if}

{#if user.isAdmin}
<AdminButtons>
	<BtnAdminEdit title="OpenGraph" bg="opengraph" on:click="{openGraphEdit}" />
	<BtnAdminEdit title="URL" bg="url" on:click="{() => urlEdit(post.slug)}" />
	<BtnAdminEdit title="Icon" bg="icon" on:click="{iconPostEdit}" />
</AdminButtons>
{/if}

<div class="wrap">
	<div class="work">
		<article class="post">
			{#if user.isAdmin}<div class="publication"><Switch status={post.publication} on:click={changeStatus} /></div>{/if}
			<div class="data">{monthNames[post.date.getMonth()]} {post.date.getDate()}, {post.date.getUTCFullYear()}</div>
			<!-- <div class="data">Апрель 07, 2023</div> -->
			<div class="title">
				{@html post.title}
				{#if user.isAdmin}<BtnEditBlock 
					on:getData={(event) => { edit_field = event.detail; }}
					info={{id: post.id, field: 'title', type: 'input', title: 'Редактирования названия поста:'}}
				/>{/if}
			</div>
			<div class="text">
				{@html post.text}
				{#if user.isAdmin}<BtnEditBlock 
					on:getData={(event) => { edit_field = event.detail; }}
					info={{id: post.id, field: 'text', type: 'input', title: 'Редактирования краткой записи:'}}
				/>{/if}
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
	padding: 50px 0;
}

.data{
    width: 100%;
    text-align: center;
    color: var(--text-third);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.title{
	position: relative;
    width: 100%;
    color: var(--text-primary);
    text-align: center;
    font-size: 28px;
    margin-top: 20px;
}

.text{
	position: relative;
    width: 100%;
    color: var(--text-primary);
    text-align: left;
    font-size: 16px;
    line-height: 1.8em;
    margin-top: 30px;
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
</style>