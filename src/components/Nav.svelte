<script lang='ts'>
    import {menu} from '../lib/menu';

    export let isOpen:boolean = false;

    function closeMenu(){
        isOpen = !isOpen;
    }
</script>

<div class="container" class:open={isOpen}>
    <nav class="mainmenu_container">
        <ul class="mainmenu">
            {#each $menu as item (item.id)}
                <li class="item {item.active ? 'active' : ''}">
                    <a class="link" href="/{item.url}">{item.title}</a>
                </li>
            {/each}
        </ul>
    </nav>
    <span class="close" on:mousedown={closeMenu}></span>
</div>

<style lang="scss">

.mainmenu{
  display: flex;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.item{
    position: relative;
    height: 100%;
    &.active{
        .link{
            color: rgba(255,255,255,.6);
        }
    }
}

.link{
    display: flex;
    height: 100%;
    padding: 0 10px;
    align-items: center;
    color: var(--text-secondary);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
}

@media only screen and (max-width: 767px){
    .container{
        &.open{
            .close{
                background-image: url(/svg/close-white.svg);
                background-size: 40px 40px;
            }
            .mainmenu_container{
                position: fixed;
                z-index: 10;
                top: 0;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(0,0,0,0.94);
                width: 100%;
                height: 100%;
            }
        }
    }

    .mainmenu_container{
        display: none;
    }

    .close{
        position: absolute;
        z-index: 11;
        top: 4px;
        right: 20px;
        display: block;
        width: 40px;
        height: 40px;
        background-image: url(/svg/menu_w.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 36px auto;
    }

    .mainmenu{
        flex-wrap: wrap;
        height: auto;
    }

    .item{
        width: 100%;
        height: auto;
        margin: 15px 0;
    }

    .link{
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
    }
}
</style>