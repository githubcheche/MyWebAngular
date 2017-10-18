import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {User} from '../model/user.model';

@Injectable()
export class UserService {

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
            console.log(data.json().message, data.json().status);
            callback(data.json().message);
            User.clearUserToken();
        }, (error) => {
            callback(error.json().message);
            User.clearUserToken();
        });
    }


}
