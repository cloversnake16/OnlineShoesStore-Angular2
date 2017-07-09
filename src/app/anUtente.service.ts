import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Listino } from './listino';
import { AnagraficaUtente } from './AnagrUtente';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnUtenteService {
	anag: AnagraficaUtente;
	anag_fatt: AnagraficaUtente;
	data_doc:string;
	data_con:string;
	seconda_anagrafica: boolean;
	magazzino: string;
	
	constructor(private http: Http) {}
    
	
	setAnUtente(anag: AnagraficaUtente):void{
	   this.anag = anag;
	}
	
	setDate(data:string, data_con:string){
	   this.data_doc = data;
	   this.data_con = data_con;
	}
	
	getDate(data: string): string{
		if(data == "data_doc")
		   return this.data_doc;
	    else
		   return this.data_con;
	}
	
	
	setAnFatt(anag: AnagraficaUtente):void{
	   this.anag_fatt = anag;
	}
	getAnFatt():AnagraficaUtente{
	   return this.anag_fatt;
	}
	
	getAnUtente():AnagraficaUtente{
	   return this.anag;
	}
	
	setMagazzino(mag: string):void{
	   this.magazzino = mag;
	}
	
	getMagazzino():string{
	   return this.magazzino;
	}
	
	
  
 
  
  
}