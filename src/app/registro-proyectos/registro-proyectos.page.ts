import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-proyectos',
  templateUrl: './registro-proyectos.page.html',
  styleUrls: ['./registro-proyectos.page.scss'],
})
export class RegistroProyectosPage implements OnInit {

  public imagen: any = []

  formRegProyectos: FormGroup;
  constructor(public fb:FormBuilder,
     public AlertController: AlertController) {
      this.formRegProyectos= this.fb.group({
        'nombre': new FormControl("", Validators.required),
        'ImagenProyecto':new FormControl("",Validators.nullValidator),
        'descripcion': new FormControl("",Validators.required),
        'presupuestoTotal': new FormControl("",Validators.required),
        'presupuestoManoObra': new FormControl("",Validators.required),
        'presupuestoMaterial': new FormControl("",Validators.required),
        'TiempoEsperado': new FormControl("",Validators.required),
        'PersonaCargo': new FormControl("",Validators.required),
        'Areas':new FormControl("",Validators.required)



    });
  }

  ngOnInit() {

  }
  CargarImagen(event: any){
    const imagenCargada = event.target.files[0]
    this.imagen.push(imagenCargada)

    console.log(event.target.files)


  }


  async RegistrarProyecto(){

  }

}
