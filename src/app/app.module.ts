import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAsesoresComponent } from './list-asesores/list-asesores.component';
import { EditAsesorComponent } from './edit-asesor/edit-asesor.component';
import { AsesorService } from './services/asesor.service';
import { ListComisionesComponent } from './list-comisiones/list-comisiones.component';
import { ComisionService } from './services/comision.service';
import { EditComisionComponent } from './edit-comision/edit-comision.component';
import { TiposAsesorService } from './services/tipos-asesor.service';
import { ListVentaComponent } from './list-venta/list-venta.component';
import { VentaService } from './services/venta.service';
import { EditVentaComponent } from './edit-venta/edit-venta.component';
import { NominaComponent } from './nomina/nomina.component';
import { ListNominaComponent } from './list-nomina/list-nomina.component';
import { NominaService } from './services/nomina.service';



@NgModule({
  declarations: [
    AppComponent,
    ListAsesoresComponent,
    EditAsesorComponent,
    ListComisionesComponent,
    EditComisionComponent,
    ListVentaComponent,
    ListVentaComponent,
    EditVentaComponent,
    NominaComponent,
    ListNominaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule   
  ],
  providers: [
    AsesorService,
    ComisionService,
    TiposAsesorService,
    VentaService,
    NominaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
