import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Website2Component } from './website2.component';

describe('Website2Component', () => {
  let component: Website2Component;
  let fixture: ComponentFixture<Website2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Website2Component]
    });
    fixture = TestBed.createComponent(Website2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
