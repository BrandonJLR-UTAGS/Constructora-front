import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formLogin = this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formLogin.value;

    // var empleado = JSON.parse(localStorage.getItem('empleado'));
    // if(empleado.correo == f.email && empleado.contrasena){


    if(123 == f.email && 123 == f.password ){
      console.log('ingresaste');
      localStorage.setItem('iniciado','true');
      this.navCtrl.navigateRoot('inicio')


    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
      message: 'Verifica tus datos',
      buttons: ['Aceptar']
    });
      await alert.present();

    }

  }

}
