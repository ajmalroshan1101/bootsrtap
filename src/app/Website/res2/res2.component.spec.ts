import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Res2Component } from './res2.component';

describe('Res2Component', () => {
  let component: Res2Component;
  let fixture: ComponentFixture<Res2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Res2Component]
    });
    fixture = TestBed.createComponent(Res2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
