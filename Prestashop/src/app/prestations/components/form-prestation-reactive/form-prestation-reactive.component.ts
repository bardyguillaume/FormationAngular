import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-form-prestation-reactive',
  templateUrl: './form-prestation-reactive.component.html',
  styleUrls: ['./form-prestation-reactive.component.scss']
})
export class FormPrestationReactiveComponent implements OnInit {
  form: FormGroup;
  private init = new Prestation();
  states = State;

  @Output() formSubmit = new EventEmitter<Prestation>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tauxTva: [this.init.tauxTva],
      comment: [this.init.comment],
      state: [this.init.state]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.formSubmit.emit(this.form.value);
  }
}
