import { Component, OnInit } from '@angular/core';
import {AreaService } from "../Services/area.service";
import { PersonalService } from "../Services/personal.service";


@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.page.html',
  styleUrls: ['./registro-empleados.page.scss'],
})
export class RegistroEmpleadosPage implements OnInit {

  photoSelected: string | ArrayBuffer | undefined;
  file: File;
  areas=[]
  usuario = {
    nombre:'',
    correo: '',
    contrasena: '',
    numeroTelefono: '',
    area: {
      nombre: ''
    },
    tipoEmpleado:'',
    imgPerfil: File
  }

  constructor(public areaS:AreaService, public personalS:PersonalService ){
  }

  ngOnInit() {
    this.obtenerAreas()
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

  obtenerAreas(){
    this.areaS.obtenerAreas().subscribe((res: any)=>{
     this.areas = res.cont
      console.log(this.areas);
      
    },err=>{
      console.log(err);
      
    })
  }

  crearUsuario(){
    const nuevoUsuario = new FormData()
    nuevoUsuario.append('nombre', this.usuario.nombre)
    nuevoUsuario.append('correo', this.usuario.correo)
    nuevoUsuario.append('contrasena', this.usuario.contrasena)
    nuevoUsuario.append('numeroTelefonoString', this.usuario.numeroTelefono)
    nuevoUsuario.append('area', this.usuario.area.nombre)
    nuevoUsuario.append('tipoEmpleado', this.usuario.tipoEmpleado)
    nuevoUsuario.append('imgPerfil', this.file)

    this.personalS.crearPersonal(nuevoUsuario).subscribe((res:any)=>{
      console.log(res);
      
    },err=>{
      console.log(err);
      
    })
    
  }
  }


