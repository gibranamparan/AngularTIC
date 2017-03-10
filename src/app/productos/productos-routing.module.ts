import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { FormaProductoComponent } from './forma-producto/forma-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const routes: Routes = [
	{
		path:'indexProductos',
		component: ProductosComponent
	},
	{
		path:'formaProducto',
		component: FormaProductoComponent
	},
	{
		path:'editarProducto',
		component: EditarProductoComponent
	},
	{
		path:'editarProducto/:id',
		component: EditarProductoComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductosRoutingModule { }
