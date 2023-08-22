import { Component } from '@angular/core';
import { VentasModel } from '../models/Ventas.models';
import { Observable } from 'rxjs/internal/Observable';
import { VentaService } from '../services/venta.service';

@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.css']
})
export class ListVentaComponent {
  ventas: Observable<VentasModel[]> | undefined
  
  constructor(private ventaService: VentaService){
    
  }

  ngOnInit(){
    this.ventas = this.ventaService.obtenerVentas();
   
  }
  

  eliminarAsesor(id: number){
   let confirmarBorrado = confirm('Estas seguro de eliminar este Asesor?');
   if(confirmarBorrado){
    this.ventaService.eliminarVenta(id).subscribe(data =>{
      
      console.log(data);
      this.ventas = this.ventaService.obtenerVentas();
    });
   }
   

    this.ventas = this.ventaService.obtenerVentas();
  }

}
