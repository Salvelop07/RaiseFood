import { Component, OnInit } from '@angular/core';
import { Ticket } from '../beans/ticket';
import { User } from '../beans/user';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  private tickets: Ticket[];

  mockUser: User = {
    id: 1,
    userName: 'test1',
    password: '123',
    email: 'a@email.com',
    firstName: 'test1',
    lastName: 'test1',
    role: 1
  };

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.viewAllTickets();
    //this.viewAllTicketsByUserId(this.mockUser.id);
  }

  viewAllTickets() {
    this.ticketService.getAllTcikets().subscribe(data =>{
      console.log(this.tickets = data);
    });
  }

  viewAllTicketsByUserId(userId: number) {
    this.ticketService.getAllTicketsByUserId(userId).subscribe(data =>{
      console.log(this.tickets = data);
    });
  }

  viewTicketDetail(ticketId: number){
    window.alert('hi~ ' + ticketId);
  }
}
