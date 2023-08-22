import { Component, OnInit } from '@angular/core';
import { TiposAsesorService } from '../services/tipos-asesor.service';
import { AsesoresModel } from '../models/Asesores.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import { VentasModel } from '../models/Ventas.models';
import { VentaService } from '../services/venta.service';

@Component({
  selector: 'app-edit-venta',
  templateUrl: './edit-venta.component.html',
  styleUrls: ['./edit-venta.component.css']
})
export class EditVentaComponent implements OnInit {
  id = '';
  asesor = new AsesoresModel("", "", "", "");
  listaAsesores: any;
  venta = new VentasModel(0, "", "", "", "", "");
  anio = "";
  Mes: string = "";
  tipo = "";
  asesorNombre: string = "";

  constructor(
    private tipoAsesor: TiposAsesorService,
    private ventaService: VentaService,
    private router: Router,
    private route: ActivatedRoute) { }


  seleccionValor1: string = '';

  ngOnInit() {

    this.id = this.route.snapshot.params['id']
    if (this.id) {
      console.log('Editar..');
      this.ventaService.obtenerVenta(this.id).subscribe(data => {
        this.venta = data[0];
        this.Mes = data[0].Mes;
        this.asesorNombre = data[0].NombreAsesor;
        console.log(data[0]);
        console.log(this.Mes);
      })
    } else {
      console.log('Agregar');
    }
    this.tipoAsesor.obtenerTiposAsesores().subscribe((data: any) => {
      this.listaAsesores = data;

    });


  }

  onSubmit() {
    console.log('Crear nuevo');
    debugger
    if (this.venta.Id) {
      this.ventaService.actualizarVenta(this.venta).subscribe(data => {
        alert(data);
        this.router.navigate(['/Ventas'])
      });
    } else {
      debugger
      this.ventaService.nuevaVenta(this.venta).subscribe(data => {
        alert(data);
        this.router.navigate(['/Ventas']);
      });
    }
  }

}
