import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Routes, Router } from '@angular/router';
import { Prodotto } from './prodotto'; // product class
import  {ProductService } from './product.service'; // prodcut service
import  {ListinoService } from './listino.service'; // lists service
import  {AnUtenteService } from './anUtente.service'; // anUtente service 

@Component({
  selector: 'app-root',
  // home page content
  template: `
      <div class="col-xs-12">
        <img src="photo_orizo.jpg" width="50px" height="50px" />
        <nav class="navbar navbar-inverse bg-inverse" style="height: 100%">
            <a class="navbar-brand" routerLinkActive="active" [routerLink]="['/orderslist']">Ordini Lista</a>
            <a class="navbar-brand" routerLinkActive="active" [routerLink]="['/ord']">Ordini</a> 
            <a  class="navbar-brand" routerLinkActive="active"  [routerLink]="['/cart']">Carrello</a> 
            <!-- <ul><li *ngFor="let p of this.productsInBasket">{{p.name}}</li></ul> -->
        </nav>        
        <router-outlet></router-outlet>  
      </div>
      
    `,
		styles: [`img{float: left;} nav{height: 50px; position: relative; left: 55px;}`],			 
		providers: [ProductService, ListinoService, AnUtenteService] 
    //Servizio globale per il passaggio dei dati alla pagina carrello: va messo solo qui
})

export class AppComponent  {
  constructor (private router: Router, private prodService: ProductService, private listService: ListinoService){};
  //productsInBasket = this.prodService.getProdotti();
  name = 'Angular';
  /*ciao():void{    
    this.router.navigate(['ord']);
  }*/
}