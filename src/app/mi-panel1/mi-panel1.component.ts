import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'MiPanel1',
  templateUrl: './mi-panel1.component.html',
  styleUrls: ['./mi-panel1.component.css']
})
export class MiPanel1Component implements OnInit {
	cont;
	miValor:string;
	constructor() { }

	ngOnInit() {
		this.cont=0;
		this.miValor = "";
	}

	lanzarAlerta(){
		//alert("OUCH!")
		this.cont++;
	}

	esInputValido(){
		return this.miValor.length>=10;
	}
}