<h4 class="subtitle">
    <slot></slot>
</h4>

<style lang="scss">
.subtitle{
    text-align: center;
    color: var(--text-primary);
    font-weight: 600;
    padding: 0;
    margin: 0;
    font-size: 36px;
    text-transform: uppercase;
    line-height: 1em;
    margin-top: 10px;
    letter-spacing: 2px;
}

@media only screen and (max-width: 1023px){
    .subtitle{
        font-size: 32px;
    }
}

@media only screen and (max-width: 767px){
    .subtitle{
        font-size: 28px;
    }
}

@media only screen and (max-width: 479px){
    .subtitle{
        font-size: 24px;
    }
}
</style>