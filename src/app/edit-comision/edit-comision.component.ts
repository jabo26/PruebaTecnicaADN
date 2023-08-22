import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { ComisionService } from '../services/comision.service';
import { ComisionesModel } from '../models/Comisiones.model';
import { Observable } from 'rxjs/internal/Observable';
import { TiposAsesoresModel } from '../models/TiposAsesor.model';
import { TiposAsesorService } from '../services/tipos-asesor.service';

@Component({
  selector: 'app-edit-comision',
  templateUrl: './edit-comision.component.html',
  styleUrls: ['./edit-comision.component.css']
})
export class EditComisionComponent implements OnInit{

  id='';
  listaAsesores: any;
  comision = new ComisionesModel(0, "", "", "", "","");

  constructor(
    private comisionService: ComisionService,
    private route: ActivatedRoute,
    private router: Router,    
    private tipoAsesor: TiposAsesorService
  ){

  }

  tiposAsesores: Observable<TiposAsesoresModel[]> | undefined
  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    if(this.id){
      console.log('Editar..');
      this.comisionService.obtenerComision(this.id).subscribe(data =>{
        this.comision = data[0];
        console.log(data);
      })
    }else{
      console.log('Agregar');
    }

    this.tipoAsesor.obtenerListaTiposAsesores().subscribe((data:any)=>{
      this.listaAsesores = data;
      console.log(this.listaAsesores);
    })
   
  }

  onSubmit(){   
    console.log('Crear nuevo');
    debugger
  if(this.comision.Id){
    this.comisionService.actualizarComision(this.comision).subscribe(data=>{
      alert(data);
      this.router.navigate(['/Comisiones'])
    });
  }else{
    debugger
    this.comisionService.nuevaComision(this.comision).subscribe(data => {
      alert(data);
      this.router.navigate(['/Comisiones']);
    });
  }
    
  }

}
