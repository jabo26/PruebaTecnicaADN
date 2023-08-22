import { Component, OnInit } from '@angular/core';
import { AsesoresModel } from '../models/Asesores.model';
import { Observable } from 'rxjs/internal/Observable';
import { AsesorService } from '../services/asesor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-asesores',
  templateUrl: './list-asesores.component.html',
  styleUrls: ['./list-asesores.component.css']
})
export class ListAsesoresComponent implements OnInit {

  asesores: Observable<AsesoresModel[]> | undefined
  
  constructor(private asesorService: AsesorService, private router: Router){
    
  }

  ngOnInit(){
    this.asesores = this.asesorService.obtenerAsesores();

   
  }

  navegarComisiones(){
    this.router.navigate(['/comisiones']);
  }

  navegarAsesores(){
    this.router.navigate(['/asesores']);
  }

  eliminarAsesor(id: string){
   let confirmarBorrado = confirm('Estas seguro de eliminar este Asesor?');
   if(confirmarBorrado){
    this.asesorService.eliminarAsesor(id).subscribe(data =>{
      
      console.log(data);
      this.asesores = this.asesorService.obtenerAsesores();
    });
   }
   

    this.asesores = this.asesorService.obtenerAsesores();
  }

}
