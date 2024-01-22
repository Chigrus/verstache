<script lang='ts'>
    import type {AdministrationUser} from '../routes/types';
    export let user: AdministrationUser;
</script>

<div class="block">
    <div class="photo"></div>
    <div class="content">
        <div class="name">{user.display_name}</div>
        <div class="post">{user.user_post}</div>
    </div>
</div>

<style lang="scss">
.block{
    position: relative;
    text-decoration: none;
}

.photo{
    width: 100%;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.1);
}

.content{
    width: 100%;
    background-color: #333333;
    box-sizing: border-box;
    padding: 15px;
}

.name{
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 1em;
    font-weight: 500;
}

.post{
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.65);
    font-size: 14px;
    line-height: 1em;
    margin-top: 7px;
}
</style>