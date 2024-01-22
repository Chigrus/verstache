<script lang='ts'>
	import Nav from "../components/Nav.svelte";

    import { afterNavigate } from '$app/navigation';

    import { page } from '$app/stores';

    afterNavigate(() => {
        isMobileMenu = false; 
    });

    let isMobileMenu:boolean = false;

    function mobileClick(){
        isMobileMenu = true;
    }
</script>

<div class="header {$page.url.pathname !== '/' ? '' : 'home'}">
    <div class="line">
        <a href="/" class="logo">VERSTACHE.</a>
        <div class="emptyFlex"></div>
        <Nav bind:isOpen={isMobileMenu} />
        <!-- <div class="mobile" on:mousedown={mobileClick}></div> -->
    </div>
</div>

<style lang="scss">
.header{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
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
    &.home{
        position: absolute;
        background: none;
        &::before{
            content: none;
        }
    }
}

.line{
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 0 50px;
}

.logo{
	color: #fff;
	font-size: 32px;
    text-decoration: none;
}

@media only screen and (max-width: 1200px){
    .line{
        padding: 0 30px;
    }
}

@media only screen and (max-width: 639px){
    .line{
        padding: 0 20px;
    }
}
</style>