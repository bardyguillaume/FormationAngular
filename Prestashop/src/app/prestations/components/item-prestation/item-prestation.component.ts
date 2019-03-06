import { Component, Input, OnInit } from "@angular/core";
import { State } from "src/app/shared/enums/state.enum";
import { Prestation } from "src/app/shared/models/prestation";

@Component({
  selector: "app-item-prestation",
  templateUrl: "./item-prestation.component.html",
  styleUrls: ["./item-prestation.component.scss"]
})
export class ItemPrestationComponent implements OnInit {
  @Input() item: Prestation;

  states = State;
  constructor() {}

  ngOnInit() {}
}
