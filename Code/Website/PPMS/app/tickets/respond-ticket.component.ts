import { Component } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { User } from '../_models/index';
import { TicketService } from './ticket.service';
import { ITicket } from '../_models/ticket';


@Component({
    moduleId: module.id,
    templateUrl: 'respond-ticket.component.html'

})

export class RespondTicketComponent {
    loading = false;
    UsernamePortal: string;
    currentUser: User;
    model: any = {};


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private ticketService: TicketService) { 

                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        
        private ticket: ITicket;

    updateTicket(){
    
      this.model.UsernamePortal = (this.currentUser[0].Username);
      this.model.TicketID = this.route.snapshot.params['TicketID'];
      this.ticketService
        .respond(this.model)
        .subscribe(()=>this.goBack());
    }

    goBack(){
        window.location.assign("http://localhost:3000/guestPage");
    }

    ngOnInit() {
         this.getSingleTicket();
     }

    getSingleTicket(){
        var TicketID = this.route.snapshot.params['TicketID'];
        this.ticketService
        .getTicket(TicketID)
        .subscribe(ticket =>{
            this.ticket = ticket[0];
            });
    }
}
