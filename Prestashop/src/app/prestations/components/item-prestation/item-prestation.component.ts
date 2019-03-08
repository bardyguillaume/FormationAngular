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
  @Output() changeItem: EventEmitter<Prestation> = new EventEmitter();

  @Output() doClick: EventEmitter<null> = new EventEmitter();
  states = State;
  bColor = false;

  constructor() {}

  ngOnInit() {}

  changeState() {
    this.changeItem.emit(this.item);
  }
  toggleColor() {
    this.doClick.emit();
    this.bColor = !this.bColor;
  }

  unLight() {
    this.bColor = false;
  }
}
