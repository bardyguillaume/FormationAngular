import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';
import { FormPrestationReactiveComponent } from './components/form-prestation-reactive/form-prestation-reactive.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { FormPrestationComponent } from './containers/form-prestation/form-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [
    PagePrestationsComponent,
    ListPrestationsComponent,
    ItemPrestationComponent,
    AddPrestationComponent,
    PageAddPrestationComponent,
    FormPrestationComponent,
    FormPrestationReactiveComponent
  ],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule {}
