import { Component, OnInit } from '@angular/core';
import { PersonalService } from "../Services/personal.service";
import { AreaService } from "../Services/area.service";

@Component({
  selector: 'app-crear-area',
  templateUrl: './crear-area.page.html',
  styleUrls: ['./crear-area.page.scss'],
})
export class CrearAreaPage implements OnInit {

  idsJefes = []
  idsPersonal = []
  nombreJefes = []
  nombrepersonal = []
  personalJefes=[]
  personalNormal=[]
  area = {
    nombre: '',
    Trabajadores: [],
    Jefes: []
  }
  constructor(public personalS: PersonalService, public areaS: AreaService) { }

  ngOnInit() {
    this.jefes()
    this.noJefes()
  }

  mostrarNombrePersonal(){
    this.nombrepersonal=[]
    console.log(this.area.Trabajadores);
    this.area.Trabajadores.forEach(element=>{
      this.nombrepersonal.push(element.nombre)
      this.idsPersonal.push(element._id)
    })
    console.log(this.nombrepersonal);
    
  }

  mostrarNombreJefes(){
    this.nombreJefes=[]
    console.log(this.area.Jefes);
    this.area.Jefes.forEach(element=>{
      this.nombreJefes.push(element.nombre)
      this.idsJefes.push(element._id)
    })
    console.log(this.nombreJefes);
  }

  jefes(){

    this.personalS.obtenerPersonalJefe().subscribe((res:any)=>{
      this.personalJefes = res.cont
      console.log(this.personalJefes);
      
    })
  }

  noJefes(){
    this.personalS.obtenerTodoPersonal().subscribe((res:any)=>{
      this.personalNormal = res.cont
      console.log(this.personalNormal);
      
    })
  }

  crearArea(){
    this.area.Trabajadores = this.idsPersonal
    this.area.Jefes = this.idsJefes
    this.areaS.agregarArea(this.area).subscribe(res=>{
      console.log(res);
      
    },err=>{
      console.log(err);
      
    })
    
  }

}
