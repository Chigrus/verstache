<script lang='ts'>
    import type {NodePost} from '../routes/types';
    import { createEventDispatcher } from 'svelte';

    export let node: NodePost;
    export let id:number;

    node.isCurrent = false;

    const dispatch = createEventDispatcher();

    import type { ComponentType } from 'svelte';
	import Editor from 'cl-editor';
	const cedit: ComponentType = Editor;


    let actions = ['b', 'i', 'undo', 'redo', ];

    function editHtml(e:CustomEvent){
		console.log(e.detail);
		//post[edit_field.info.field] = e.detail;
	}

    function clickNode(id:number, type:string){
        console.log(id, type, node);
        node.isCurrent = true;
    }
</script>

<div class="container" on:mousedown={() => clickNode(id, node.type)}>
    <div class="node">
        {#if node.type === 'h1'}
            <h1>{@html node.content}</h1>
            
            <!-- <h1 on:dblclick={() => dispatch('editNode', {id: node.id})}>{@html node.content}</h1> -->
            <!-- <svelte:component this={cedit} actions={actions} html={node.content} on:change="{(e) => editHtml(e)}" height='auto' /> -->

        {/if}

        {#if node.type === 'h2'}
            <h2>{@html node.content}</h2> 
        {/if}

        {#if node.type === 'p'}
            <p>{@html node.content}</p>
        {/if}
    </div>
    <!-- <div class="edit">
        <div class="btn">up</div>
        <div class="btn">down</div>
    </div> -->
</div>

<style lang="scss">
    .container{
        position: relative;
        width: 100%;
    }

    .node{
        width: calc(100% - 40px);
    }

    .edit{
        position: absolute;
        top: -1px;
        right: 0;
        width: 40px;
        height: calc(100% + 2px);
    }

    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 40px;
        background-color: red;
        font-size: 10px;
        margin-bottom: 5px;
        margin-left: 5px;
        cursor: pointer;
    }
</style>