import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from 'src/app/shared/interfaces/link';
import { Prestation } from 'src/app/shared/models/prestation';
import { ItemPrestationComponent } from '../../components/item-prestation/item-prestation.component';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  headers: string[];
  addLink: Link;
  collection$: Observable<Prestation[]>;

  @ViewChildren(ItemPrestationComponent) items: QueryList<
    ItemPrestationComponent
  >;

  constructor(private ps: PrestationService) {}

  ngOnInit() {
    this.collection$ = this.ps.collection$;

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

  toggle() {
    this.items.forEach((item: ItemPrestationComponent) => {
      item.unLight();
    });
  }
}
