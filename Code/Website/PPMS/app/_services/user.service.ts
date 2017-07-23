import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';


import { User } from '../_models/index';

@Injectable()
export class UserService {
    
    private baseUrl = 'http://104.236.52.204/';
    constructor(private http: Http) { }

    create(info:any): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        info = JSON.stringify(info);
        return this.http.post(this.baseUrl+'insertUser.php', info, options);
    }

    resetPassword(info:any):Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        info = JSON.stringify(info);
        return this.http.post(this.baseUrl+'resetPassword.php', info, options)
                .map(res=>res.json());

    }
    checkMe: any;

    reset(info:any):Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        info = JSON.stringify(info);
        return this.http.post(this.baseUrl+'reset.php', info, options)
                .map(res=>
                {
                    this.checkMe = res;
                    if(this.checkMe._body == "\nVerification failed."){
                        return "Verification failed.";
                    }
                    else{
                        return res.json();
                    }

                });
    }


}