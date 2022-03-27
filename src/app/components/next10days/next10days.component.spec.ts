/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Next10daysComponent } from './next10days.component';

describe('Next10daysComponent', () => {
  let component: Next10daysComponent;
  let fixture: ComponentFixture<Next10daysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Next10daysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Next10daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
