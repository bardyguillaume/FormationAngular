import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { State } from "src/app/shared/enums/state.enum";
import { Prestation } from "src/app/shared/models/prestation";

@Component({
  selector: "app-item-prestation",
  templateUrl: "./item-prestation.component.html",
  styleUrls: ["./item-prestation.component.scss"]
})
export class ItemPrestationComponent implements OnInit {
  @Input() item: Prestation;
  @Output() changeItem: EventEmitter<{
    presta: Prestation;
    state: State;
  }> = new EventEmitter();

  states = State;
  constructor() {}

  ngOnInit() {}

  changeState(event) {
    const state = event.target.value;
    this.changeItem.emit({ presta: this.item, state: state });
  }
}
