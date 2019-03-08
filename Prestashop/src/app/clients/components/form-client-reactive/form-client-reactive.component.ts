import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client-reactive',
  templateUrl: './form-client-reactive.component.html',
  styleUrls: ['./form-client-reactive.component.scss']
})
export class FormClientReactiveComponent implements OnInit {
  form: FormGroup;
  private init = new Client();
  states = StateClient;

  @Output() formSubmit = new EventEmitter<Client>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [this.init.name, Validators.required],
      email: [this.init.email, [Validators.email, Validators.required]],

      state: [this.init.state]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.formSubmit.emit(this.form.value);
  }
}
