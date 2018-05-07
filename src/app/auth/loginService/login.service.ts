import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'; //Libreria observable (Son como hilos escucha, dispuestos a ver cambios)

@Injectable()
export class LoginService {

  private correo: string = "sergio.tendom95@gmail.com";
  private pass: string = "12345";
  constructor() { }

  validar(datos):Observable <any>{
    
      return new Observable((observer)=> {
        setTimeout((tiempo)=>{
          if(datos.value.correo === this.correo && datos.value.pass === this.pass){
            observer.next("Valido");
            observer.complete();
          }

          observer.error("Invalido");

          observer.complete();
        }, 2000);
      });
  }

}
