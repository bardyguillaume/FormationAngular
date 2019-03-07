import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent],
  imports: [CommonModule],
  exports: [TotalPipe, StateDirective, TableauComponent]
})
export class SharedModule {}
