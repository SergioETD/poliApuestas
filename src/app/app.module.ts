import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' //Agregado

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { TituloComponent } from './titulo/titulo.component';
import { ContentComponent } from './content/content.component';
import { BoxBlueComponent } from './box-blue/box-blue.component';
import { BoxRedComponent } from './box-red/box-red.component';

//Servicios

import{ InstagramService } from './services/instagram.service'; //Agregar servicios manualmente
import{HttpClientModule} from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    TituloComponent,
    ContentComponent,
    BoxBlueComponent,
    BoxRedComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule, //Agregado
    HttpClientModule
  ],
  providers: [InstagramService], //Se deben poner aqui tambien los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
