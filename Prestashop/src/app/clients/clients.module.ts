import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

@NgModule({
  declarations: [
    PageClientsComponent,
    ListClientsComponent,
    ItemClientComponent
  ],
  imports: [CommonModule, ClientsRoutingModule, SharedModule]
})
export class ClientsModule {}
