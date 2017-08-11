import { AuthService } from './Services/authservice';
import { Component, Provider } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'my-app',
    templateUrl: './app/login.html',
    providers: [AuthService]
})

export class LoginComponent {

    localUser = {
        username: '',
        password: ''
    }
    constructor(private _service: AuthService, private _router: Router) {
    }
    login() {
        console.log('login');
        this._service.loginfn(this.localUser).then((res) => {
            if (res) {
                console.log('login succeed');
                this._router.navigate(['Home']);
            }
            else
                console.log(res);
        })
    }
}