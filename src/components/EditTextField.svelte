<script lang='ts'>

import type { SvelteComponent, ComponentType } from 'svelte';
import { updateTextField } from '../requests';


import type {Post} from '../routes/types';

import Popup from './Popup.svelte';
import Button from './Button.svelte';


import Editor from 'cl-editor';
    
// @ts-ignore
const cedit: ComponentType<SvelteComponent> = Editor;

const actions = ['b', 'i', 'undo', 'redo', ];

export let isEditField = false;
export let post: Post;
export let field: string;

async function saveFile(){
    updateTextField(post.id, field, post[field]);
    isEditField = false;
}

function editHtml(e:CustomEvent){
    post[field] = e.detail;
}

</script>

<Popup bind:isOpen="{isEditField}">
	<div slot="title">Редактор текста</div>
    <div slot="content">
        <div class="container">
            {#if field == 'title'}
                <svelte:component this={cedit} actions={actions} html={post.title} on:change="{(e) => editHtml(e)}" />
            {/if}
            {#if field == 'text'}
                <svelte:component this={cedit} actions={actions} html={post.text} on:change="{(e) => editHtml(e)}" />
            {/if}
        </div>
    </div>
    <div slot="bottom">
		<div class="lineSave">
			<Button title="Сохранить" on:click="{saveFile}" />
		</div>
	</div>
</Popup>

<style lang="scss">

</style>