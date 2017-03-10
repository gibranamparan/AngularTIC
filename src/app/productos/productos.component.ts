import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
	//Contenedor de productos
	productos:Producto[];

  constructor(
  	//Crear una instancia del servicio que nos
  	//proveera de datos del server
  	private _productoService:ProductoService
  	) { }

    ngOnInit() {
    	this._productoService.getProductos()
    	.subscribe(
    		(cualquierCosa:Producto[])=>{
    			this.productos = cualquierCosa;
    			//Solo para probar
    			//console.log(cualquierCosa);
    		},
    		(error)=>{},
  	);
  }

  eliminarProducto(id){
    alert(id);
  }

}
