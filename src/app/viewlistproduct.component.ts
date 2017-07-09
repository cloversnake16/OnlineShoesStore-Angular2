import { Component, Input, Output, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ActivatedRoute, Params, Routes, Router }   from '@angular/router';

import { Listino } from './listino';
import { Prodotto } from './prodotto'; 
import { ProductService } from './product.service';
import { ListinoService } from './listino.service';

@Component({
  moduleId: module.id,
  selector: 'product-list',
  templateUrl: 'viewlistproduct.component.html',
  styleUrls: ['viewlistproduct.component.css'],
	animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]  
})

export class ProductListComponent  { 
   title = 'Dati per la fatturazione';
   selected_listino: Listino; // list no
   @Input() sub : boolean; // passing data from parent to child
   submitted = false;
   cliente: string
   button_click = 0
   piva: string
   data = 'ciao'
   uri = '...'
   visible = false; // dialog visible flag
   modalita = "add";  // dialog type, default value='add'
 
   trustedDashboardUrl : string;
   productToEdit: Prodotto;
   prodottitoview: Prodotto[];
   
   // component constructor
   constructor(private listinoserv: ListinoService, private prodserv: ProductService, private router: Router){
      this.button_click = 0;
   }
   
   // When data-bound, it was only call.
   ngOnInit(){      
	    this.selected_listino = this.listinoserv.getSelList(); // get selList of listino service 
      this.prodottitoview = this.selected_listino.Lista_Articoli;	// get product list depends on selList
   }
   
   ciao(prod:Prodotto): void{
      this.sub = true;
	    this.visible = true; // show dialog
	    this.productToEdit = prod; // edit flag
	    //this.productToEdit = new Prodotto(prod.id, prod.name, prod.quantita, prod.prezzo, prod.categoria);	  
   }
   
   addToBasket(prod: Prodotto): void{      
	    this.visible = true; // show dialog
		  prod.quantita_inserita = 1; // amount
	    this.productToEdit = prod; // edit flag      
      //  this.productsInBasket.push(prod);
   }
   
   onSubmit() : void {
      this.submitted = true; // submit
      //  this.last_product_id = this.last_product_id + 1;
      //  this.selectedProduct.id = this.last_product_id;
      //  this.prodotti.push(this.selectedProduct);
      //  this.selectedProduct = new Prodotto(0,'',0,0, ' ');
   }
   
   BackToListini(): void{
	   this.listinoserv.setSelList(null); // init selList of ListinoService
	   this.router.navigate(['/ord']); // redirect ord page
   }
}