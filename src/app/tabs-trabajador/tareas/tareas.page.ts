import { Component, OnInit } from '@angular/core';
import { TareaService } from "../../Services/tarea.service";


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  tareas = []
  textoDeBusqueda: ''
  constructor(public tareaS: TareaService) { }

  ngOnInit() {
    this.obtenerTareas()
  }

  obtenerTareas(){
    const id  = localStorage.getItem('_id')
    this.tareaS.obtenerTareasPersonal(id).subscribe((res:any)=>{
      this.tareas = res.cont
      console.log(this.tareas);
      
    },err=>{
      console.log(err);
      
    })
  }

  toInfo(id){
    console.log(id);
    
  }

}
