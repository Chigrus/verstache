<script lang='ts'>
    import type {Post} from '../routes/types';
    export let notice: Post;
</script>

<div class="block">
    <div class="image"></div>
    <div class="content">
        <div class="title">{notice.title}</div>
        <div class="text">{notice.text}</div>
        <div class="info">
            <div class="data">23/09/2022</div>
            <div class="by">Администрация</div>
        </div>
    </div>
</div>

<style lang="scss">
.block{
    position: relative;
    display: flex;
    width: 100%;
}

.image{
    width: 160px;
    height: 160px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.content{
    width: calc(100% - 160px);
    box-sizing: border-box;
    padding-left: 30px;
}

.title{
    width: 100%;
    color: #202020;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.1em;
}

.text{
    width: 100%;
    color: #202020;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4em;
    margin-top: 10px;
}

.info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 1px solid #dcddde;
    margin-top: 20px;
    border-radius: 25px;
    box-sizing: border-box;
    padding: 6px 12px;
}

.data{
    font-size: 12px;
    line-height: 12px;
    color: #4e5453;
    padding-left: 20px;
    background-image: url(/svg/calendar.svg);
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 12px auto;
}

.by{
    font-size: 12px;
    color: #64a507;
    font-weight: 500;
}

@media only screen and (max-width: 1023px){
    .block{
       flex-wrap: wrap;
    }	
    .content {
        width: 100%;
        padding-left: 0px;
        margin-top: 10px;
    }
}
</style>