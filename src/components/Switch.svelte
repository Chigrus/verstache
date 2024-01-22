<script lang='ts'>
    export let status:boolean;
</script>

<button class="switch" class:no={!status} on:click>
    {#if status}<span>Опубликовано</span>{/if}
    {#if !status}<span>Не опубликовано</span>{/if}
</button>

<style lang="scss">
.switch{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 125px;
    height: 26px;
    border-radius: 50px;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    box-sizing: border-box;
    padding: 0 10px;
    border: none;
    outline: none;
    user-select: none;
    cursor: pointer;
    &::before{
        content: '';
        position: absolute;
        top: -1px;
        right: -1px;
        width: 28px;
        height: 28px;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,0.75);
        box-shadow: 0px 5px 10px -3px rgba(0,0,0,0.4);
    }
}

.switch{
    &.no{
        width: 145px;
        justify-content: flex-end;
        background-color: rgba(0,0,0,0.6);
        &::before{
            right: auto;
            left: -1px;
        }  
    }
}
</style>