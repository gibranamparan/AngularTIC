import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';

import { ProductosModule } from './productos/productos.module';

import { AppComponent } from './app.component';
import { MiPanel1Component } from './mi-panel1/mi-panel1.component';
import { MiPanel2Component } from './mi-panel2/mi-panel2.component';
import { EjercicioBasicoComponent } from './ejercicio-basico/ejercicio-basico.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

//Se declaran las rutas
const routes: Routes = [
  {
    path: 'ejercicioBasico',
    component: EjercicioBasicoComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MiPanel1Component,
    MiPanel2Component,
    EjercicioBasicoComponent,
    SobreNosotrosComponent
  ],
  imports: [
    ProductosModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    //Debido a que este el modulo padre, se usa forRoot
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
