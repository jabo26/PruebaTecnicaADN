import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NominaService } from '../services/nomina.service';
import { NominaModel } from '../models/Nomina.model';
import { Observable } from 'rxjs/internal/Observable';
import  pdfMake from 'pdfmake/build/pdfmake';
import  pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list-nomina',
  templateUrl: './list-nomina.component.html',
  styleUrls: ['./list-nomina.component.css']
})
export class ListNominaComponent implements OnInit {
 /*  nominas = new NominaModel("","","","","","","","",""); */
loading = false;
salario =0;
comision=0;
aporteSaludPension=0;
aportesRiesgosL=0;

 Id='';
 listadoNomina: any;
 nomina = new NominaModel(0,"", "", "", "", "","","", "", "", "");
  constructor(
    private nominaService: NominaService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  nominas: Observable<NominaModel[]> | undefined
  //nomina: Observable<NominaModel[]> | undefined
  ngOnInit() {
    debugger
    this.Id = this.route.snapshot.params['id'];
    this.nominas = this.nominaService.obtenerListaNomina();
    this.nominaService.ObtenerUnaNomina(this.Id).subscribe(data=>{
      this.nomina = data[0];
    })

  }

  generarPDF() {

    debugger
    this.loading = true;
    const ingresosTable = {
      table: {
        widths: ['*', '*'],
        body: [
          ['Salario', this.nomina.Salario],
          ['Comision', this.nomina.Comision]
        ]
      },
      layout: 'lightHorizontalLines'
    };

    const cobrosTable = {
      table: {
        widths: ['*', '*'],
        body: [
          ['Aporte Salud', this.nomina.AporteSaludPension],
          ['Aporte Pensión', this.nomina.AporteSaludPension],
          ['Aportes Riesgos Laborales', this.nomina.AportesRiesgosL]
        ]
      },
      layout: 'lightHorizontalLines'
    };

    this.salario = parseInt(this.nomina.Salario);
    this.comision = parseInt(this.nomina.Comision);
    this.aporteSaludPension = parseInt(this.nomina.AporteSaludPension);
    this.aportesRiesgosL = parseInt(this.nomina.AportesRiesgosL)
    let netoAPagar = ((this.salario + this.comision) - ((this.aporteSaludPension *2) + this.aportesRiesgosL));

    const documentDefinition = {
      content: [
        {
          text: 'Recibo de Nómina',
          style: 'header'
        },
        {
          text: `Información del Asesor:
Nombre: ${this.nomina.NombreAsesor}
Cargo: ${this.nomina.Cargo}
Mes: ${this.nomina.Mes}
Año: ${this.nomina.Anio}
Fecha de Generación: ${new Date().toLocaleDateString()}`,
          style: 'subheader'
        },
        '\n', // Espacio en blanco
        {
          columns: [ingresosTable, cobrosTable]
        },
        '\n', // Espacio en blanco
        {
          text: `Neto a Pagar: ${netoAPagar}`,
          style: 'footer'
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 12,
          margin: [0, 0, 0, 10]
        },
        footer: {
          fontSize: 14,
          bold: true,
          alignment: 'right',
          margin: [0, 10, 0, 0]
        }
      }
    };

   const doc = pdfMake.createPdf(documentDefinition);
   doc.download(`Recibo_Nomina_${this.nomina.NombreAsesor}.pdf`)
    
  }
}
