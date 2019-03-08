import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from 'src/app/shared/interfaces/link';
import { Client } from 'src/app/shared/models/client';
import { ItemClientComponent } from '../../components/item-client/item-client.component';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  headers: string[];
  addLink: Link;

  collection$: Observable<Client[]>;

  @ViewChildren(ItemClientComponent) items: QueryList<ItemClientComponent>;

  constructor(private cs: ClientService) {}

  ngOnInit() {
    this.collection$ = this.cs.collection$;

    this.headers = ['Nom', 'Email', 'Etat'];

    this.addLink = {
      route: 'add',
      label: 'Ajouter un client'
    };
  }

  update(client: Client) {
    this.cs.update(client);
  }

  toggle() {
    this.items.forEach((item: ItemClientComponent) => {
      item.unLight();
    });
  }
}
