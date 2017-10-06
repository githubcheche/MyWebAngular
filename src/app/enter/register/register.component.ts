import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    private formModel: FormGroup;

    constructor(fb: FormBuilder) {
        this.formModel = fb.group({
            username: ['', [Validators.required, Validators.minLength(4)]],
            email: ['', [Validators.required, this.emailValidator]],
            passwordsGroup: fb.group({
                password: ['', [Validators.required, Validators.minLength(6)]],
                pconfirm: ['', [Validators.required, Validators.minLength(6)]]
            }, {validator: this.equalValidator})
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        const isValid: boolean = this.formModel.get('username').valid;
        const errors: any = this.formModel.get('username').errors;
        console.log(JSON.stringify(errors));

        if (this.formModel.valid) {
            console.log(this.formModel.value);
        }

    }


    /**
     * 邮箱校验器
     * @param {FormControl} control
     * @returns {any}
     */
    emailValidator(control: FormControl): any {
        const myreg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
        let vaild = myreg.test(control.value);
        console.log('email valid is ' + vaild);
        return vaild ? null : {email: true};
    }

    /**
     * 密码确认校验
     * @param {FormGroup} group
     * @returns {any}
     */
    equalValidator(group: FormGroup): any {
        let password: FormControl = group.get('password') as FormControl;
        let pconfirm: FormControl = group.get('pconfirm') as FormControl;
        let valid: boolean = (password.value === pconfirm.value);
        console.log('password valid is ' + valid);

        return valid ? null : {equal: true};
    }

}
