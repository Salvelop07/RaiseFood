import { TestBed, inject } from '@angular/core/testing';

import { TicketlineService } from './ticketline.service';

describe('TicketlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketlineService]
    });
  });

  it('should be created', inject([TicketlineService], (service: TicketlineService) => {
    expect(service).toBeTruthy();
  }));
});
