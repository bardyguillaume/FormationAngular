import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrestationReactiveComponent } from './form-prestation-reactive.component';

describe('FormPrestationReactiveComponent', () => {
  let component: FormPrestationReactiveComponent;
  let fixture: ComponentFixture<FormPrestationReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrestationReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrestationReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
