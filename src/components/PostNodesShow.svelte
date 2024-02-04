<script lang='ts'>
    import type {Nodes} from '../routes/types';
    import Highlight from "svelte-highlight";
	import xml from "svelte-highlight/languages/xml";
	import css from "svelte-highlight/languages/css";
    
    import QuoteOne from '../components/QuoteOne.svelte';

    export let nodes: Nodes;
</script>


{#each nodes as node, index}
    {#if node.type === 'h1'}
        <h1>{@html node.content}</h1>
    {/if}
    {#if node.type === 'h2'}
        <h2>{@html node.content}</h2>
    {/if}
    {#if node.type === 'h3'}
        <h3>{@html node.content}</h3>
    {/if}
    {#if node.type === 'h4'}
        <h4>{@html node.content}</h4>
    {/if}
    {#if node.type === 'p'}
        <p>{@html node.content}</p>
    {/if}
    {#if node.type === 'ul'}
        <ul>{@html node.content}</ul>
    {/if}
    {#if node.type === 'ol'}
        <ol>{@html node.content}</ol>
    {/if}
    {#if node.type === 'code_html'}
        <Highlight language={xml} code={node.content} />
    {/if}
    {#if node.type === 'code_css'}
        <Highlight language={css} code={node.content} />
    {/if}
    {#if node.type === 'noindex'}
        <noindex>{@html node.content}</noindex>
    {/if}
    {#if node.type === 'quote_1'}
        <QuoteOne title={node.content.title} text={node.content.text}/>
    {/if}
{/each}

<style lang="scss">
h1{
    font-size: 24px;
}

h2{
  font-size: 20px;
}

h3{
  font-size: 18px;
}

h4{
  font-size: 16px;
}

p{
  font-size: 16px;
  line-height: 1.7em;
}

ul :global(li){
  font-size: 16px;
}
</style>