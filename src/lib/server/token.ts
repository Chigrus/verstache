import { jwtVerify } from '$lib/server/utils';

type Cookies = {
    get(name: string): string | undefined;
};

export async function getUser(cookies:Cookies){
    const token = cookies.get('token');

    let user = {
        isAdmin: false,
        isEditor: false,
    };

    if(token){
      const payload = await jwtVerify(token);
      switch (payload.role) {
          case 'admin':
              user.isAdmin = true;
              break;
          case 'editor':
              user.isEditor = true;
              break;
      }
      return user;
    }
    
    return user;
}