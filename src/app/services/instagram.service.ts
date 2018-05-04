import { Injectable } from '@angular/core'; //Libreria injectable
import {Observable} from 'rxjs/Observable'; //Libreria observable (Son como hilos escucha, dispuestos a ver cambios)
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable()
export class InstagramService {

   url: string = "https://api.instagram.com/oembed?url=http://instagr.am/p/fA9uwTtkSN/"; //Declaracion de variables
  constructor(public http: HttpClient) { 
   
  }

  getPhotos(): Observable<any>{
    
    return this.http.get(this.url); //Obtener respuesta de nuestro servico o API

  }
}
