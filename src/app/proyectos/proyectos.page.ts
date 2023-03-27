import { Component, OnInit } from '@angular/core';
import { ProyectosService } from "../Services/proyectos.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit{

  proyectos = []
  constructor(public proyectoS:ProyectosService, public router: Router) { }

  ngOnInit(){
    this.obtenerTodosProyectos()
  }

  obtenerTodosProyectos(){
    this.proyectoS.obtenerProyectos().subscribe((proyecosRes:any)=>{
      this.proyectos = proyecosRes.cont
      console.log(this.proyectos);
      
    },err=>{
      console.log(err);
      
    })
  }



}
