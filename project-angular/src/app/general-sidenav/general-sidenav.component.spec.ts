import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSidenavComponent } from './general-sidenav.component';

describe('GeneralSidenavComponent', () => {
  let component: GeneralSidenavComponent;
  let fixture: ComponentFixture<GeneralSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
