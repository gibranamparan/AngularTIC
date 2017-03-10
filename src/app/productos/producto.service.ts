import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ProductoService {
	private apiURL:string = 
		'http://localhost:54332/APIProductos/';
	constructor(private _http:Http) { }

	public getProductos(){
		return this._http
		.get(this.apiURL+'getJsonList')
		.map(res=>res.json())
	}

	public addProducto(producto){
		return this._http
		.post(this.apiURL+'createProducto',producto)
		.map(res=>res.json())
	}

}
