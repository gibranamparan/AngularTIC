import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-producto',
  templateUrl: './forma-producto.component.html',
  styleUrls: ['./forma-producto.component.css']
})
export class FormaProductoComponent implements OnInit {
	nuevoProducto:Producto = new Producto();
  constructor(
    //Solicitar informacion de productos al server
    private _productoService:ProductoService,
    //ME va a permitir hacer redirecciones
    private _router:Router
  ) { }

  ngOnInit() {
  }

  guardarProducto(){
    this._productoService.addProducto(this.nuevoProducto)
    .subscribe(
      (data)=>{
        var funciono = data.funciono;
        if(funciono){
          //Redireccionar a la lista de productos
          this._router.navigate(['indexProductos']);
        }
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  get imprimirNuevoProducto(){
  	return JSON.stringify(this.nuevoProducto);
  }
}
