import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { TicketService } from './ticket.service';
import { ITicket } from '../_models/ticket';


@Component({
    moduleId: module.id,
    templateUrl: 'addTicket.component.html'

})

export class AddTicketComponent {
    loading = false;
    UsernamePortal: string;
    currentUser: User;
    model: any = {};


    constructor(
        private router: Router,
        private ticketService: TicketService) { 

                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }

    addTicket(UsernamePortal: string) {
        this.loading = true;
        UsernamePortal = (this.currentUser[0].Username);

        this.model.UsernamePortal = UsernamePortal;
        this.ticketService.addTicket(this.model)
            .subscribe(()=> this.goBack());
    }

    goBack(){
    this.router.navigate(['/guestPage']);
  }
}
