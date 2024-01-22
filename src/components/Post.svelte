<script>
    export let post = {};
</script>

<article class="post">
    <div class="data">Апрель 07, 2023</div>
    <div class="title">{@html post.title}</div>
    <div class="text">{@html post.text}</div>
    <div class="line">
        <a href="/news/{post.slug}" class="link">Читать далее</a>
    </div>
</article>

<style lang="scss">
.post{
    position: relative;
    width: 100%;
    padding: 50px 0;
    &::before{
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 60%;
        height: 1px;
        background-color: var(--bg-third);
        margin-left: -30%;
    }
}

.data{
    width: 100%;
    text-align: center;
    color: var(--text-third);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.title{
    width: 100%;
    color: var(--text-primary);
    text-align: center;
    font-size: 28px;
    margin-top: 20px;
}

.text{
    width: 100%;
    color: var(--text-primary);
    text-align: left;
    font-size: 16px;
    line-height: 1.8em;
    margin-top: 30px;
}

.line{
    width: 100%;
    text-align: center;
    margin-top: 50px;
}

.link{
    padding: 14px 36px;
    background-color: var(--bg-4);
    border-radius: 50px;
    color: var(--text-primary);
    text-decoration: none;
    font-size: 18px;
    transition: .3s;
    &:hover{
        background-color: var(--bg-secondary);
        color: var(--text-secondary);
        transition: .3s;
    }
}
</style>