import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ProductoService } from './producto.service';
import { FormsModule } from '@angular/forms';
import { FormaProductoComponent } from './forma-producto/forma-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ],
  declarations: [
  		ProductosComponent,
  		FormaProductoComponent,
  		EditarProductoComponent,
	],
	//Proveer de los recursos necesarios a los componentes
	//para funcionar
  providers:[
  	//Datos de a base dase de datos
  		ProductoService
	]

})
export class ProductosModule { }
