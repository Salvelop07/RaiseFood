import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TicketlineService } from '../services/ticketline.service';
import { User } from '../beans/user';
import { Ticket } from '../beans/ticket';
import { TicketLine } from '../beans/ticketline';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input()
  ticketLines: TicketLine[];

  @Input()
  ticket: Ticket;

  @Input()
  detailModal: boolean;

  @Output()
  detailModalEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private ticketLineService: TicketlineService) {}

  ngOnInit() {}

  cancel() {
    this.detailModal = false;
    this.detailModalEmitter.emit(this.detailModal);
  }
}
