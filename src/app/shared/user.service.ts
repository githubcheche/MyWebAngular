import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {User} from '../model/user.model';


const USER_TOKEN = 'user_token';

@Injectable()
export class UserService {

    private localStorage = window.localStorage;

    constructor(private http: HttpService) {
    }

    postRegister(body: any, callback): void {
        this.http.postRegister(body).subscribe((data) => {
            if (data.json().status) {
                callback(data.json().message);
            }
        });
    }

    postLogin(body: any, callback): void {
        this.http.postLogin(body).subscribe((data) => {
            if (data.json().status) {
                callback(data.json().message, data.json().data);
            }
        });
    }

    getLogout(callback): void {
        this.http.getLogout().subscribe((data) => {
            if (data.json().status) {
                callback(data.json().message);
                this.clearUserToken();
            }
        });
    }

    saveUserToken(token: string) {
        this.localStorage.setItem(USER_TOKEN, token);
    }

    clearUserToken() {
        this.localStorage.removeItem(USER_TOKEN);
    }

    getUserToken(): string {
        return this.localStorage.getItem(USER_TOKEN);
    }

}
