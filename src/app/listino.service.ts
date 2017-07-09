import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx'; // RxJS, Async data stream
import 'rxjs/add/operator/toPromise';
import { Listino } from './listino';

@Injectable()
export class ListinoService {
	
	constructor(private http: Http) {}
    selList: Listino;
	spese_sped = 0;
	an_Utente = false;
	
	// get method selected listino
	getSelList(): Listino{
	   return this.selList;
	}
	
	// set method with Listino
	setSelList(listino: Listino): void{
	   this.selList = listino;	   
	}

	// set anUtente method
	setAnUtente():void{
	   if(this.an_Utente == false){
	      this.an_Utente = true;
	   }else{
	      this.an_Utente = false;
	   }
	}
	
	// get anUtente method
	getAnUtente(): boolean{
	   return this.an_Utente;
	}
	
	// set SpSped method
	setSpSped(spedizioni: number): void{
		this.spese_sped = spedizioni;
	}
	
	// get SpSped method
	getSpSped(): number{
		return this.spese_sped;
	}
    	
	//parse listini json file
	getValuesFromJson(JsonPath: string): Promise<Object[]> {		
		// parse json file using RxJS		
		return this.http.get(JsonPath).toPromise().then(response => response.json().data as Object[]);               
	}
}