import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public resultado: String = "Resultado"

  precoAlcool : any = " "
  precoGasolina : any = " "


	calcular(){

		//Validar se os campos foram preenchidos
		if( this.precoAlcool && this.precoGasolina ){
			
			var pAlcool = parseFloat(this.precoAlcool)
			var pGasolina = parseFloat(this.precoGasolina)

			/*
			Faz cálculo (precoAlcool / precoGasolina)
			se: resultado >= 0.7 melhor utilizar gasolina
			senão: melhor utilizar álcool
			*/
			var res = pAlcool / pGasolina
			if( res >= 0.7){
				this.resultado = "Melhor utilizar Gasolina"
			}else{
				this.resultado = "Melhor utilizar Álcool"
			}

		}else{
			this.resultado = "Preencha corretamente os campos!"
		}

	}
}