import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAsesoresComponent } from './list-asesores/list-asesores.component';
import { EditAsesorComponent } from './edit-asesor/edit-asesor.component';
import { ListComisionesComponent } from './list-comisiones/list-comisiones.component';
import { EditComisionComponent } from './edit-comision/edit-comision.component';
import { ListVentaComponent } from './list-venta/list-venta.component';
import { EditVentaComponent } from './edit-venta/edit-venta.component';
import { NominaComponent } from './nomina/nomina.component';
import { ListNominaComponent } from './list-nomina/list-nomina.component';


const routes: Routes = [
  {path:'Asesores', component:ListAsesoresComponent},
  {path:'asesores/update/:id', component: EditAsesorComponent },
  {path:'asesores/add', component: EditAsesorComponent },
  {path:'Comisiones', component: ListComisionesComponent},
  {path: 'Comisiones/update/:id', component: EditComisionComponent},
  {path: 'Comosiones/add', component: EditComisionComponent},
  {path: 'Ventas', component: ListVentaComponent },
  {path: 'ventas/update/:id', component: EditVentaComponent},
  {path: 'ventas/add', component: EditVentaComponent},
  {path: 'Nomina', component: NominaComponent},
  {path: 'ListaNomina', component: ListNominaComponent},
  {path: 'ListaNomina/:id', component: ListNominaComponent},
  {path: '**', redirectTo:'Asesores',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
