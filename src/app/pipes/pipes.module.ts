import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [FiltroPipe],
  exports: [
    FiltroPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class PipesModule { }
