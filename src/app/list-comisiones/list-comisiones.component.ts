import { Component, OnInit } from '@angular/core';
import { ComisionesModel } from '../models/Comisiones.model';
import { Observable } from 'rxjs/internal/Observable';
import { ComisionService } from '../services/comision.service';
import { Router } from '@angular/router';
import { TiposAsesorService } from '../services/tipos-asesor.service';
import { TiposAsesoresModel } from '../models/TiposAsesor.model';


@Component({
  selector: 'app-list-comisiones',
  templateUrl: './list-comisiones.component.html',
  styleUrls: ['./list-comisiones.component.css']
})
export class ListComisionesComponent implements OnInit {

  constructor(private comisionService: ComisionService, private router: Router, private TiposAsesor: TiposAsesorService){
    
  }
  comisiones: Observable<ComisionesModel[]> | undefined
  tiposAsesores: Observable<TiposAsesoresModel[]> | undefined
  ngOnInit(){
    this.comisiones = this.comisionService.obtenerComisiones();

  } 

  eliminarComision(id: number){
    let confirmarBorrado = confirm('Estas seguro de eliminar?');
    if(confirmarBorrado){
     this.comisionService.eliminarComision(id).subscribe(data =>{
       
       console.log(data);
       this.comisiones = this.comisionService.obtenerComisiones();
     });
    }
    
 
     this.comisiones = this.comisionService.obtenerComisiones();
   }
 
}
