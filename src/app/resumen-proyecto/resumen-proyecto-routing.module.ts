import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenProyectoPage } from './resumen-proyecto.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenProyectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenProyectoPageRoutingModule {}
