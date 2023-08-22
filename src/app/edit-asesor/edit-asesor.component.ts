import { Component, OnInit } from '@angular/core';
import { AsesoresModel } from '../models/Asesores.model';
import { AsesorService } from '../services/asesor.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { TiposAsesorService } from '../services/tipos-asesor.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-asesor',
  templateUrl: './edit-asesor.component.html',
  styleUrls: ['./edit-asesor.component.css']
})
export class EditAsesorComponent implements OnInit{
 
  id='';
  asesor = new AsesoresModel("","","","");
  listaAsesores: any;
  crtTipoAsesor = new FormControl();
  constructor(
    private tipoAsesor: TiposAsesorService,
    private asesorServive: AsesorService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }
  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    if(this.id){
      console.log('Editar..');
      this.asesorServive.obtenerAsesor(this.id).subscribe(data =>{
        this.asesor = data[0];
        console.log(data);
      })
    }else{
      console.log('Agregar');
    }

    this.tipoAsesor.obtenerListaTiposAsesores().subscribe((data:any)=>{
      this.listaAsesores = data;
      console.log(this.listaAsesores);
    })
   this.crtTipoAsesor.disable()
  }

  
  onSubmit(){   
    console.log('Crear nuevo');
   
  if(this.asesor.Id){
    debugger
    this.asesorServive.actualizarAsesor(this.asesor).subscribe(data=>{
      alert(data);
      this.router.navigate(['/asesores'])
    });
  }else{
    debugger
    this.asesorServive.nuevoAsesor(this.asesor).subscribe(data => {
      alert(data);
      this.router.navigate(['/asesores']);
    });
  }

  
    
  }

 

}
