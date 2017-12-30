import { Ticket } from './ticket';
import { Dish } from './dish';

export class TicketLine {
    ticketLineId: number;
    ticket: Ticket;
    dish: Dish[];
    quantity: number;
}