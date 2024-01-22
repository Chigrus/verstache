<script lang='ts'>
	type Info = {
        id: number;
		field: string;
		type: string;
		title: string;
	}

    import { createEventDispatcher } from 'svelte';

    export let top = '0';
    export let right = '0';
    export let info:Info;

    const dispatch = createEventDispatcher();

    function clickEdit() {
        //console.log(info);
        dispatch('getData', {
            popup: true,
            info: info,
        });
    }
</script>

<button class="edit" style="top: {top}; right: {right};" on:click="{clickEdit}"></button>

<style>
.edit{
    position: absolute;
    width: 24px;
    height: 24px;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    background-image: url(/svg/edit.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80% auto;
}
</style>