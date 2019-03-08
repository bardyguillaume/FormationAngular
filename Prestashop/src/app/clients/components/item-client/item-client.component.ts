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
  @Output() changeItem: EventEmitter<Client> = new EventEmitter();

  @Output() doClick: EventEmitter<null> = new EventEmitter();
  states = StateClient;
  bColor = false;

  constructor() {}

  ngOnInit() {}

  changeState() {
    this.changeItem.emit(this.item);
  }
  toggleColor() {
    console.log('toggleColor');
    this.doClick.emit();
    this.bColor = !this.bColor;
  }

  unLight() {
    this.bColor = false;
  }
}
