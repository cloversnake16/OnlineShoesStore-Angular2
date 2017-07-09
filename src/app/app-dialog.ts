import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition, ChangeDetectorRef } from '@angular/core';
import { Prodotto } from './prodotto';
import { ProductService } from './product.service';
import { ListinoService } from './listino.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',  
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
  // dialog visible animation
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

export class DialogComponent implements OnInit {
  /* 
      @Input() : get the information from viewlistproduct component
      for example @Input() product means selected product in product list on selected listino.
  */
  // get mode, visible,selected product from paretn(viewlistproduct) component
  @Input() visible: boolean; // dialog visible flag
  @Input() product: Prodotto; // selected product from product list on selected listino
  @Input() mode:string; // product selection mode, e.g, add or edit

  @Input() closable = true; // dialog close flag   
  // dialog close event using @output
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();  
  @Input() image_url: string; // selected product image url
  @Input() tot: number; //
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  prodInCart: Prodotto[] = [];
  invalid_field = false;
  
  constructor(private listinoService: ListinoService, private prodService:ProductService, private router: Router) { }

  ngOnInit() {  }

  // close dialog event
  close() {
    this.visible = false; // set dialog visible flag with false
    this.visibleChange.emit(this.visible); // send visible value to viewlistproduct component
	  //this.product.quantita_inserita = null;	
  }
  
  // add product to cart 
  add(prod: Prodotto, colori: string[], taglie: string[]){	 
    //  this.prodInCart.push(prod);	
	  /* if(prod.sel_colore==null){
	    alert("null");
	  }else{
	    if(prod.quantita_inserita > prod.quantita){ //||colore==null
	       alert("ho finito gli articoli");		
	    }else{
		    //prod
	      this.prodService.setProdotti(new Prodotto(prod.id, prod.name, prod.quantita, prod.quantita_inserita, prod.prezzo, prod.categoria, "nero"), String((<HTMLInputElement>document.getElementById('product_color')).value));
		    prod.quantita = prod.quantita - prod.quantita_inserita;
	      this.visible = false;
        this.visibleChange.emit(this.visible);
	    }
	  }*/
	 
	  if(prod.sel_colore != null && prod.categoria != null){ // If color and category exists
		  if(String(prod.quantita_inserita) == ""){ prod.quantita_inserita = 1;}
		  // alert(prod.quantita_inserita);
		  prod.lista_colori = colori;
		  prod.lista_taglie = taglie;		
      // add selected product into cart
	    this.prodService.setProdotti(new Prodotto(prod.id, prod.name, prod.quantita, prod.quantita_inserita, prod.prezzo, prod.categoria, prod.lista_taglie, prod.lista_colori, prod.sel_colore, prod.foto), String((<HTMLInputElement>document.getElementById('product_color')).value));
      // hide dialog
	    this.visible = false;
      this.visibleChange.emit(this.visible);      
		  this.invalid_field = false; // hide required message		
	  }else{
      this.invalid_field = true; // show required message below button
    }	
  }
  
  edit(prod: Prodotto, colori: string[]){
	  if(String(prod.quantita_inserita) == ""){ prod.quantita_inserita = 1;}
	  this.tot = this.tot + (prod.quantita_inserita * prod.prezzo);
	  this.change.emit(this.tot);
	  //  alert('ciao');
	  //  alert(this.product.lista_taglie[0]);
	  // alert(this.tot);
	
    this.visible = false;
    this.visibleChange.emit(this.visible);
		this.router.navigateByUrl('/Cart', true);	
  }
  
  changeCategory(categoria: number, data: string){
    //alert(categoria);
    // this.listinoService.getValuesFromJson("/src/app/listini.json").filter(function(x){ return x.categories_list >= 42  && x.categories_list <= 44});   
  }
}