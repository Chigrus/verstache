<div class="footer_top">
    <div class="text">Грамотная верстка - это скорость и качество интерфейса вашего приложения.</div>
    <div class="block">
        <div class="title">Меню</div>
        <ul class="list">
            <li class="item">
                <a href="/layout" class="link">Верстка</a>
            </li>
            <li class="item">
                <a href="/portfolio" class="link">Портфолио</a>
            </li>
            <li class="item">
                <a href="/about" class="link">О себе</a>
            </li>
        </ul>
    </div>
    <div class="block">
        <div class="title">Контакты</div>
        <ul class="list">
            <li class="item">+7 996 631 94 80</li>
            <li class="item">chigrus@yandex.ru</li>
        </ul>
    </div>
</div>


<style lang="scss">
.footer_top{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 40px 0;
}

.text{
    width: 50%;
    color: #fff;
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3em;
    box-sizing: border-box;
    padding-right: 100px;
}

.block{
    width: 25%;
    box-sizing: border-box;
    padding-left: 25px;
}

.list{
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.title{
    width: 100%;
    color: #fff;
    font-size: 16px;
    margin-bottom: 20px;
}

.item{
    width: 100%;
    margin: 7px 0;
    padding: 7px 0;
    color: #a0a0a0;
    line-height: 1em;
}

.link{
    width: 100%;
    margin: 7px 0;
    padding: 7px 0;
    color: #a0a0a0;
    line-height: 1em;
    text-decoration: none;
    transition: .5s;
    &:hover{
        color: rgba(255,255,255,.7);
        transition: .5s;
    }
}

@media only screen and (max-width: 1200px){
    .text{
        font-size: 24px;
        padding-right: 50px;
    }   
}

@media only screen and (max-width: 767px){
    .text{
       width: 100%;
       padding: 0;
       margin-bottom: 40px;
    }
    
    .block{
        width: 50%;
        padding: 0;
        padding-right: 15px;
    }
}
</style>