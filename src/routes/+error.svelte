<svelte:head>
	<title>404</title>
</svelte:head>

<div class="wrap wrap_er_404">
	<div class="error404">
        <div class="win">
            <div class="img404"></div>
            <div class="text">Страница не найдена ...</div>
            <span class="win_lt"></span>
            <span class="win_rt"></span>
            <span class="win_lb"></span>
            <span class="win_rb"></span>
        </div>
    </div>
</div>

<style lang="scss">
.wrap_er_404{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 70px);
}

.win{
    position: relative;
    width: calc(100vw - 40px);
    max-width: 480px;
    box-sizing: border-box;
    padding: 50px;
}

.win_lt{
    position: absolute;
    top: 0;
    left: 0;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: #000;
    }
    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 20px;
        background-color: #000;
    }
}

.win_rt{
    position: absolute;
    top: 0;
    right: 0;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 3px;
        background-color: #000;
    }
    &::after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 3px;
        height: 20px;
        background-color: #000;
    }
}

.win_rb{
    position: absolute;
    right: 0;
    bottom: 0;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 3px;
        background-color: #000;
    }
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 3px;
        height: 20px;
        background-color: #000;
    }
}

.win_lb{
    position: absolute;
    left: 0;
    bottom: 0;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px;
        height: 3px;
        background-color: #000;
    }
    &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 3px;
        height: 20px;
        background-color: #000;
    }
}

.img404{
    width: 100%;
    height: 140px;
    background-image: url(/svg/404.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
}

.text{
    width: 100%;
    text-align: center;
    margin-top: 40px;
    font-size: 16px;
}
</style>