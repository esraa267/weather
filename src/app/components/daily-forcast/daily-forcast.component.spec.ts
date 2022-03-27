/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DailyForcastComponent } from './daily-forcast.component';

describe('DailyForcastComponent', () => {
  let component: DailyForcastComponent;
  let fixture: ComponentFixture<DailyForcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyForcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
