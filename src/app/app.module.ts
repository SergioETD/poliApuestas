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
import { LoginComponent } from './auth/login/login.component';
import { LoginService } from './auth/loginService/login.service';
import { LoaderComponent } from './elements/loader/loader.component';
import { NavComponent } from './navigation/nav/nav.component';
import {BreakpointObserver, MediaMatcher} from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './panel/home/home.component';
import { ApuestasComponent } from './panel/apuestas/apuestas.component';
import { ConfiguracionComponent } from './panel/configuracion/configuracion.component';

import { PanelComponent } from './panel/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    TituloComponent,
    ContentComponent,
    BoxBlueComponent,
    BoxRedComponent,
    LoginComponent,
    LoaderComponent,
    NavComponent,
    HomeComponent,
    ApuestasComponent,
    ConfiguracionComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, //Agregado
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [InstagramService, LoginService, BreakpointObserver, MediaMatcher], //Se deben poner aqui tambien los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
