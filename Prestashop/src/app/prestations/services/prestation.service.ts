import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private pCollection: Prestation[];
  constructor() {
    this.collection = fakePrestations;
  }

  get collection(): Prestation[] {
    return this.pCollection;
  }

  // get collection
  set collection(col: Prestation[]) {
    this.pCollection = col;
  }

  // set collection

  // add item in collection

  // update item in collection

  // delete item in collection

  // get item by id in collection
}
