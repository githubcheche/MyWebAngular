import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {emailValidator, equalValidator} from '../../utils/validator/validators';
import {UserService} from "../../shared/user.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private formModel: FormGroup;

    constructor(private fb: FormBuilder,
                private userService: UserService) {
        this.formModel = fb.group({
            username: ['', [Validators.required, Validators.minLength(4)]],
            email: ['', [Validators.required, emailValidator]],
            passwordsGroup: fb.group({
                password: ['', [Validators.required, Validators.minLength(6)]],
                pconfirm: ['', [Validators.required, Validators.minLength(6)]]
            }, {validator: equalValidator})
        });
    }

    ngOnInit() {
    }

    get isUsrenameValid() {
        if (this.formModel.get('username').untouched)
            return '';
        if (this.formModel.hasError('required', ['username'])) {
            return '请输入账号';
        } else if (this.formModel.hasError('minlength', ['username'])) {
            return '账号至少4个字符';
        }
        return '';
    }

    get isEmailValid() {
        if (this.formModel.get('email').untouched)
            return '';
        if (this.formModel.hasError('required', ['email'])) {
            return '请输入邮箱';
        } else if (this.formModel.hasError('email', ['email'])) {
            return '邮箱不正确';
        }
        return '';
    }

    get isPasswordValid() {
        if (this.formModel.get(['passwordsGroup', 'password']).untouched)
            return '';
        if (this.formModel.hasError('required', ['passwordsGroup', 'password'])) {
            return '请输入密码';
        } else if (this.formModel.hasError('minlength', ['passwordsGroup', 'password'])) {
            return '密码长度必须大于等于6位';
        }
        return '';
    }

    get pconfirm() {
        if (this.formModel.get(['passwordsGroup', 'pconfirm']).untouched)
            return '';
        if (this.formModel.hasError('equal', ['passwordsGroup'])) {
            return '两次输入密码不相同';
        }
        return '';
    }

    onSubmit() {
        const isValid: boolean = this.formModel.get('username').valid;
        const errors: any = this.formModel.get('username').errors;
        console.log(JSON.stringify(errors));

        if (this.formModel.valid) {
            console.log(this.formModel.value);
            let param = {
                name: this.formModel.value.username,
                email: this.formModel.value.email,
                password: this.formModel.get(['passwordsGroup', 'password']).value,
                password_confirmation: this.formModel.get(['passwordsGroup', 'pconfirm']).value,
            };
            this.userService.postRegister(param, (message) => {
                console.log(message);
            });
        }

    }


}
