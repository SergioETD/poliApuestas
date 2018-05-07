import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router'
import { LoginComponent } from "./auth/login/login.component";
import { NavComponent } from "./navigation/nav/nav.component";
import { PanelComponent } from "./panel/panel/panel.component";
import { HomeComponent } from "./panel/home/home.component";
import { ApuestasComponent } from "./panel/apuestas/apuestas.component";
import { ConfiguracionComponent } from "./panel/configuracion/configuracion.component";



const appRoutes: Routes=[{path: 'login', component: LoginComponent},
                         {path : 'admin', component: PanelComponent,
                             children:[{path: 'home', component: HomeComponent, pathMatch: 'full'},
                                        {path: 'apuesta', component: ApuestasComponent, pathMatch: 'full'},
                                        {path: 'config', component: ConfiguracionComponent, pathMatch: 'full'}]}, 
                        {path: '**', redirectTo: 'admin/home'}]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}