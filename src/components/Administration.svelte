<script lang='ts'>
	import type {AdministrationList} from 'src/routes/types';

    import TitleHome from './TitleHome.svelte';
    import SubTitleHome from './SubTitleHome.svelte';

    import AdministrationUser from '../components/AdministrationUser.svelte';

    export let administration: AdministrationList;
</script>

<div class="wrap bg_administration">
    <div class="work">
        <div class="administration">
            <TitleHome>Наша</TitleHome>
            <SubTitleHome>АДМИНИСТРАЦИЯ</SubTitleHome>
            <div class="container">
                {#each administration as user}
                    <div class="inner">
                        <AdministrationUser user={user} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
.bg_administration{
    background-repeat: repeat;
    background-image: url(/img/bg-administration.png);
}

.administration{
    position: relative;
    padding: 65px 0;
}

.container{
    display: flex;
    width: 100%;
    margin-top: 30px;
}

.inner{
    width: calc(100%/4 - 30px);
    margin: 15px;
}

@media only screen and (max-width: 1023px){
    .inner{
        width: calc(100%/2 - 30px);
    }	
}

@media only screen and (max-width: 539px){
    .administration{
        padding: 35px 0;
    }	

    .inner{
        width: 100%;
        margin: 15px 0;
    }
}
</style>