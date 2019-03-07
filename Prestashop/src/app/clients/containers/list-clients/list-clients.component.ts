import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  clientsList: Client[];
  headers: string[];

  constructor(private ps: ClientService) {}

  ngOnInit() {
    // this.collection = this.ps.collection;
    this.ps.clientsCollection.subscribe((clientsData: Client[]) => {
      this.clientsList = clientsData;
    });

    this.headers = ['Nom', 'Email', 'Etat'];
  }

  update(obj) {
    this.ps.update(obj.client, obj.state);
  }
}
