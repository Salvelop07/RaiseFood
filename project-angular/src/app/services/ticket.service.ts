import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Ticket } from '../beans/ticket';

const apiUrl: string = `${environment.apiUrl}/ticket`;

@Injectable()
export class TicketService {

  constructor(private http: HttpClient) { }

  getAllTcikets() {
    return this.http.get<Ticket[]>(apiUrl);
  }

  getAllTicketsByUserId(userId: number) {
    return this.http.get<Ticket[]>(`${apiUrl}/${userId}`);
  }
}
