import { State } from '../enums/state.enum';
import { IPrestation } from '../interfaces/iprestation';

export class Prestation implements IPrestation {
  id: string;
  typePresta: string;
  client: string;
  tjmHt = 500;
  nbJours = 0;
  tauxTva = 20;
  comment: string;
  state = State.OPTION;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  totalHT(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTTC(tva?): number {
    if (!tva) {
      return this.totalHT() * (1 + this.tauxTva / 100);
    }
    if (tva < 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1 + tva / 100);
  }
}
