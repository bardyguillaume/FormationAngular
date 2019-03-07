import { Directive, HostBinding, Input, OnChanges } from "@angular/core";
import { State } from "../enums/state.enum";

@Directive({
  selector: "[appState]"
})
export class StateDirective implements OnChanges {
  @Input() appState: State;

  @HostBinding("class")
  nomClass: string;

  constructor() {}

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: State): any {
    console.log(state);
    return `state-${state
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()}`;
  }
}
