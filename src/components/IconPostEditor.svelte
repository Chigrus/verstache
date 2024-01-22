<script lang='ts'>
    import Popup from '../components/Popup.svelte';
    import Button from '../components/Button.svelte';
    import Cropper from "svelte-easy-crop";
    import ButtonUploadFile from '../components/ButtonUploadFile.svelte';

    import { cropImage } from '../domain';
    import { uploadImage, saveIconPost } from '../requests';

    export let iconPost:string;
    export let idPost:number;
    export let isIconPostEdit = false;

    let cropData:Object;
    let cropSize = {width: 370, height: 240};

    let isUploadImage:boolean;

    async function iconPostSave(){
        if (isUploadImage){
			const blob = await cropImage(iconPost, cropData, cropSize, 'image/jpeg', 1);
			let res = await uploadImage('image/jpeg', blob);
			iconPost = res.url;
            console.log(iconPost);
		}
        saveIconPost(idPost, iconPost);
		isIconPostEdit = false;
    }
</script>

<Popup bind:isOpen="{isIconPostEdit}">
	<div slot="title">Редактировать иконку поста</div>
    <div slot="content">
        <div class="cropper">
            <Cropper 
                image={iconPost}
                crop={{ x: 0, y: 0 }}
                zoom={1}
                minZoom={0.8}
                maxZoom={2}
                aspect = {370/240}
                zoomSpeed={0.1}
                restrictPosition={false}
                on:cropcomplete={(event) => cropData = event.detail.pixels}
            />
        </div>
        <div class="imgInfo">
            <ButtonUploadFile bind:imgFile={iconPost} bind:imgUpload={isUploadImage} />
        </div>
    </div>
    <div slot="bottom">
		<div class="lineSave">
			<Button title="Сохранить" on:click="{iconPostSave}" />
		</div>
	</div>
</Popup>

<style lang="scss">
    .cropper{
        position: relative;
        float: left;
        width: 100%;
        height: 300px;
        overflow: hidden;
        margin-bottom: 5px;
        box-sizing: border-box;
    }
</style>