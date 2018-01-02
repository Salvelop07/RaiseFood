import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TicketLine } from '../beans/ticketline';

const apiUrl: string = `${environment.apiUrl}/ticketline`;

@Injectable()
export class TicketlineService {

  constructor(private http: HttpClient) { }

  getAllTicketLinesByTicketId(ticketId: number) {
    return this.http.get<TicketLine[]>(`${apiUrl}/${ticketId}`);
  }

  submitATicketline(ticketline: TicketLine) {
    return this.http.post<TicketLine>(`${apiUrl}/add`, ticketline);
  }
}
