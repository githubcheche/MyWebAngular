import {FormControl, FormGroup} from '@angular/forms';

/**
 * 邮箱校验器
 * @param {FormControl} control
 * @returns {any}
 */
export function emailValidator(control: FormControl): any {
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
export function equalValidator(group: FormGroup): any {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log('password valid is ' + valid);

    return valid ? null : {equal: true};
}
