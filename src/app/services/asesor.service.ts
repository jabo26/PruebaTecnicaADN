import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsesoresModel } from '../models/Asesores.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  BASE_URL = 'http://127.0.0.1:9898'
  constructor(private http: HttpClient) { }

  obtenerAsesores(){
    return this.http.get<AsesoresModel[]>(this.BASE_URL+'/asesores');
  }

  obtenerAsesor(id: string){
    return this.http.get<AsesoresModel[]>(this.BASE_URL+`/Asesores/${id}`);
  }

  nuevoAsesor(asesor: AsesoresModel){    
    return this.http.post<string>(`${this.BASE_URL}/asesores/add`, asesor);
  }

  actualizarAsesor(asesor: AsesoresModel) {
   
    let resultado = this.http.put<any>(`${this.BASE_URL}/asesores/update/${asesor.Id}`, asesor)
    return resultado;     
}

  eliminarAsesor(id: string){    
    return this.http.delete<string>(`${this.BASE_URL}/asesores/delete/${id}`);
  }
}
