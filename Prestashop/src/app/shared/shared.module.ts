import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonRouterComponent } from './components/button-router/button-router.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [
    TotalPipe,
    StateDirective,
    TableauComponent,
    ButtonRouterComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TotalPipe,
    StateDirective,
    TableauComponent,
    RouterModule,
    ButtonRouterComponent
  ]
})
export class SharedModule {}
