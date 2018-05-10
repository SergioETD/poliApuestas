import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  rutas = [{
        nombre: 'Home', link: '/admin/home'
      },
      {
        nombre: 'Eventos', link: '/admin/eventos'
      },
      {
        nombre: 'Apuestas', link: '/admin/apuestas'
      },
      {
        nombre: 'Configuracion', link: '/admin/config'
      },
      
  ];

  ngOnInit() {
  }

}
