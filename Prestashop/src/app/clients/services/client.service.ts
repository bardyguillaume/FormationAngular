import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseCollection = 'clients';
  private cCollection$: Observable<Client[]>;

  constructor(private cloudDb: AngularFirestore) {
    // this.collection = fakeclients;
    this.cCollection$ = cloudDb
      .collection(this.baseCollection)
      .valueChanges()
      .pipe(
        map(data => {
          return data.map(obj => {
            return new Client(obj);
          });
        })
      );
  }

  // get collection
  get collection$(): Observable<Client[]> {
    return this.cCollection$;
  }

  // set collection
  set collection$(col: Observable<Client[]>) {
    this.cCollection$ = col;
  }

  // add item in collection
  add(item: Client) {
    const creationId = Date.now().toString() + item.email;
    item.id = creationId;
    this.cloudDb
      .collection(this.baseCollection)
      .doc(creationId)
      .set(Object.assign({}, item))
      .then(() => console.log('client ajouté'))
      .catch(error => console.log(error));
  }

  // update item in collection
  update(item: Client) {
    this.cloudDb
      .collection(this.baseCollection)
      .doc(item.id)
      .set(Object.assign({}, item))
      .then(() => console.log('client updaté'))
      .catch(error => console.log(error));
  }

  // delete item in collection

  // get item by id in collection
}
