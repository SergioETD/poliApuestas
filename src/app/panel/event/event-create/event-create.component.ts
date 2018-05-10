import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { EventoModel } from '../../../shared/models/evento.model';
import { EventosService } from '../../../services/eventos.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  constructor(private eventService: EventosService, private dialogRef: MatDialogRef <EventCreateComponent>) {}

  ngOnInit() {}

  onSubmit(form){
    const event: EventoModel = new EventoModel( form.value.title, form.value.description);
    this.eventService.create(event).subscribe(
      result => {
        this.dialogRef.close(result);
        console.log(result);
      },
      error=>{
        console.log("Error"+error);
      }
    )
  }

}
