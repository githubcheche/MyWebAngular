import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../shared/user.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private formModel: FormGroup;

    constructor(private fb: FormBuilder,
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
            this.userService.postLogin(param, (message) => {
                console.log(message);
            });
        }

    }

}
