import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { TicketService } from './ticket.service';
import { ITicket } from '../_models/ticket';
import {TicketResponse} from './ticketResponse';


@Component({
  selector: 'app-show',
  templateUrl: 'app/tickets/detail-ticket.component.html'
})
export class TicketDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.getSingleTicket();
  }


  private ticket: ITicket;
  private responses: [TicketResponse]

  getSingleTicket(){
    var TicketID = this.route.snapshot.params['TicketID'];
    this.ticketService
      .getTicket(TicketID)
      .subscribe(ticket =>{
          this.ticket = ticket[0];
        }),
     this.ticketService
     .getResponses(TicketID)
     .subscribe(responses =>{
          this.responses = responses;   
     })
  };
}