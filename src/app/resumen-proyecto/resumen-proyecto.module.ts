import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenProyectoPageRoutingModule } from './resumen-proyecto-routing.module';

import { ResumenProyectoPage } from './resumen-proyecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenProyectoPageRoutingModule
  ],
  declarations: [ResumenProyectoPage]
})
export class ResumenProyectoPageModule {}
