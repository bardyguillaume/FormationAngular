import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private baseCollection = 'prestations';
  private pCollection$: Observable<Prestation[]>;

  constructor(private cloudDb: AngularFirestore) {
    // this.collection = fakePrestations;
    this.pCollection$ = cloudDb
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
  get collection$(): Observable<Prestation[]> {
    return this.pCollection$;
  }

  // set collection
  set collection$(col: Observable<Prestation[]>) {
    this.pCollection$ = col;
  }

  // add item in collection
  add(item: Prestation) {
    const creationId = Date.now().toString() + item.client;
    item.id = creationId;
    this.cloudDb
      .collection(this.baseCollection)
      .doc(creationId)
      .set(Object.assign({}, item))
      .then(() => console.log('item ajouté'))
      .catch(error => console.log(error));
  }

  // update item in collection
  update(item: Prestation) {
    this.cloudDb
      .collection(this.baseCollection)
      .doc(item.id)
      .set(Object.assign({}, item))
      .then(() => console.log('item updaté'))
      .catch(error => console.log(error));
  }

  // delete item in collection

  // get item by id in collection
}
