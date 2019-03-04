import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabaritsComponent } from './gabarits.component';

describe('GabaritsComponent', () => {
  let component: GabaritsComponent;
  let fixture: ComponentFixture<GabaritsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabaritsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabaritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
