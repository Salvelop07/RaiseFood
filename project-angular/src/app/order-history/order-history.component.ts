import { Component, OnInit } from '@angular/core';
import { Ticket } from '../beans/ticket';
import { User } from '../beans/user';
import { TicketService } from '../services/ticket.service';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { TicketLine } from '../beans/ticketline';
import { TicketlineService } from '../services/ticketline.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  currentUser: User;

  detailModal: boolean = false;

  // Properties to hold loaded data
  private tickets: Ticket[];
  private ticketLines: TicketLine[];
  private ticket: Ticket;

  constructor(private ticketService: TicketService, private ticketLineService: TicketlineService) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    if (this.currentUser.role == 1) {
      this.viewAllTicketsByUserId(this.currentUser.id);
    } else {
      // admin
      this.viewAllTickets();
    }
  }

  viewAllTickets() {
    this.ticketService.getAllTcikets().subscribe(data => {
      this.tickets = data;
    });
  }

  viewAllTicketsByUserId(userId: number) {
    this.ticketService.getAllTicketsByUserId(userId).subscribe(data => {
      this.tickets = data;
    });
  }

  viewTicketDetail(ticketId: number) {

    this.viewAllTicketLinesByTicketId(ticketId);
    this.detailModal = true;
  }

  viewAllTicketLinesByTicketId(ticketId: number) {
    this.ticketLineService.getAllTicketLinesByTicketId(ticketId).subscribe(data =>{
      this.ticketLines = data;
      this.ticket = this.ticketLines[0].ticket;
    });
  }

  toggleDetailModalEmitter(event) {
    this.detailModal = event;
  }
}
