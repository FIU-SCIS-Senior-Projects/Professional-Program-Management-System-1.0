import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ISignUp } from './SignUp';
import { User } from '../_models/index';

@Injectable()
export class SignUpService {
    private baseUrl = 'http://104.236.52.204/';

    constructor(private http: Http) { }

checkMe:any;

    getUsers(): Observable<ISignUp[]> {
        return this.http.get(this.baseUrl+'selectAllSignUps.php')
            .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       });
    }


    create(info:any) {
        return this.http.post(this.baseUrl+'insertUser.php', info)
            .map(()=>"");
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
    getUser(username:string){
        return this.http.post("http://localhost/api/selectone.php/",{'username':username})
        .map(res=>res.json());
    }

    deleteUser(username:string){
        return this.http.post("http://localhost/api/delete.php/",{'username':username})
        .map(()=>this.getUsers());
    }
    
    updateUser(info:any){
        return this.http.post("http://localhost/api/update.php/", info)
            .map(res=>{
            this.checkMe= res;

            if(this.checkMe._body == !"duplicate username or password"){
                return res.json();
            }
            else{
                return "duplicate username or password";
            }
        });

    }
}
