import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPageComponent } from './dummy-page.component';

describe('DummyPageComponent', () => {
  let component: DummyPageComponent;
  let fixture: ComponentFixture<DummyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
