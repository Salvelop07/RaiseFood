import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSidenavComponent } from './cust-sidenav.component';

describe('CustSidenavComponent', () => {
  let component: CustSidenavComponent;
  let fixture: ComponentFixture<CustSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
