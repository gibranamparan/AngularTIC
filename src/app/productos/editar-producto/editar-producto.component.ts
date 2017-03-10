import { Component, OnInit } from '@angular/core';
//Darle soporte para recibir datos por URL
import { Router, ActivatedRoute, Params } from '@angular/router'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
	/*
	1. Desarollar la forma de edicion utilizando lo que vimos en la forma
	de creacion
	2. Desarrollar un servicio para modificar registro, donde invoquen
	la accion del backend que ya hace eso.
	3. Invocar dicho servicio cuando se haga click en guardar
	4. Rediccionar a el index si la modificacion se ha hecho satisfactoriamente
	*/
  constructor(
	  private route: ActivatedRoute,
	  private router: Router
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
    	alert(params['id']);
  	});
  }

}
