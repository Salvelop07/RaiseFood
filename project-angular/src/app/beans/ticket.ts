import { User } from './user';
import { TicketLine } from './ticketline';

export class Ticket {
    ticketId: number;
    timeSubmitted: string;
    timeResolved: string;
    user: User;
    total: number;
    ticketLines: TicketLine[];
}
