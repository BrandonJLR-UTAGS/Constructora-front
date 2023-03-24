import { Component, OnInit } from '@angular/core';
import {TareaService } from "../Services/tarea.service";
import {AreaService } from "../Services/area.service";
import { PersonalService } from "../Services/personal.service";
import { ProyectosService } from "../Services/proyectos.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  areas = []
  personalJefe = []
  proyectos = []
  files:any
  fecha = ''
  tarea = {
    nombre: "",
    prioridad: "",
    proyecto: {_id: ''},
    area: {_id: ''},
    personaAsignada: {_id: ''},
    semanasEsperadas: '',
    fechaLimite: '',
    detalles: "",
    adjuntos: [],
  }

  prioridad = ["Alta","Media","Baja"]

  constructor(
    public tareaS: TareaService, 
    public areaS: AreaService,
    public personalS:PersonalService,
    public proyectoS: ProyectosService) {}

  ngOnInit(): void {
    this.obtenerAreas()
    this.obtenerJefes()
    this.obtenerProyectos()
  }

  obtenerAreas(){
    this.areaS.obtenerAreas().subscribe((res:any)=>{
      this.areas = res.cont
      console.log(this.areas);
      
    },err=>{
      console.log(err);
      
    })
  }

  obtenerJefes(){
    this.personalS.obtenerPersonalJefe().subscribe((res:any)=>{
      this.personalJefe = res.cont
      console.log(this.personalJefe);
      
    },err =>{
      console.log(err);
  
    })
  }

  obtenerProyectos(){
    this.proyectoS.ObtenerProyectosActivos().subscribe((res:any)=>{
      this.proyectos = res.cont
      console.log(this.proyectos);
      
    },err=>{
      console.log(err);
      
    })
  }

  agregarTarea(){
    const nuevaTarea =  new FormData()
    nuevaTarea.append('nombre', this.tarea.nombre)
    nuevaTarea.append('prioridad', this.tarea.prioridad)
    nuevaTarea.append('proyecto', this.tarea.proyecto._id)
    nuevaTarea.append('area', this.tarea.area._id)
    nuevaTarea.append('personaAsginada', this.tarea.personaAsignada._id)
    nuevaTarea.append('semanasEsperadas', this.tarea.semanasEsperadas)
    nuevaTarea.append('fechaLimite', this.tarea.fechaLimite)
    nuevaTarea.append('detalles', this.tarea.detalles)
    for (let i = 0; i < this.files.length; i++) {
      nuevaTarea.append('archivo', this.files[i])      
    }
    
    this.tareaS.crearTarea(nuevaTarea).subscribe((res:any)=>{
      console.log(res);
      

    }, err=>{
      console.log(err);
      
    })
  }

  onFileSelected(event){
    this.files = event.target.files 
  }



}
