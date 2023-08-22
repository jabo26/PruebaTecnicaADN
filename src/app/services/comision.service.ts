import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComisionesModel } from '../models/Comisiones.model';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ComisionService {

  BASE_URL = 'http://127.0.0.1:9898'
  constructor(private http: HttpClient) { }

  obtenerComisiones(){
    debugger
    return this.http.get<ComisionesModel[]>(this.BASE_URL+'/comisiones');
  }

  obtenerComision(id: string){
    debugger
    return this.http.get<ComisionesModel[]>(this.BASE_URL+`/comisiones/${id}`);
  }

  nuevaComision(comision: ComisionesModel){ 
    debugger   
    return this.http.post<string>(`${this.BASE_URL}/comisiones/add`, comision);
  }

  actualizarComision(comision: ComisionesModel) {
   debugger
    let resultado = this.http.put<any>(`${this.BASE_URL}/comisiones/update/${comision.Id}`, comision)
    return resultado;     
}

  eliminarComision(id: number){    
    return this.http.delete<string>(`${this.BASE_URL}/comision/delete/${id}`);
  }
}
