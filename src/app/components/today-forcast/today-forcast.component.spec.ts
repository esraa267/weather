/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodayForcastComponent } from './today-forcast.component';

describe('TodayForcastComponent', () => {
  let component: TodayForcastComponent;
  let fixture: ComponentFixture<TodayForcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayForcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
