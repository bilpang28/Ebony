import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {

    formGroup: FormGroup;
    showResult = false
    showPassword = false

    @Input() thirPartyLogin = true
 
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: ['', [
                Validators.required
            ]],
            password: ['', [
                Validators.required
            ]]
        });
    }
 
    login() {
        console.log(this.formGroup);
    }

    onShowPasswordClick () {
        this.showPassword = !this.showPassword
    }
 
    onReset() {
        this.formGroup.reset();
    }
}
