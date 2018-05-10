import { Component, OnInit } from '@angular/core';
import { ApuestasService } from '../../services/apuestas.service';

@Component({
  selector: 'app-apuestas-viejas',
  templateUrl: './apuestas-viejas.component.html',
  styleUrls: ['./apuestas-viejas.component.css']
})
export class ApuestasViejasComponent implements OnInit {

  apuestas = [];
  columnasApuestas = ['Event','Name','Amount'];

  constructor(private apuestaService: ApuestasService) { }

  ngOnInit() {
    this.onUpdateApuestas();
  }


  onUpdateApuestas(){
    this.apuestaService.list().subscribe(
      result => {
        const items = []; //Es necesario
        for(let key of Object.keys(result)){
          items.push(result[key]);
        }
        this.apuestas = items;
       
      },
      error=>{
        console.log(error);
      }
    );
  }
}
