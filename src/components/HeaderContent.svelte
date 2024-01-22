<div class="container">
	<div class="work hc">
		<div class="content">
			<div class="inner">
                <div class="head_title">Садовое общество Квант</div>
                <div class="line cr">
                    <div class="title">Сайт садового некоммерческого <br>товарищества "Квант"</div>
                </div>
                <div class="line">
                    <a href="/" class="link">www.sntkvant.ru</a>
                </div>
                <ul class="list">
                    <li class="item">Более 1000<br> участков</li>
                    <li class="item">Основан в<br> 1987 году</li>
                    <li class="item">Более 500<br> садоводо</li>
                </ul>
            </div>
		</div>
	</div>
</div>

<style lang="scss">
.work.hc{
    position: relative;
    z-index: 2;
    max-width: 800px;
}

.container{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: calc(100vh - 100px);
    background-image: url(img/bg_main_header.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    &::before{
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,0.5);
    }
}

.content{
    position: relative;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 40px;
}

.inner{
    width: 100%;
}

.head_title{
    position: relative;
    padding: 30px 80px;
    background-color: #46811c;
    border-radius: 0 15px 0 15px;
    color: #fff;
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 15px;
    &::before{
        content: '';
        position: absolute;
        top: -30px;
        left: 40px;
        width: 51px;
        height: 51px;
        background-image: url(/svg/logo.svg);
        background-repeat: no-repeat;
        background-size: contain;
    }
}

.title{
    font-size: 18px;
    line-height: 1.4em;
    color: #fff;
}

.line{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 12%;
    &.cr{
        justify-content: flex-end;
    }
}

.link{
    font-weight: 600;
    color: #fff;
    font-size: 16px;
}

.list{
    display: flex;
    width: 100%;
    justify-content: center;
}

.item{
    position: relative;
    padding-left: 90px;
    display: flex;
    align-items: center;
    min-height: 90px;
    margin: 0 40px;
    line-height: 1.3em;
    color: #fff;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 80px;
        background-color: #fff;
        border-radius: 50%;
    }
    &::after{
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 68px;
        height: 68px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px dashed green;
        background-position: center center;
        background-repeat: no-repeat;
    }
    &:nth-child(1){
        &::after{
            background-image: url(svg/trees.svg);
            background-size: 75% 75%;
        }
    }
    &:nth-child(2){
        &::after{
            background-image: url(svg/found.svg);
            background-size: 60% 60%;
        }
    }
    &:nth-child(3){
        &::after{
            background-image: url(/svg/gardener.svg);
            background-size: 70% 70%;
        }
    }
}

@media only screen and (max-width: 1023px){
    .work.hc{
        max-width: calc(100% - 40px);
    }
    .container{
        height: auto;
        padding-top: 120px;
    }	
    .list{
        margin: 0;
        padding: 0;
    }
    .item{
        margin: 0 20px;
    }
    .head_title{
        box-sizing: border-box;
    }
}

@media only screen and (max-width: 767px){
    .head_title{
        padding: 20px 50px;
        font-size: 32px;
    }
    .item{
        font-size: 12px;
    }
}

@media only screen and (max-width: 639px){
    .head_title{
        font-size: 26px;
    }
    .item{
        flex-wrap: wrap;
        min-height: auto;
        padding: 90px 20px 10px 20px;
        margin: 0 10px;
        text-align: center;
        font-size: 14px;
        &::before{
            left: 50%;
            margin-left: -40px;
        }
        &::after{
            left: 50%;
            margin-left: -35px;
        }
    }
}

@media only screen and (max-width: 479px){
    .container{
        padding-top: 80px;
    }
    .head_title{
        font-size: 20px;
        padding: 20px 25px;
    }
    .title{
        font-size: 14px;
    }
    .item{
        flex-wrap: wrap;
        min-height: auto;
        padding: 90px 10px 10px 10px;
        margin: 0 10px;
        font-size: 12px;
    }
}
</style>