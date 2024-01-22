<script lang='ts'>
    import type { ComponentType } from 'svelte';
	import Editor from 'cl-editor';

    export let title: string;
    export let text: string;

    // @ts-ignore
	const cedit: ComponentType = Editor;

    let actions = ['b', 'i', 'undo', 'redo', 'viewHtml', ];

    function editHtml(e:CustomEvent, field:string){
        if(field === 'title'){
            title = e.detail;
        }else{
            text = e.detail; 
        }
		
	}
</script>

<div class="container">
    <div class="quote">
        <div class="line">
            <svelte:component this={cedit} actions={actions} html={title} on:change="{(e) => editHtml(e, 'title')}" height='auto' />
        </div>        
        <div class="line">
            <svelte:component this={cedit} actions={actions} html={text} on:change="{(e) => editHtml(e, 'text')}" height='auto' />
        </div>        
    </div>
</div>


<style lang="scss">
.container{
    position: relative;
    width: 100%;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    background-color: #ecf0f1;
    padding-top: 40px;box-sizing: border-box;
}

.quote{
    width: 100%;
    background-color: #fff;
    border-top: 1px solid rgba(10, 10, 10, 0.1);
    box-sizing: border-box;
    border-left: 3px solid #000;
    padding: 10px 10px 10px 20px;
}

.line{
    margin-bottom: 20px;
    &:last-child{
        margin-bottom: 0;
    }
}
</style>