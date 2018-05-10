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

  
  constructor(private eventService: EventosService, private apuestaService: ApuestasService) { 
  }

  ngOnInit() {}
}
