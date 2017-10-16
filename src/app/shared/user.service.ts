import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {User} from '../model/user.model';

@Injectable()
export class UserService {

    private user;

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
                callback(data.json().message, data.json().data[0]);
            }
        });
    }

    setUser(user: User) {
        console.log('set user is ' + user.name);
        this.user = user;
    }

    getUser(): User {
        return this.user;
    }
}
