/***************************************** Получаем меню  ******************************************/

export async function getMenu(locals){
    const { dbconn } = locals;

    try {
        const result = await dbconn.query(`SELECT * 
                                           FROM public.menu 
                                           ORDER BY position`);
        return result.rows;
    } 
    catch (err) {
        console.log(err);
        return [
            { id: 1, title: 'Ошибка получения меню', url: '/', position: 1, active: true },  
        ]
    }

    
}

/***************************************** Получаем Open Graph  ******************************************/

export async function getOG(locals, og_id){
    const { dbconn } = locals;

    const result = await dbconn.query(`SELECT 
                                            opengraph.id as og_id,
                                            opengraph.title as title,
                                            opengraph.description as description,
                                            opengraph.og_type,
                                            opengraph.og_title,
                                            opengraph.og_description,
                                            opengraph.og_url,
                                            opengraph.og_image,
                                            opengraph.og_image_type,
                                            opengraph.og_image_width,
                                            opengraph.og_image_height,
                                            opengraph.og_article,
                                            opengraph.og_profile,
                                            opengraph.og_video
                                       FROM public.opengraph 
                                       WHERE opengraph.id = $1 
                                       LIMIT 1`,  [og_id]);

    return result.rows;
}

/***************************************** Получаем Пост  ******************************************/

export async function getPost(locals, post_id){
    const { dbconn } = locals;

    const result = await dbconn.query(`SELECT * 
                                       FROM public.posts 
                                       WHERE id = $1 
                                       LIMIT 1`, [post_id]);

    return result.rows[0];
}

/***************************************** Получаем Пост по slug ******************************************/

export async function getSinglePost(locals, slug){
    const { dbconn } = locals;

    const result = await dbconn.query(`SELECT * 
                                       FROM public.posts 
                                       WHERE slug = $1 
                                       LIMIT 1`, [slug]);

    return result.rows[0];
}

/***************************************** Получаем Посты из указанной категрии  ******************************************/

export async function getPosts(locals, cat_id, user){
    const { dbconn } = locals;

    let text;

    if(user.isAdmin){
        text = `SELECT * 
                FROM public.posts 
                WHERE category = $1`;
    }else{
        text = `SELECT * 
                FROM public.posts 
                WHERE category = $1 AND publication = true`;
    }

    const values = [cat_id];    
                          
    const result = await dbconn.query(text, values); 

    return result.rows;
}

/***************************************** Получаем Администрацию  ******************************************/

export async function getAdministration(locals, status){
    const { dbconn } = locals;

    let text;


    text = `SELECT * 
            FROM public.users 
            WHERE user_status = $1`;


    const values = [status];    
                          
    const result = await dbconn.query(text, values); 

    return result.rows;
}

/***************************************** Получаем пользователя  ******************************************/

export async function selectUser(locals, login) {
    const { dbconn } = locals;

    try {
        const result = await dbconn.query(`SELECT * 
                FROM public.users 
                WHERE user_login = $1 
                LIMIT 1`, [login]);

        return result.rows;
    } 
    catch (err) {
        console.log(err);
        return err;
    }
};