import { Component, OnInit } from '@angular/core';
import * as Chart from "chart.js";


@Component({
  selector: 'app-resumen-proyecto',
  templateUrl: './resumen-proyecto.page.html',
  styleUrls: ['./resumen-proyecto.page.scss'],
})
export class ResumenProyectoPage implements OnInit {
  jefes: Jefes[] = [
    {
      icon: 'american-football',
      nombre: 'jefe 1',
      redirectTo: '/resumen-proyecto'
    },
    {
      icon: 'american-football',
      nombre: 'Jefe 2',
      redirectTo: '/resumen-proyecto'
    }
  ];


  personal: Personal[] = [
    {
      icon: 'american-football',
      nombre: 'Personal 1',
      redirectTo: '/resumen-proyecto'
    },
    {
      icon: 'american-football',
      nombre: 'Personal 2',
      redirectTo: '/resumen-proyecto'
    }
  ];

  constructor() { }

  ngOnInit() {
    // this.Crear_Grafica();
  }

//   Crear_Grafica(){
//     const ctx = document.getElementById("chart");
//   const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
//   }

}


interface Jefes{
  icon:string;
  nombre:string;
  redirectTo:string;
}

interface Personal{
  icon:string;
  nombre:string;
  redirectTo:string;
}
