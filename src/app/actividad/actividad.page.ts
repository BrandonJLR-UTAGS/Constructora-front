import { Component, OnInit } from '@angular/core';
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
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})

export class ActividadPage implements OnInit {
  public options: Partial<ChartOptions>;
  public radial: Partial<ChartOptions>
  constructor() {
 
  }

  ngOnInit() {
    this.chart1()
    this.chart2()
  }

  chart1(){
    this.options = {
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '2011',
              y: 1292,
              goals: [
                {
                  name: 'Expected',
                  value: 1400,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2012',
              y: 4432,
              goals: [
                {
                  name: 'Expected',
                  value: 5400,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2013',
              y: 5423,
              goals: [
                {
                  name: 'Expected',
                  value: 5200,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2014',
              y: 6653,
              goals: [
                {
                  name: 'Expected',
                  value: 6500,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2015',
              y: 8133,
              goals: [
                {
                  name: 'Expected',
                  value: 6600,
                  strokeHeight: 13,
                  strokeWidth: 0,
                  strokeLineCap: 'round',
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2016',
              y: 7132,
              goals: [
                {
                  name: 'Expected',
                  value: 7500,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2017',
              y: 7332,
              goals: [
                {
                  name: 'Expected',
                  value: 8700,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
            },
            {
              x: '2018',
              y: 6553,
              goals: [
                {
                  name: 'Expected',
                  value: 7300,
                  strokeHeight: 2,
                  strokeDashArray: 2,
                  strokeColor: '#775DD0'
                }
              ]
            }
          ]
        }
      ],
        chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      colors: ['#00E396'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#00E396', '#775DD0']
        }
      }
    };
  }
  
  chart2(){
    this.radial = {
      chart: {
        type: 'radialBar',
        height: 350,
      },
      series: [70],
      plotOptions: {
        radialBar: {
          track: {
            background: '#c7c7c7',
            margin: 0,
            strokeWidth: '70%',
          },
          dataLabels: {
            name: {
              color: '#fff',
              offsetY: -10,
              fontSize: '14px',
            },
            value: {
              color: '#fff',
              fontSize: '20px',
              offsetY: 0,
            },
          },
          hollow: {
            size: '65%',
          },
        },
      },
      fill: {
        colors: ['#fd6585'],
      },
      labels: ['Tasks'],
    };
    
  }
}
