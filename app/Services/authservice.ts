import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
    isLoggedIn: boolean;
    constructor(private _http: Http) {
    }
    loginfn(usercreds: any) {

        this.isLoggedIn = false;
        var headers = new Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        return new Promise((resolve) => {
                    console.log(usercreds);

            // this._http.post('', creds, { headers: headers }).subscribe((data) => {
            //     if (data.json().success) {
            //         window.localStorage.setItem('auth_key', data.json().token);
            //         this.isLoggedIn = true;
            //     }
            //     resolve(this.isLoggedIn)
            // })
                    this.isLoggedIn = true;
           resolve(this.isLoggedIn)
            
        })
    }
}