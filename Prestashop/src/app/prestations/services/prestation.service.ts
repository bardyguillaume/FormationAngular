import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private baseCollection = 'prestations';
  prestationsCollection: Observable<Prestation[]>;

  private pCollection: Prestation[] = null;
  constructor(private cloudDb: AngularFirestore) {
    // this.collection = fakePrestations;
    this.prestationsCollection = cloudDb
      .collection(this.baseCollection)
      .valueChanges()
      .pipe(
        map(data => {
          return data.map(obj => {
            return new Prestation(obj);
          });
        })
      );
  }

  // get collection
  get collection(): Prestation[] {
    return this.pCollection;
  }

  // set collection
  set collection(col: Prestation[]) {
    this.pCollection = col;
  }

  // add item in collection

  // update item in collection
  update(item: Prestation, state: State) {
    this.cloudDb
      .collection(this.baseCollection)
      .doc(item.id)
      .set({ state: state }, { merge: true })
      .then(() => (item.state = state))
      .catch(error => console.log(error));
  }

  // delete item in collection

  // get item by id in collection
}
