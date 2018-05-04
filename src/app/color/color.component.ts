import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {InstagramService} from '../services/instagram.service' //Importar el servicio

@Component({
  selector: 'app-color',
  //selector: '[app-color]'
  //selector: '.app-color'
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  
  @Input() color:String; //Esto declara una entrada llamada color
  @Output() cambia = new EventEmitter();//Esto realiza una salida hacia  app
  title = "";
  arreglo = [];
  foto: any;
  
  constructor(private instaService: InstagramService) { }

  ngOnInit() {
    this.getPhotosInstagram();
  }

  onClick(){
    //alert ("click");
    //this.cambia.emit(this.color);
    this.title = "sergio.tendom95@gmail.com";
    //this.getPhotosInstagram();
  }

  onSubmit(form){
    //console.log(form);
    this.arreglo.push(form.value.Title); //La ultima variable proviene del name="Title"
    console.log(this.arreglo);
  }

  //Funcion para consumir el servicio

  getPhotosInstagram(){
    this.instaService.getPhotos().subscribe( //Nos vamos a subscribir al observable y va a estar atento al resultado arrojado
      result => {
        console.log(result);
        this.foto = result.thumbnail_url;
        console.log(this.foto);
      },

      error => {
        console.log(error);
      }
    )
  }

}



