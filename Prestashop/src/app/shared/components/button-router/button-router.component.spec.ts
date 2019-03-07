import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRouterComponent } from './button-router.component';

describe('ButtonRouterComponent', () => {
  let component: ButtonRouterComponent;
  let fixture: ComponentFixture<ButtonRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
