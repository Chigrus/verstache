<script lang='ts'>
    import FooterTop from '../components/FooterTop.svelte';
</script>

<footer>
    <div class="wrap wrap__footer">
        <div class="work">
            <FooterTop />
            <div class="footer">
                <span>VERSTACHE.</span> &copy; 2024 Все права защищены
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
.wrap__footer{
    background-color: #13181a;
}

.footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;
    color: #a0a0a0;
    box-sizing: border-box;
}
</style>