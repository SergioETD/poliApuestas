import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {LoginService} from '../loginService/login.service';
//import {ObservableMedia} from '@angular/flex-layout';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@Input() correo:String; //Esto declara una entrada de correo
  //@Input() pass:String; //Esto declara una entrada de correo
  //@Output() cambia = new EventEmitter();//Esto realiza una salida hacia  app
  loading = false;
  resultado = "";

  constructor(private onLogin: LoginService) { }

  ngOnInit() {
  }

  validarDatos(form){
    this.loading = true;
    //alert(form.value.correo+" "+ form.value.pass);
    this.onLogin.validar(form).subscribe(
      result => {
        this.loading = false;
        //console.log(result);
        this.resultado = result;
      },

      error => {
        this.loading = false;
        //console.log(error);
        this.resultado = error;
        //alert(error);
      }
    )

  }

}
