import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FechaModel } from '../models/FechaNomina.model';
import { NominaModel } from '../models/Nomina.model';

@Injectable({
  providedIn: 'root'
})
export class NominaService {

  BASE_URL = 'http://127.0.0.1:9898'
  constructor(private http: HttpClient) { }

  obtenerNominas(fecha: FechaModel){
    debugger
    return this.http.post<string>(this.BASE_URL+'/obtenerNomina', fecha);
  }

  obtenerListaNomina(){
    return this.http.get<NominaModel[]>(this.BASE_URL+'/ListaNomina');

  }

  ObtenerUnaNomina(id: string){
    debugger
    return this.http.get<NominaModel[]>(this.BASE_URL+`/ListaNomina/${id}`);
  }
  
}
