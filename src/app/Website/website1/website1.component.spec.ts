import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Website1Component } from './website1.component';

describe('Website1Component', () => {
  let component: Website1Component;
  let fixture: ComponentFixture<Website1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Website1Component]
    });
    fixture = TestBed.createComponent(Website1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
