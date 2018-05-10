import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventoModel } from '../shared/models/evento.model';

@Injectable()
export class EventosService {

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get("https://poliapuestas-53003.firebaseio.com/evento.json");
  }
  create(data: EventoModel){
    return this.httpClient.post("https://poliapuestas-53003.firebaseio.com/evento.json", data);
  }
  retrieve(){}

}
