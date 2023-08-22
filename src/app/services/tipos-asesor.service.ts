import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TiposAsesoresModel } from '../models/TiposAsesor.model';

@Injectable({
  providedIn: 'root'
})
export class TiposAsesorService {

  BASE_URL = 'http://127.0.0.1:9898'
  constructor(private http: HttpClient) { }

  obtenerTiposAsesores(){
    return this.http.get<TiposAsesoresModel[]>(this.BASE_URL+'/TiposAsesores');
  }

  obtenerListaTiposAsesores(){
    return this.http.get<TiposAsesoresModel[]>(this.BASE_URL+'/lstTiposAsesores');
  }

}
