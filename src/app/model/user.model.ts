import {JwtToken} from './jwtToken.model';

const USER_TOKEN = 'user_token';

export class User {

    private static  localStorage = window.localStorage;

    public id: number;
    public name: string;
    public email: string;
    public avatar: string;
    public password: string;
    public real_name: string;
    public city: string;
    public articles_count: number;
    public comments_count: number;
    public likes_count: number;
    public followers_count: number;
    public followings_count: number;
    public is_banned: string;
    public confirm_code: string;
    public is_confirmed: number;
    public last_actived_at: string;
    public created_at: string;
    public updated_at: string;
    public deleted_at: string;
    public jwt_token: JwtToken;

    public static saveUserToken(token: string) {
        this.localStorage.setItem(USER_TOKEN, token);
    }

    public static clearUserToken() {
        this.localStorage.removeItem(USER_TOKEN);
    }

    public static getUserToken(): string {
        return this.localStorage.getItem(USER_TOKEN);
    }
}
