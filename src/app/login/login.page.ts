import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formLogin = this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

}
