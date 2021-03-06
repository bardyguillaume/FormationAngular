import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const appRoutes: Routes = [
  { path: '', component: PagePrestationsComponent },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: { title: 'Prestations', label: 'Ajouter une prestation' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)]
})
export class PrestationsRoutingModule {}
