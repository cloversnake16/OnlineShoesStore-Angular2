import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto';
@Injectable()
export class ProductService {
  public prodotti: Prodotto[] = [];
  
  // get cart(product lis)
  getProdotti(): Prodotto[]{
      return this.prodotti;
  }
  
  // calculate all
  calcolaTotale(ident: number): number{
	    var tot_qta = 0;
      for (var x in this.prodotti) {
          //this.totale = this.totale + (this.list_in_cart[x].prezzo * this.list_in_cart[x].quantita_inserita);
	        if(this.prodotti[x].id == ident) tot_qta = tot_qta   + Number(this.prodotti[x].quantita_inserita);
      }
	    return tot_qta;
  }
  
  // add selected product into cart
  setProdotti(prod: Prodotto, colore: string): void{
	  // prod.colore = colore;
	  prod.sel_colore = colore;
      this.prodotti.push(prod);
  }
}