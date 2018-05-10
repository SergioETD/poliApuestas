import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { EventoComponent } from '../../evento/evento.component';
import { EventosService } from '../../services/eventos.service';
import { ApuestaModel } from '../../shared/models/apuesta.model';
import { ApuestasService } from '../../services/apuestas.service';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {

  selectListaEventos = [];
  
  constructor(private eventService: EventosService, private apuestaService: ApuestasService) { 
  }

  ngOnInit() {
    this.eventService.list().subscribe(
      result => {
        const items = []; //Es necesario
        for(let key of Object.keys(result)){
          items.push(result[key]);
        }
        console.log(items);
        this.selectListaEventos = items;
      },
      error =>{}
    );

    console.log(this.selectListaEventos);
  }

  createApuesta(form){
    const apuesta: ApuestaModel = new ApuestaModel(form.value.evento, form.value.date, form.value.amount);
    this.apuestaService.create(apuesta).subscribe(
      result => {
        console.log(result);
      },
      error=>{
        console.log("Error: "+error);
      }
    )
  }



}
