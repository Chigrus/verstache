<script lang='ts'>
    export let title: string;
    export let text: string;
</script>


<div class="quote">
    <div class="title">{@html title}</div>
    <div class="text">{@html text}</div>
</div>


<style lang="scss">
.quote{
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0 10px 20px;
    border-left: 3px solid #000;
    margin: 20px 0;
}

.title{
    display: inline-block;
    background-color: #000;
    color: #fff;
    padding: 5px 15px;
    font-size: 14px;
}

.text{
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5em;
}
</style>