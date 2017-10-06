import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private formModel: FormGroup;

    constructor(fb: FormBuilder) {
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
        }

    }

}
