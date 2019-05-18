import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formpt3Component } from './formpt3.component';

describe('Formpt3Component', () => {
  let component: Formpt3Component;
  let fixture: ComponentFixture<Formpt3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formpt3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formpt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
