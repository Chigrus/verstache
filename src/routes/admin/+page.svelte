<script lang='ts'>
 	import Button from '../../components/Button.svelte';
    import { goto } from '$app/navigation';

    let data = [
        {
            name: 'login',
            placeholder: 'Ваш логин',
            type: 'text',
            value: '',
            class: 'input',
            error: false,
            erEmpty: { isShow: false, title: 'Введите логин' }
        },
        {
            name: 'password',
            placeholder: 'Ваш пароль',
            type: 'password',
            value: '',
            class: 'input',
            error: false,
            erEmpty: { isShow: false, title: 'Введите пароль' }
        }
    ]

	async function authorization(){
        let erCount = 0;

        data.forEach(function(item, i){
            if (item.value == '') {
                data[i].error = true;
                data[i].erEmpty.isShow = true;
                erCount++;
            }
        });

        if (erCount === 0){
            let user:Record<string, string> = {};

            data.forEach(function(item, i){
                user[item.name] = item.value;
            });

            const response = await fetch('/api/authorization', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ user }),
            });

            //let res = await response.json();

            if(response.status === 200){
                console.log('Авторизация прошла успешно!');
                goto("/");
            }else{
                console.log(response.status);
            }
		    //console.log(res);
        }
    }

    function onFocus(i:number){
        data[i].error = false;
        data[i].erEmpty.isShow = false;
    }
</script>

<svelte:head>
	<title>Авторизация</title>
</svelte:head>

<div class="containerAdmin">
	<div class="formAdmin">
        {#each data as line, i}
            {#if line.type == 'text'}
                <div class="lineForm">
                    <span class="titleError">{line.erEmpty.isShow ? line.erEmpty.title : ''}</span>
                    <input class="{line.class}" class:error={line.error} bind:value="{line.value}" on:focus={() => onFocus(i)} placeholder="{line.placeholder}" type="text" />
                </div>
            {/if}
            {#if line.type == 'password'}
                <div class="lineForm">
                    <span class="titleError">{line.erEmpty.isShow ? line.erEmpty.title : ''}</span>
                    <input class="{line.class}" class:error={line.error} bind:value="{line.value}" on:focus={() => onFocus(i)} placeholder="{line.placeholder}" type="password" />
                </div>
            {/if}
        {/each}
        <div class="lineForm">
            <Button title='Войти' on:click={authorization} />
        </div>
	</div>
</div>

<style lang="scss">
.containerAdmin{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
}

.formAdmin{
    width: 100%;
    max-width: 480px;
    box-sizing: border-box;
    padding: 40px;
    border: 1px solid #423232;
}

.input{
    width: 100%;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    padding: 0 10px;
    border: 1px solid #423232;
}

.input.error{
    border: 1px solid #ee3f02;
}

.lineForm{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
}

.lineForm:last-child{
    margin-bottom: 0;
}

.titleError{
    position: absolute;
    top: -16px;
    right: 0;
    color: #ee3f02;
    font-size: 12px;
}
</style>
