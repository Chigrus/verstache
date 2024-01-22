<script lang='ts'>
	import type {Posts} from 'src/routes/types';

    import TitleHome from '../components/TitleHome.svelte';
    import SubTitleHome from '../components/SubTitleHome.svelte';
    import NewsBlock from '../components/NewsBlock.svelte';

    export let news: Posts;
</script>

<div class="wrap wrap_news">
    <div class="work">
        <div class="news">
            <TitleHome>Наши новости</TitleHome>
            <SubTitleHome>ЧТО НОВОГО?</SubTitleHome>
            <div class="container">
                {#each news as post}
                    <div class="inner">
                        <NewsBlock post={post} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
.wrap_news{
    background-color: #fff;
}

.news{
    position: relative;
    padding: 65px 0;
}

.container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px;
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

@media only screen and (max-width: 539px){
	.inner{
		width: 100%;
        margin: 15px 0;
	}	
}
</style>