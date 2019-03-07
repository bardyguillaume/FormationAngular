import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/interfaces/link';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  prestationsList: Prestation[];
  headers: string[];
  addLink: Link;
  constructor(private ps: PrestationService) {}

  ngOnInit() {
    // this.collection = this.ps.collection;
    this.ps.prestationsCollection.subscribe((prestationsData: Prestation[]) => {
      this.prestationsList = prestationsData;
    });

    this.headers = [
      'Type',
      'Client',
      'Durée',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Etat'
    ];

    this.addLink = {
      route: 'add',
      label: 'Ajouter une Prestation'
    };
  }

  update(presta: Prestation) {
    this.ps.update(presta);
  }
}
