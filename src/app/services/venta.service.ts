import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VentasModel } from '../models/Ventas.models';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  BASE_URL = 'http://127.0.0.1:9898'
  constructor(private http: HttpClient) { }

  obtenerVentas(){
    return this.http.get<VentasModel[]>(this.BASE_URL+'/ventas');
  }

  obtenerVenta(id: string){
    debugger
    return this.http.get<VentasModel[]>(this.BASE_URL+`/ventas/${id}`);
  }

  nuevaVenta(venta: VentasModel){ 
    debugger   
    return this.http.post<string>(`${this.BASE_URL}/ventas/add`, venta);
  }

  actualizarVenta(venta: VentasModel) {
   debugger
    let resultado = this.http.put<any>(`${this.BASE_URL}/ventas/update/${venta.Id}`, venta)
    return resultado;     
}

  eliminarVenta(id: number){    
    return this.http.delete<string>(`${this.BASE_URL}/venta/delete/${id}`);
  }
}

