import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { LoginComponent } from "./auth/login/login.component";
import { NavComponent } from "./navigation/nav/nav.component";
import { PanelComponent } from "./panel/panel/panel.component";
import { HomeComponent } from "./panel/home/home.component";
import { ApuestasComponent } from "./panel/apuestas/apuestas.component";
import { ConfiguracionComponent } from "./panel/configuracion/configuracion.component";



const appRoutes: Routes=[{path: 'login', component: LoginComponent},
                         { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
                         {path : 'admin', component: PanelComponent,
                             children:[{path: 'home', component: HomeComponent, pathMatch: 'full'},
                                        {path: 'apuestas', component: ApuestasComponent, pathMatch: 'full'},
                                        {path: 'config', component: ConfiguracionComponent, pathMatch: 'full'}]}, 
                        {path: '**', redirectTo: 'admin/home'}] //los ** indican una ruta incorrecta, y a donde se debe redirigir cuando esto pase

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}