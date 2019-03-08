import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientReactiveComponent } from './form-client-reactive.component';

describe('FormClientReactiveComponent', () => {
  let component: FormClientReactiveComponent;
  let fixture: ComponentFixture<FormClientReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClientReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClientReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
