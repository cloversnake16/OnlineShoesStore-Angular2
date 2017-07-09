import { Component } from '@angular/core';
import { Prodotto } from './prodotto';

export class Listino{
   constructor ( public id: number, public name: string, public Lista_Articoli: Prodotto[]){} 
   getProducts(): Prodotto[]{
      return this.Lista_Articoli;
   }
}
/*
    Lista_Articoli : Prodotto[] 
    foto : "/immagini/listini/trekking.jpg"
    id : 1
    name : "Listino 1"
*/
