import { Component, OnInit } from '@angular/core';
import { EventCreateComponent } from '../panel/event/event-create/event-create.component';
import { MatDialog } from '@angular/material';
import { EventosService } from '../services/eventos.service';



@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  eventos = [];
  columnasEventos = ['ID','Title','Description'];

  constructor(private dialog: MatDialog, private eventService: EventosService) { }

  ngOnInit() {
    this.onUpdateData();
  }


  onUpdateData(){
    this.eventService.list().subscribe(
      result => {

        const items = []; //Es necesario
        for(let key of Object.keys(result)){
          items.push(result[key]);
        }
        this.eventos = items;
       
      },
      error=>{
        console.log(error);
      }
    );
  }

  onCreate(){
    const eventCreate = this.dialog.open(
      EventCreateComponent, {
        data:{
          
        }
      }
    );

    eventCreate.afterClosed().subscribe(
      result => {
        this.onUpdateData();
      },
      error => {
        console.log(error);
      }
    );
  }
}