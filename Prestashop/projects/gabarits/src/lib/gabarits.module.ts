import { NgModule } from '@angular/core';
import { GabaritsComponent } from './gabarits.component';
import { GabaritAComponent } from './test/gabarit-a/gabarit-a.component';

@NgModule({
  declarations: [GabaritsComponent, GabaritAComponent],
  imports: [
  ],
  exports: [GabaritsComponent]
})
export class GabaritsModule { }
