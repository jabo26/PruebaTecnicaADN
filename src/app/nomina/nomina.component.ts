import { Component, OnInit } from '@angular/core';
import { NominaModel } from '../models/Nomina.model';
import { NominaService } from '../services/nomina.service';
import { Router } from '@angular/router';
import { FechaModel } from '../models/FechaNomina.model';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})
export class NominaComponent implements OnInit{

  fecha = new FechaModel("","");
  constructor(
    private nominaService: NominaService,
    private router: Router
  ){}
  ngOnInit() {
    
  }

  onSubmit(){   
    console.log('Crear nuevo');
    debugger   
    this.nominaService.obtenerNominas(this.fecha).subscribe(data => {
      console.log(data);     
    });  
    this.router.navigate(['/ListaNomina']);
  }

}
