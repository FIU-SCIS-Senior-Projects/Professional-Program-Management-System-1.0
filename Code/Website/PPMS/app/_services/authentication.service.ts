import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    private baseUrl = 'http://104.236.52.204/';
    private router: Router;

    constructor(private http: Http) { }

    checkMe:any;

    login(info: any): Observable<any[]> {
        info = JSON.stringify(info);
            return this.http.post(this.baseUrl+'login.php', info)
            .map(res=>{
                this.checkMe = res;
                if(this.checkMe._body != 0){

                    let user = res.json();
                    localStorage.setItem('currentUser', JSON.stringify(user));

                    return res.json();
                }
                else{
                    this.router.navigate(['/loginFail']);
                }
       });
    }


   logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}