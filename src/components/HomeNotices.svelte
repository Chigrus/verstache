<script lang='ts'>
	import type {Posts} from 'src/routes/types';

    import TitleHome from './TitleHome.svelte';
    import SubTitleHome from './SubTitleHome.svelte';
    import NoticesBlock from './NoticesBlock.svelte';

    export let notices: Posts;
</script>

<div class="wrap wrap_notices">
    <div class="work">
        <div class="notices">
            <TitleHome>Наша доска</TitleHome>
            <SubTitleHome>ОБЪЯВЛЕНИЙ</SubTitleHome>
            <div class="container">
                {#each notices as notice}
                    <div class="inner">
                        <NoticesBlock notice={notice} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
.wrap_notices{
    background-color: #fff;
}

.notices{
    position: relative;
    padding: 65px 0;
}

.container{
    display: flex;
    width: 100%;
    margin-top: 30px;
}

.inner{
    width: calc(100%/2 - 30px);
    margin: 15px;
}

@media only screen and (max-width: 539px){
    .notices{
        padding: 35px 0;
    }

    .container{
        margin-top: 15px;
    }

    .inner{
        width: 100%;
        margin: 15px 0;
    }
}
</style>