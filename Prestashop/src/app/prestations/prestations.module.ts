import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { AddPrestationComponent } from "./components/add-prestation/add-prestation.component";
import { ItemPrestationComponent } from "./components/item-prestation/item-prestation.component";
import { ListPrestationsComponent } from "./containers/list-prestations/list-prestations.component";
import { PageAddPrestationComponent } from "./pages/page-add-prestation/page-add-prestation.component";
import { PagePrestationsComponent } from "./pages/page-prestations/page-prestations.component";
import { PrestationsRoutingModule } from "./prestations-routing.module";
import { FormPrestationComponent } from './containers/form-prestation/form-prestation.component';

@NgModule({
  declarations: [
    PagePrestationsComponent,
    ListPrestationsComponent,
    ItemPrestationComponent,
    AddPrestationComponent,
    PageAddPrestationComponent,
    FormPrestationComponent
  ],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class PrestationsModule {}
