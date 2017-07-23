import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Isession } from './session';

@Injectable()
export class SessionService {
    private baseUrl = 'http://104.236.52.204/';

    constructor(private http: Http) { }

checkMe:any;

    getSessions(): Observable<Isession[]> {
        return this.http.get(this.baseUrl+'selectAllSessions.php')
            .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       });
    }
    
    //NOT USING
    
    getSession(id:number){
    return this.http.post("http://104.236.52.204/selectSession.php",{'id':id})
      .map(res=>res.json());
    }

    deleteSession(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteSession: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveSession(session: Isession): Observable<Isession> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (session.id === 0) {
            return this.createSession(session, options);
        }
        return this.updateSession(session, options);
    }

    private createSession(session: Isession, options: RequestOptions): Observable<Isession> {
        session.id = undefined;
        return this.http.post(this.baseUrl, session, options)
            .map(this.extractData)
            .do(data => console.log('createSession: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateSession(session: Isession, options: RequestOptions): Observable<Isession> {
        const url = `${this.baseUrl}/${session.id}`;
        return this.http.put(url, session, options)
            .map(() => session)
            .do(data => console.log('updateSession: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeSession(): Isession {
        // Return an initialized object
        return {
            id: 0,
            sessionName: null,
            sessionCode: null,
            sessionDate: null,
            description: null,
        };
    }
}
