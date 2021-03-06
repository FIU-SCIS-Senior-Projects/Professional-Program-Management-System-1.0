import { Component } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

import {ITicket} from '../_models/ticket';
import {TicketService} from '../tickets/ticket.service';


@Component({
    templateUrl: 'app/users/guestPage.component.html'
})

export class GuestPageComponent {
    loading = false;
    currentUser: User;
    users: User[] = [];
    tickets: ITicket[];
    errorMessage: string;
    UsernamePortal: string;


    

    constructor(
        private userService: UserService,
        private router: Router,
        private ticketService: TicketService) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(this.currentUser == null){
            this.router.navigate(['/loginFail']);
        }
        
        else if ((this.currentUser[0].UserType)=="Student"){

            this.router.navigate(['/studentPage']);
        }
        else if ((this.currentUser[0].UserType)=="Administrator"){

            this.router.navigate(['/adminPage']);
        }
        else{
            this.router.navigate(['/guestPage']);

        }
    }

    ngOnInit(UsernamePortal: string): void {

        UsernamePortal = (this.currentUser[0].Username);

        this.ticketService.getUserTickets(UsernamePortal)
                .subscribe(
                    tickets => this.tickets = tickets,
                           error => this.errorMessage = <any>error);
    }

    closeTicket(TicketID: number){
      this.ticketService
        .closeTicket(TicketID)
        .subscribe(() => {
        this.ngOnInit(this.UsernamePortal);
      })

    }

    alert(TicketID: number){
        if (confirm("Are you sure you want to close this ticket?") == true) {
            this.closeTicket(TicketID);
        } 
        var timeout = setTimeout("location.reload(true);",800);
    }

}