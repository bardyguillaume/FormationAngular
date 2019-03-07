import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  @Input() item: Client;
  @Output() changeItem: EventEmitter<{
    client: Client;
    state: StateClient;
  }> = new EventEmitter();

  states = StateClient;
  constructor() {}

  ngOnInit() {}

  changeState(event) {
    const state = event.target.value;
    this.changeItem.emit({ client: this.item, state: state });
  }
}
