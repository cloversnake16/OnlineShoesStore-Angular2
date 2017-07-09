import { Component } from '@angular/core';

export class AnagraficaUtente{
   constructor ( public ragioneSociale: string, public nome:string, public cognome:string, public indirizzo: string, public citta: string, public cap: string, public telefono:string, public cellulare:string, public fax:string, public email:string, public ind_fatt: boolean){} 
   getRag(): string{return this.ragioneSociale;}
   setindfatt(): void{this.ind_fatt = true;}
}

