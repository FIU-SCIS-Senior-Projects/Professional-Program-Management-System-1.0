import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ITicket } from '../_models/ticket';

@Injectable()
export class TicketService {
    private baseUrl = 'http://104.236.52.204/';

    constructor(private http: Http) { }

checkMe:any;

    getTickets(): Observable<ITicket[]> {
        return this.http.get(this.baseUrl+'selectAllTickets.php')
            .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       });
    }

    getUserTickets(UsernamePortal :string){
        return this.http.post(this.baseUrl+'selectUserTickets.php',{'UsernamePortal':UsernamePortal})
        .map(res=>res.json());
    }

     getTicket(TicketID: number){
        return this.http.post(this.baseUrl+ 'selectTicket.php/',{'TicketID':TicketID})
        .map(res=>res.json());
    }

    getResponses(TicketID: number){
        return this.http.post(this.baseUrl+ 'selectResponses.php/',{'TicketID':TicketID})
        .map(res=>res.json());
    }

    closeTicket(TicketID: number){
        return this.http.post(this.baseUrl+ 'closeTicket.php/',{'TicketID':TicketID})
        .map(res=>res.json());
    }

    addTicket(info: any){
        return this.http.post(this.baseUrl+ 'addTicket.php', info)
      .map(()=>"");
    }

    respond(info:any){
    return this.http.post(this.baseUrl+ 'respond.php/', info)
      .map(()=>"");
  }

}
