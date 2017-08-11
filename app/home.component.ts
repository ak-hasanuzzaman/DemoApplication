import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './app/home.html',
})

export class HomeComponent {
    constructor(private _router: Router) {
    }
    logout() {
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['Login']);
    }
}