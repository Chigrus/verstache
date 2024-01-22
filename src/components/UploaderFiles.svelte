<script lang='ts'>
    import type {Post} from '../routes/types';
    import { uploadFile, saveIconPost } from '../requests';

    type DataUpload = {
        [key: string]: any;
    }
    type resUpload = {
        url: string;
        error: boolean;
        message: string;
    }

    import Popup from './Popup.svelte';
    import Button from './Button.svelte';

    export let isUploadFile = false;
    export let post: Post;
    export let typeUploadFile: string;
    export let fieldPost: string;

    async function saveFile(){
        saveIconPost(post.id, post[fieldPost], fieldPost);
        isUploadFile = false;
    }

    let fileInput: any;
    let files: any;

    function getBase64(file: any) {
        const fileReader: FileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event: Event) => {
            uploadFunction(fileReader.result, file.type);
        };
    };

    async function uploadFunction(imgBase64:any, typeFile:string) {
        const data: DataUpload = {};
        const imgData = imgBase64.split(',');
        data["file"] = imgData[1];
        data["type"] = typeFile;
        data["resolution"] = typeUploadFile;
        //console.log(data);
        let resUpload:resUpload = await uploadFile('application/json', data);
        //console.log(resUpload.url);
        if (resUpload.error){
            post[fieldPost] = '';
            console.log(resUpload.message);
        }else{
            post[fieldPost] = resUpload.url;
        }
    };
</script>

<Popup bind:isOpen="{isUploadFile}">
	<div slot="title">Загрузчик файлов</div>
    <div slot="content">
        <div class="container">
            <div class="line">
                <div class="file {post[fieldPost] === '' || post[fieldPost] === null ? 'nofile' : ''}">
                    {#if typeUploadFile === 'svg'}
                        <img src="{post[fieldPost]}" alt="{post.title}"/>
                    {:else}
                        <div class="fileUpload"></div>
                    {/if}
                </div>
            </div>
            <div class="line mt">
                <input class="hidden" id="file-to-upload" type="file" accept=".{typeUploadFile}" bind:this={fileInput} bind:files on:change={() => getBase64(files[0])} />
                <button class="upload" on:click={ () => fileInput.click() }>Загрузить</button>
            </div>
        </div>
    </div>
    <div slot="bottom">
		<div class="lineSave">
			<Button title="Сохранить" on:click="{saveFile}" />
		</div>
	</div>
</Popup>

<style lang="scss">
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.line{
    display: flex;
    justify-content: center;
    width: 100%;
    &.mt{
        margin-top: 20px;
    }
}

.file{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0,0,0,0.1);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 80% auto;
    img{
        max-width: 100%;
        max-height: 100%;
    }
    &.nofile{
        img{
            display: none;
        }
        .fileUpload{
            display: none;
        }
        background-image: url(/svg/nofile.svg);
    }
}

.fileUpload{
    width: 90%;
    height: 90%;
    background-image: url(/svg/file-css.svg);
}

.hidden{
    display: none;
}

.upload{
    width: 128px;
    height: 32px;
    background-color: black;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
}
</style>