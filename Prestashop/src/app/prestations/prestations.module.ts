import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    FontAwesomeModule
  ]
})
export class PrestationsModule { }
