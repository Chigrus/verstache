export type Article = {
    id: number;
    type: string;
    content: string;
}
export type User = {
    isAdmin: boolean;
    isEditor: boolean;
}
export type OG = {
    title: string;
    description: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_image: string;
    og_image_type: string;
    og_image_width: string;
    og_image_height: string;
    og_article: Object;
    og_profile: Object;
    og_video: Object;
}
export type InfoEditBlock = {
    id: number;
    field: keyof Post;
    type: string;
    title: string;
}
export type Post = {
    id: number;
    date: Date;
    slug: string;
    title: string;
    text: string;
    publication: boolean;
    post: Article[];
    [key: string]: any;
}

export type EditField = {
    popup: boolean; 
    info: InfoEditBlock;
}

export type EditUrl = {
    popup: boolean; 
    url: string;
}