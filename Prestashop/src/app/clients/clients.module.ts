import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { AddClientComponent } from './components/add-client/add-client.component';
import { FormClientReactiveComponent } from './components/form-client-reactive/form-client-reactive.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

@NgModule({
  declarations: [
    PageClientsComponent,
    ListClientsComponent,
    ItemClientComponent,
    PageAddClientComponent,
    FormClientReactiveComponent,

    AddClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule {}
