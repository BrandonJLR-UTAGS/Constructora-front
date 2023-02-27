import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.page.html',
  styleUrls: ['./registro-empleados.page.scss'],
})
export class RegistroEmpleadosPage implements OnInit {

  formRegEmpleados: FormGroup;
  constructor(public fb:FormBuilder){
    this.formRegEmpleados= this.fb.group({
      'nombre':new FormControl("",Validators.required),
      'correo':new FormControl("",Validators.required),
      'contrasena':new FormControl("",Validators.required),
      'numeroTelefono':new FormControl("",Validators.required),
      'tipoEmpleado':new FormControl("",Validators.required)
    });
  }



  ngOnInit() {
  }

}
