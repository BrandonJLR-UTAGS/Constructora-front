import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

  datos = [

    {numero:"1", nombre: "ACT 1", p_r: "p", s1: "1", s2: "1", area: "area 1", persona:"Juan" },
    {numero:"2", nombre: "ACT 2", p_r: "p", s1: "1", s2: "1", area: "area 2", persona:"Enrique" },
    {numero:"3", nombre: "ACT 3", p_r: "p", s1: "1", s2: "1", area: "area 3", persona:"Mark" },
    {numero:"4", nombre: "ACT 4", p_r: "p", s1: "1", s2: "1", area: "area 4", persona:"T800" },

  ];





  constructor() { }

  ngOnInit() {
  }

}
