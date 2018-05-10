import { Injectable } from '@angular/core';
import { ApuestaModel } from '../shared/models/apuesta.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApuestasService {

  constructor(private httpClient: HttpClient) { }


  list(){
    return this.httpClient.get("https://poliapuestas-53003.firebaseio.com/apuesta.json");
  }

  retrieve(){}

  create(data: ApuestaModel){
    return this.httpClient.post("https://poliapuestas-53003.firebaseio.com/apuesta.json", data); //Cambiar esto para que sea un service de eventos (Crear servicios)
  
  }
}
