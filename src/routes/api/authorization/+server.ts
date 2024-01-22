import { json, error, type Action } from '@sveltejs/kit';
import { selectUser } from '$lib/server/db';
import { sha256, jwtSign } from '$lib/server/utils';

export const POST:Action = async ({ request, locals, cookies }) => {

    const { user } = await request.json();

    const {login, password} = user;

    const userData = await selectUser(locals, login);

    if(userData.length === 0){
      throw error(403, `Пользователь с логином ${login} и указанным паролем не обнаружен!`);
    }
   
    const hash = await sha256(password);


    if (userData[0].user_pass !== hash) {
      throw error(403, `Пользователь с логином ${login} и указанным паролем не обнаружен!`);
    }

    const token = await jwtSign({
        id: userData[0].id,
        role: userData[0].user_role
    });

    cookies.set('token', token, {
      maxAge: 60 * 60 * 24 * 1,  //set cookie to expire after a one day
      httpOnly: true,
      path: '/',
    });

  
    return json(token);
  }