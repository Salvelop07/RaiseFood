import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonSidenavComponent } from './anon-sidenav.component';

describe('AnonSidenavComponent', () => {
  let component: AnonSidenavComponent;
  let fixture: ComponentFixture<AnonSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
