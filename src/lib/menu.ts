import {writable, derived} from 'svelte/store';
import { page } from '$app/stores';

type MenuItem = {
    id: number;
    title: string;
    url: string;
}

export const menuData = writable<MenuItem[]>([]);

export const menu = derived([page, menuData], ([$page, $menuData])=>{
    //console.log($page, $menuData);
    return $menuData.map(item => ({
        ...item,
        active: $page.url.pathname === (`/${item.url}`)
    }));
})