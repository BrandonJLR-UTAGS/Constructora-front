import { Component, OnInit } from '@angular/core';
import { ProyectosService } from "../Services/proyectos.service";
import { AreaService } from "../Services/area.service";
import { PersonalService } from "../Services/personal.service";

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { ActivatedRoute } from '@angular/router';

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: string[];
  labels: string[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-proyecto-info',
  templateUrl: './proyecto-info.page.html',
  styleUrls: ['./proyecto-info.page.scss'],
})
export class ProyectoInfoPage implements OnInit {

  id=''
  manoObra = 0
  ganancias = 0
  materialesEsperados = 0
  nombreJefes=[]
  area = {
    nombre: ''
  }
  informacion = {
    nombre:'',
    imgProyecto: '',
    personasCargo: [],
    areaAsginada: ''
  }
  estadisticas = []
  public options: Partial<ChartOptions>
  constructor(
    private aRouter: ActivatedRoute,
    public proyectoS:ProyectosService,
    public areaS: AreaService,
    public personalS: PersonalService
  ) { }

  ngOnInit() {
    this.proyectoId()
    this.chart()
  }


  proyectoId(){
    this.aRouter.params.subscribe(params=>{
      this.id = params['id']
      this.proyectoS.estadisticaPorProyecto(this.id).subscribe((res:any)=>{
        this.estadisticas.push(res.ManoObra)
        this.estadisticas.push(res.ganancias)
        this.estadisticas.push(res.materialesEsperados)

        console.log(this.estadisticas);
        
      },err=>{console.log(err)})

      this.proyectoS.obtenerProyectoId(this.id).subscribe((res:any)=>{
        this.informacion = res.cont
        console.log(this.informacion);
        
        this.areaS.obtenerAreaID(this.informacion.areaAsginada).subscribe((res:any)=>{
          this.area = res.cont
          console.log(this.area);
          
        },err=>{console.log(err)})

        this.informacion.personasCargo.forEach(element=>{
          this.personalS.obtenerPersonalId(element).subscribe((res:any)=>{
            this.nombreJefes.push(res.cont.nombre)
          },err=>{console.log(err)})
        })
        console.log(this.nombreJefes);
        
      })
    },err=>{console.log(err)})
  }

  chart(){
    this.options = {
      series: this.estadisticas,
      chart:{
        type:'donut'
      },
      labels: ['Mano de obra', 'Ganancias', 'Materiales esperados'],
      colors: ['#8D8D8D', '#328D23', '#DB1C1C']
    }
  }

}
