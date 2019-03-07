import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<Prestation>();

  states = State;
  init = new Prestation();

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.formSubmit.emit(this.init);
  }
}
