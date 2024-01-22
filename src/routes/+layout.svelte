<script lang='ts'>
	export let data;

	import "../app.scss";
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
	import "./styles.css";
	import {menuData} from '../lib/menu';

	$: $menuData = data.menu;
</script>

<div class="app">

	<Header />

	<main>
		<slot />
	</main>

	<Footer />

</div>

<style lang="scss">

</style>
