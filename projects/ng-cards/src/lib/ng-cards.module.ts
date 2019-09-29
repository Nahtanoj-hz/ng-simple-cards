import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { NgSimpleCardComponent } from './components';

@NgModule({
  declarations: [
    NgSimpleCardComponent
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    NgSimpleCardComponent
  ]
})
export class NgCardsModule { }
