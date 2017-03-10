/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiPanel2Component } from './mi-panel2.component';

describe('MiPanel2Component', () => {
  let component: MiPanel2Component;
  let fixture: ComponentFixture<MiPanel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPanel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
