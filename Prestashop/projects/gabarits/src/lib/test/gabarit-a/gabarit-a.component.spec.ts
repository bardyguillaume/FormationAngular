import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabaritAComponent } from './gabarit-a.component';

describe('GabaritAComponent', () => {
  let component: GabaritAComponent;
  let fixture: ComponentFixture<GabaritAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabaritAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabaritAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
