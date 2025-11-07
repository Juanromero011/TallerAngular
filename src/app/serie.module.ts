import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './components/serie-list/serie-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SerieListComponent
  ],
  exports: [
    SerieListComponent
  ]
})
export class SerieModule { }
