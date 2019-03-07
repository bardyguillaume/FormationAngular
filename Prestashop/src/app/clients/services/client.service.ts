import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseCollection = 'clients';
  clientsCollection: Observable<Client[]>;

  private pCollection: Client[] = null;
  constructor(private cloudDb: AngularFirestore) {
    // this.collection = fakeclients;
    this.clientsCollection = cloudDb
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
  get collection(): Client[] {
    return this.pCollection;
  }

  // set collection
  set collection(col: Client[]) {
    this.pCollection = col;
  }

  // add item in collection

  // update item in collection
  update(item: Client, state: StateClient) {
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
