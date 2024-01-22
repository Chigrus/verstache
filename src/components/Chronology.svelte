<script lang='ts'>

</script>
<div class="wrap wrap_chronology">
	<div class="work">
        <div class="chronology">
            <div class="title education">Образование.</div>
            <div class="content">
                <div  class="item">
                    <span class="date">1999 - 2004</span>
                    <h2 class="itemTitle" itemprop="alumniOf">Невинномысский химический колледж</h2>
                    <div class="itemText">
                        <p>г. Невинномысск</p>
                        <p><strong>Специализация</strong> - Автоматизированные системы обработки информации и управления.</p>
                        <p>Здесь я получил те знания которые по сей день дают мне возможность работать по профессии и развиваться!</p>
                    </div>
                </div>
                <div  class="item">
                    <span class="date">2004 - 2008</span>
                    <h2 class="itemTitle" itemprop="alumniOf">Институт Управления Бизнеса и Права</h2>
                    <div class="itemText">
                        <p>г. Ростов-на-Дону</p>
                        <p><strong>Специализация</strong> - Прикладная информатика (в управлении).</p>
                        <p>Здесь я дополнил свои профессиональный интерес и получил хороший жизненный опыт.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
.wrap_chronology{
    padding: 50px 0;
    
}

.chronology{
    width: 100%;
    padding: 50px 0;
}

.title{
    position: relative;
    display: flex;
    align-items: flex-end;
    min-height: 100px;
    font-size: 48px;
    color: #010101;
    font-weight: 600;
    padding-left: 110px;
}

.title::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border: 1px solid #000000;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80% auto;
}

.title.education::before{
    background-image: url(/svg/educationIcon.svg);
}

.content{
    position: relative;
    width: 100%;
    margin-top: 60px;
    box-sizing: border-box;
    padding-left: 110px;
}

.item{
    position: relative;
    width: calc(100% - 140px);
    box-sizing: border-box;
    margin-left: 140px;
    border-left: 2px solid #000000;
    padding-left: 30px;
    padding-bottom: 20px;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background-color: #000;
        border-radius: 50%;
        margin-left: -11px;
    }
}

.item:last-child{
    padding-bottom: 0;
}

.date{
    position: absolute;
    top: -3px;
    left: -140px;
    font-size: 18px;
    font-weight: 600;
}

.itemTitle{
    max-width: 450px;
    font-size: 20px;
    line-height: 1.3em;
    font-weight: 600;
}

.itemText{
    width: 100%;
}

@media only screen and (max-width: 940px){
    .content{
        padding-left: 0px;
    }
}

@media only screen and (max-width: 539px){
    .title{
        font-size: 40px;
    }

    .item{
        width: 100%;
        margin-left: 0;
        border-top: 2px solid #000000;
        border-left: none;
        padding-top: 30px;
        margin-top: 50px;
    }

    .item::before{
        top: -10px;
        left: 50%;
        margin-left: -10px;
    }

    .date{
        top: -50px;
        left: 0;
        font-size: 24px;
    }
}

@media only screen and (max-width: 479px){
    .title{
        font-size: 36px;
    }
}

@media only screen and (max-width: 360px){
    .title{
        font-size: 28px;
    }
}
</style>