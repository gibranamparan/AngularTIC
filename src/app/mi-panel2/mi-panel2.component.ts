import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'MiPanel2',
  templateUrl: './mi-panel2.component.html',
  styleUrls: ['./mi-panel2.component.css']
})
export class MiPanel2Component implements OnInit {
	/*MIS DATOS DE PRUEBA*/
	listNombres;

  constructor() { }

  ngOnInit() {
    	this.listNombres=[
      {nombre:'Juan',apellido:'Martinez'},
      {nombre:'Luis',apellido:'Martinez'},
      {nombre:'Pepe',apellido:'Martinez'},
  	];
  }

}
