import { Component } from '@angular/core';

export class Prodotto{
   constructor ( 
       public id: number, 
       public name:string, 
       public quantita: number, 
       public quantita_inserita: number, 
       public prezzo: number,
       public categoria: string, 
       public lista_taglie: string[], 
       public lista_colori: string[], 
       public sel_colore:string, 
       public foto:string
    ){ } 
   getQta(): number{
      return this.quantita_inserita;
   }
}
/*
    id : 1
    name : "prodotto1"
    quantita : 2
    quantita_inserita : 1
    prezzo: 23.45
    categoria: string // category
    lista_taglie: { 0 : "42", 1 : "44" }
    lista_colori : { 0 : "rosso", 1 : "marrone", 2 : "grigio" }
    sel_colore:string // selected color
    foto:string : "/immagini/prodotto1.jpg"
*/