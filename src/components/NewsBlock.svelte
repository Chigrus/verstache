<script lang='ts'>
    import type {Post, User} from '../routes/types';
    import UploaderFiles from './UploaderFiles.svelte';
    import EditTextField from './EditTextField.svelte';
    //import { enhance } from '$app/forms';
    export let post: Post;
    export let user: User;

    //const authorizedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

    let isUploadFile:boolean;
    let isEditField:boolean;
    let field:string;

    function openUploadFile(){
		isUploadFile = true;
	}

    function openEditField(nameField:string){
		isEditField = true;
        field = nameField;
	}
</script>

<div class="block">
    <div class="icon {post.icon === '' ? 'noicon' : ''}">
        {#if user.isAdmin}
            <span class="editicon" title="Изменить иконку" on:mousedown="{openUploadFile}"></span>

            <!-- <form 
                method="POST"
                enctype="multipart/form-data"
                use:enhance={({}) => {               
                    return async ({ result }) => {
                      console.log(result);
                      post.icon = result.data.url;
                    };
                  }}
            >
                <input
                    type="file"
                    id="file"
                    name="fileToUpload"
                    accept={authorizedExtensions.join(',')}
                    required
                />
                <button  type="submit"></button>
            </form> -->
        {/if}
        <img src="{post.icon}" alt="{post.title}" />
    </div>
    <h3 class="title">
        {#if user.isAdmin}
            <div class="editfield" on:mousedown={() => openEditField('title')}></div>
        {/if}
        {@html post.title}
    </h3>
    <div class="text">
        {#if user.isAdmin}
            <div class="editfield" on:mousedown={() => openEditField('text')}></div>
        {/if}
        {@html post.text}
    </div>
    <a href="/layout/{post.slug}" class="line">
        <span class="more">Подробнее</span>
    </a> 
</div>
<UploaderFiles bind:isUploadFile={isUploadFile} bind:post={post} typeUploadFile='svg' fieldPost='icon' />
<EditTextField bind:isEditField={isEditField} bind:post={post} bind:field={field}/>

<style lang="scss">
.block{
    position: relative;
    display: block;
    text-decoration: none;
    background-color: #FFFFFF;
    padding: 50px 50px 40px 45px;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
}

.icon{
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    width: 64px;
    height: 64px;
    img{
        max-width: 100%;
        max-height: 100%;
    }
    &.noicon{
        background-color: rgba(0,0,0,0.1);
        img{
            display: none;
        }
    }
    &:hover{
        .editicon{
            display: block;
        }
    }
}

.editfield{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.editicon{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.85);
    display: none;
    cursor: pointer;
    background-image: url(/svg/edit_w.svg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 24px auto;
}

.title{
    position: relative;
    width: 100%;
    margin-top: 20px;
    font-size: 22px;
    font-weight: 500;
}

.text{
    position: relative;
    width: 100%;
    min-height: 120px;
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.4em;
    color: #656565;
}

.line{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 25px;
}

.more{
    font-weight: 500;
    font-size: 14px;
    line-height: 1em;
}

@media only screen and (max-width: 1199px){
    .block{
        padding: 25px 25px 20px 25px;
    }
}
</style>