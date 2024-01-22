<script lang='ts'>
    import type {IncludeFiles} from '../routes/types';
    import { removeFile, updateIncludeFiles, uploadFiles } from '../requests';

    import Popup from './Popup.svelte';
    import Button from './Button.svelte';

    export let isUploadImages = false;
    export let includeFiles: IncludeFiles;
    export let idPost: number;

    const typeUploadFile = ['.jpg', '.png'];

    let fileInput: any;
    let files: any;

    type DataUpload = {
        [key: string]: any;
    }
    type resUpload = {
        url: string;
        error: boolean;
        message: string;
    }

    async function delFile(id:number){

        const resDel = await removeFile(includeFiles[id].url);
        if (resDel.err){
            console.log(resDel.err);
        }else{
            //console.log(resDel.url);
            let delF = [...includeFiles];
            delF.splice(id, 1);
            includeFiles = delF;
            updateIncludeFiles(idPost, includeFiles);
        }

    }

    function getBase64(files: any) {
        for (const file of files) { 
            const fileReader: FileReader = new FileReader();
            fileReader.readAsDataURL(file);
            // console.log(file.type);
            fileReader.onload = (event: Event) => {
                uploadFunction(fileReader.result, file.type, file.name.match(/\.([^.]+)$|$/)[1]);
            };
        }
    };

    async function uploadFunction(imgBase64:any, typeFile:string, resolutionFile:string) {
        const data: DataUpload = {};
        const imgData = imgBase64.split(',');
        data["file"] = imgData[1];
        data["type"] = typeFile;
        data["resolution"] = resolutionFile;
        let resUpload:resUpload = await uploadFiles('application/json', data);
        if (resUpload.error){
            console.log(resUpload.message);
        }else{
            let addIncludeFiles = [...includeFiles];
            addIncludeFiles.splice(includeFiles.length+1, 0, {url: resUpload.url, title: 'Подпись'});
            includeFiles = addIncludeFiles;
            updateIncludeFiles(idPost, includeFiles);
        }
    };
</script>

<Popup bind:isOpen="{isUploadImages}">
	<div slot="title">Загрузчик изображений</div>
    <div slot="content">
        <div class="container">
            {#if includeFiles}
                {#each includeFiles as file, index}
                    <div class="block">
                        <div class="image">
                            <div class="del" on:mousedown={() => delFile(index)}></div>
                            <img src={file.url} alt={file.title} />
                        </div>
                        <input type="text" class="url" value={file.url} readonly />
                        <input type="text" class="title" bind:value={file.title} />
                    </div>
                {/each}
            {/if}
        </div>
    </div>
    <div slot="bottom">
		<div class="lineSave">
			<Button title="Загрузить файлы" on:click="{() => fileInput.click() }" />
            <input 
                class="hidden" 
                type="file" 
                accept={typeUploadFile.join(',')}
                multiple 
                bind:this={fileInput} 
                bind:files on:change={() => getBase64(files)} 
            />
		</div>
	</div>
</Popup>

<style lang="scss">
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
}

.block{
    width: calc(100%/3 - 20px);
    margin: 10px;
}

.image{
    position: relative;
    width: 100%;
}

.image img{
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
}

.del{
    position: absolute;
    top: 5px;
    right: 5px;
    width: 28px;
    height: 28px;
    cursor: pointer;
    background-color: #a10000;
    background-image: url(/svg/close-white.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 85% auto;
}

.url{
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    padding: 0 5px;
    border: 1px solid rgba(0,0,0,0.3);
    margin-top: 5px;
    outline: none;
    &:focus{
        border: 1px solid rgba(0,0,0,0.5);
    }
}

.title{
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    padding: 0 5px;
    border: 1px solid rgba(0,0,0,0.3);
    margin-top: 5px;
    outline: none;
    &:focus{
        border: 1px solid rgba(0,0,0,0.5);
    }
}

.hidden{
    display: none;
}
</style>