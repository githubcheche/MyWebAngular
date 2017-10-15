import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class UserService {

    constructor(private http: HttpService) {
    }

    postRegister(body: any, callback): void {
        this.http.postRegister(body).subscribe((data) => {
            if (data.json().status) {
                let message: any = data.json().message;
                callback(message);
            }
        });
    }

    postLogin(body: any, callback): void {
        this.http.postLogin(body).subscribe((data) => {
            if (data.json().status) {
                let message: any = data.json().message;
                callback(message);
            }
        });
    }
}
