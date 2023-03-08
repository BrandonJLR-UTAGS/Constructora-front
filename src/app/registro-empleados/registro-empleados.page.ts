import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.page.html',
  styleUrls: ['./registro-empleados.page.scss'],
})
export class RegistroEmpleadosPage implements OnInit {

  public imagen: any = []

  formRegEmpleados: FormGroup;
  constructor(public fb:FormBuilder,
    public alertController: AlertController ){
    this.formRegEmpleados= this.fb.group({
      'nombre':new FormControl("",Validators.required),
      'FotoEmpleado':new FormControl("",Validators.nullValidator),
      'correo':new FormControl("",Validators.required),
      'contrasena':new FormControl("",Validators.required),
      'numeroTelefono':new FormControl("",Validators.required),
      'tipoEmpleado':new FormControl("",Validators.required),
      'Area': new FormControl("",Validators.required)
    });
  }



  ngOnInit() {
  }

  CargarImagen(event: any){
    const imagenCargada = event.target.files[0]
    this.imagen.push(imagenCargada)

    console.log(event.target.files)


  }

  async RegistrarEmpleado(){
    var f=this.formRegEmpleados.value;
    if(this.formRegEmpleados.invalid){

        const alert = await this.alertController.create({
            header: 'Faltan Datos',
          message: 'Por favor llena todos los Datos',
          buttons: ['Aceptar']
        });

        await alert.present();
        return;
      }

     var empleado = {
      nombre: f.nombre,
      correo: f.correo,
      contrasena: f.contrasena,
      numeroTelefono: f.numeroTelefono,
      tipoEmpleado: f.tipoEmpleado
     }

     localStorage.setItem('empleado',JSON.stringify(empleado));
    }
  }


