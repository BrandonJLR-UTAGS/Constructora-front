import { Component, OnInit } from '@angular/core';
import { PersonalService } from "../Services/personal.service";
import { AreaService } from "../Services/area.service";
import { ProyectosService } from '../Services/proyectos.service';

@Component({
  selector: 'app-registro-proyectos',
  templateUrl: './registro-proyectos.page.html',
  styleUrls: ['./registro-proyectos.page.scss'],
})
export class RegistroProyectosPage implements OnInit {

  photoSelected: string | ArrayBuffer | undefined;
  file: File;
  jefes = []
  area = []
  idsJefes = []
  idArea= ''
  nombreJefes = []
  nombreArea = ''
  proyecto = {
    nombre: '',
    descripcion: '',
    imgProyecto: '',
    presupuestoTotal: '',
    manoObra: '',
    materialesEsperados: '',
    tiempoProyectoSemanas: '',
    personasCargo: [],
    areaAsginada: {
      nombre: '',
      _id: ''
    }
  }
  constructor(public personalS: PersonalService, public areaS: AreaService, public proyectoS: ProyectosService) {
  }

  ngOnInit() {
    this.obtenerAreas()
    this.obtenerJefes()
  } 

  mostrarNombreArea(){
    this.nombreArea = this.proyecto.areaAsginada.nombre
    this.idArea = this.proyecto.areaAsginada._id

  }

  mostrarNombreJefes(){
    this.nombreJefes=[]
    console.log(this.jefes);
    this.jefes.forEach(element=>{
      this.nombreJefes.push(element.nombre)
      this.idsJefes.push(element._id)
    })
    console.log(this.nombreJefes);
  }

  obtenerJefes(){
    this.personalS.obtenerPersonalJefe().subscribe((res:any)=>{
      this.jefes = res.cont
      console.log(res);
      
    })
  }

  obtenerAreas(){
    this.areaS.obtenerAreas().subscribe((res: any)=>{
      this.area = res.cont
      console.log(this.nombreArea);
      
      console.log(res);
      
    })
  }
  onPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      console.log(this.file);
      
      // image preview
      const reader = new FileReader();
      reader.onload = (e) => this.photoSelected = reader.result as string;
      reader.readAsDataURL(this.file);
    }
  }


  RegistrarProyecto(){
    const nuevoProyecto =  new FormData()
    nuevoProyecto.append('nombre', this.proyecto.nombre)
    nuevoProyecto.append('descripcion', this.proyecto.descripcion)
    nuevoProyecto.append('presupuestoTotalString', this.proyecto.presupuestoTotal)
    nuevoProyecto.append('manoObraString', this.proyecto.manoObra)
    nuevoProyecto.append('materialesEsperadosString', this.proyecto.materialesEsperados)
    nuevoProyecto.append('tiempoProyectoSemanasString', this.proyecto.tiempoProyectoSemanas)
    for (let i = 0; i < this.proyecto.personasCargo.length; i++) {
      nuevoProyecto.append('personasCargo', this.proyecto.personasCargo[i]._id)
    }
    nuevoProyecto.append('areaAsginada', this.idArea)
    nuevoProyecto.append('image', this.file)

    nuevoProyecto.forEach(element=>{
      console.log(element);
      
    })
    
    this.proyectoS.crearProyecto(nuevoProyecto).subscribe((res:any)=>{
      console.log(res);
      
    },err=>{
      console.log(err);
      
    })
    
  }

}
