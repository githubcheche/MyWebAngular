import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../shared/user.service";
import {User} from "../../model/user.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private formModel: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private userService: UserService) {
        this.formModel = fb.group({
            username: ['', [Validators.required, Validators.minLength(4)]],
            psw: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        let isValid: boolean = this.formModel.get("username").valid;
        let errors: any = this.formModel.get("username").errors;
        console.log(JSON.stringify(errors));

        if (this.formModel.valid) {
            console.log(this.formModel.value);

            let param = {
                login: this.formModel.value.username,
                password: this.formModel.value.psw,
            };
            this.userService.postLogin(param, (message, user) => {
                console.log(message);
                if (message === '登录成功') {
                    // this.userService.setUser(user as User);
                    this.userService.saveUserToken(user.jwt_token.access_token);
                    // history.back();
                    this.router.navigate(['/home']);
                }
            });
        }

    }

}
