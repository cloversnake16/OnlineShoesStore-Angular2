import { Component, Input, ChangeDetectorRef } 		from '@angular/core';
import { ActivatedRoute, Params, Routes, Router }   from '@angular/router';

import { Prodotto } 		from './prodotto';
import { AnagraficaUtente } from './AnagrUtente';
import { ProductService } 	from './product.service';
import { ListinoService } 	from './listino.service';
import { AnUtenteService } 	from './anUtente.service';

//declare var require: any

@Component({
  selector: 'cart',
  templateUrl: 'cart.component.html',
  styles: [`div#totale_carrello{border:1px solid black;width: 400px;height: 205px;position:absolute;top: 150px; left:1080px;}
			#totale_carrello h2 {text-align: center;} #totale_carrello h4{margin-left: 10px;margin-top: 50px;} input{width: 200px;} select{width: 100px;}	    
	}`]			
})
export class CartComponent  {  
	constructor(private route: ActivatedRoute, 
				private prodService: ProductService, 
				private listinoserv: ListinoService, 
				private anutenteservice: AnUtenteService, 
				private router: Router) {}

	/*campi anagrafica utente */
	ragioneSociale: string;
	nome: string;
	cognome: string;
	indirizzo: string;
	citta: string;
	cap: string;
	telefono: string;
	cellulare: string;
	fax: string;
	email: string;

	/*fine */
	/*seconda anagrafica*/
	ragioneSocialeFatt: string;
	nomeFatt: string;
	cognomeFatt:string;
	indirizzoFatt:string;
	cittaFatt:string;
	capFatt:string;
	telefonoFatt:string;
	cellulareFatt:string;
	faxFatt:string;
	emailFatt:string;
	/*fine*/
	anag: AnagraficaUtente;
	anag_fatt: AnagraficaUtente;

	mag: string;
	ind_fatt: boolean;
	dati_inviati: boolean;
	data_doc;
	data_con;
	list_in_cart: Prodotto[];
	trasportatori = [];
	metodi_pagamento = [];
	magazzini = [];
	priorita = [];
	productToEdit: Prodotto;
	anUtente = this.listinoserv.getAnUtente();
	totale = 0;
	base = 0;
	spedizione = 0;
	old_spedizione = 0;

	visible = false;
	modalita = "edit";
	ngOnInit() {		
		this.list_in_cart = this.prodService.getProdotti();
		this.spedizione = this.listinoserv.getSpSped();
		(<HTMLInputElement>document.getElementById('sp_sped')).value = String(this.listinoserv.getSpSped());
		for (var x in this.list_in_cart) {
			//this.totale = this.totale + (this.list_in_cart[x].prezzo * this.list_in_cart[x].quantita_inserita);			
			this.totale = this.totale   + (this.list_in_cart[x].prezzo * this.list_in_cart[x].quantita_inserita);
		}
		this.base = this.totale;
		this.totale = this.totale + Number(this.spedizione);
		this.mag = this.anutenteservice.getMagazzino();
		//alert(this.mag);
		this.getValuesFromJson();
		this.data_doc = new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear();
		
		//this.anag = new AnagraficaUtente(this.ragioneSociale, this.nome, this.cognome, this.indirizzo, this.citta, this.cap, this.telefono, this.cellulare, this.fax, this.email, false);
		// this.anutenteservice.setAnUtente(this.anag);
		this.anag = this.anutenteservice.getAnUtente();
		this.data_doc = this.anutenteservice.getDate("data_doc");
		this.data_con = this.anutenteservice.getDate("data_con");		
		
		if(this.anag != null){			
			this.ragioneSociale = this.anag.ragioneSociale;
			this.nome = this.anag.nome;
			this.cognome = this.anag.cognome;
			this.indirizzo = this.anag.indirizzo;
			this.citta = this.anag.citta;
			this.cap = this.anag.cap
			this.telefono = this.anag.telefono;
			this.cellulare = this.anag.cellulare;
			this.fax = this.anag.fax;
			this.email = String(this.anag.email);
			//	alert(this.email);
			this.ind_fatt = this.anag.ind_fatt;
			//alert(this.ind_fatt);
			this.anag_fatt = this.anutenteservice.getAnFatt();
			if(this.anag_fatt!=null){
				this.ragioneSocialeFatt = this.anag_fatt.ragioneSociale;
				this.nomeFatt = this.anag_fatt.nome;
				this.cognomeFatt = this.anag_fatt.cognome;
				this.indirizzoFatt = this.anag_fatt.indirizzo;
				this.cittaFatt = this.anag_fatt.citta;
				this.capFatt = this.anag_fatt.cap;
				this.telefonoFatt = this.anag_fatt.telefono;
				this.cellulareFatt = this.anag_fatt.cellulare;
				this.faxFatt = this.anag_fatt.fax;
				this.emailFatt = String(this.anag_fatt.email);
			}
		}		
		// var e = document.getElementById("magazzino");
		if(this.anutenteservice.seconda_anagrafica == true){
			this.ind_fatt = true;
		}else{
			this.ind_fatt = false;
		}
	}

	getValuesFromJson(): void {
		this.listinoserv.getValuesFromJson("/src/app/trasportatori.json").then(tr => this.trasportatori = tr);
		this.listinoserv.getValuesFromJson("/src/app/metodi_pagamento.json").then(pag => this.metodi_pagamento = pag);
		this.listinoserv.getValuesFromJson("/src/app/magazzini.json").then(mag => this.magazzini = mag);
		this.listinoserv.getValuesFromJson("/src/app/priorita.json").then(pr => this.priorita = pr);
	}

	ngOnChanges(){
		if((<HTMLInputElement>document.getElementById('datePicker')).type=='text'){
			alert('ciao');
		}
		if(this.anUtente == false){
			this.list_in_cart = this.prodService.getProdotti();
			for (var x in this.list_in_cart) {
				this.totale = this.totale + (this.list_in_cart[x].prezzo * this.list_in_cart[x].quantita_inserita);
			}
		}		
		alert(this.ragioneSociale);
	}

	openEdit(prod: Prodotto): void{
		this.visible = true;			
		this.productToEdit = prod;
	}
	
	countChange(prod: Prodotto, event) {
		//this.totale = this.totale - (prod.prezzo * prod.quantita_inserita);
		//alert(prod.quantita_inserita);
		//	alert(prod.prezzo);
		this.totale = 0;
		//this.base = 0;
		for (var x in this.list_in_cart) {
			this.totale = this.totale + (this.list_in_cart[x].prezzo * this.list_in_cart[x].quantita_inserita);
		}
		this.base = this.totale;
		this.totale = this.base + Number(this.spedizione);
		(<HTMLInputElement>document.getElementById('sp_sped')).value = String(this.spedizione);
		//this.totale = event.target.value;
	}
	
	onKey(event) { // without type info
		// alert(event.keyCode);
		this.spedizione = event.target.value;
		if(event.keyCode == 8){
			this.totale = this.base;
			this.totale = this.totale + Number(event.target.value);
		}else{
			//this.spedizione = event.target.value;
			this.totale = this.base + Number(this.spedizione);
			this.old_spedizione = Number(this.spedizione);
		}		
		this.listinoserv.setSpSped(this.spedizione);
	}
		
	setAnag(event){
		this.anag = new AnagraficaUtente(this.ragioneSociale, this.nome, this.cognome, this.indirizzo, this.citta, this.cap, this.telefono, this.cellulare, this.fax, this.email, false);
		this.anutenteservice.setAnUtente(this.anag);			
		if(this.anutenteservice.seconda_anagrafica == true){ //setta i dati seconda_anagrafica
			this.anag_fatt = new AnagraficaUtente(this.ragioneSocialeFatt, this.nomeFatt, this.cognomeFatt, this.indirizzoFatt, this.cittaFatt, this.capFatt, this.telefonoFatt, this.cellulareFatt, this.faxFatt, this.emailFatt, false);
			this.anutenteservice.setAnFatt(this.anag_fatt);
		}			
	}
		
	dataChange(): void{
		this.anutenteservice.setDate((<HTMLInputElement>document.getElementById('datePicker')).value, (<HTMLInputElement>document.getElementById('datePickerCon')).value);		
	}
	
	remove(prod:Prodotto, event) {
		var index = Number(this.list_in_cart.indexOf(prod, 0));
		//alert(index);
		if (index > -1) {		
			this.base = Math.round((this.base-(prod.prezzo * prod.quantita_inserita))*Math.pow(10, 2)) /Math.pow(10,2);
			this.totale = this.base + Number(this.spedizione);
			this.list_in_cart.splice(index, 1);		
		}
		
		if(this.list_in_cart.length == 0){
			this.totale = 0;
			this.base = 0;
			this.spedizione = 0;
			event.target.value = 0;
			this.clear();
			this.listinoserv.setSpSped(0);
			this.anUtente = false;
			//  alert(event.target.value);	   
		}
	}

	isChecked(): void{
		if(!this.ind_fatt){
			this.ind_fatt = true;
			this.anutenteservice.seconda_anagrafica = true;			
		}else{
			this.ind_fatt = false;
			this.anutenteservice.seconda_anagrafica = false;
		}
	}

	openConfirm(): void{
		if(this.list_in_cart.length > 0){
			this.anUtente = true;
			this.getValuesFromJson();
			this.listinoserv.setAnUtente();
		}
	}

	clear():void{
		//document.getElementById('sp_sped').value="";
		(<HTMLInputElement>document.getElementById('sp_sped')).value = "";
	}

	invio():void{		
		/*Header with date, magazzino, trasportatore, pagamenti..*/		
		var start_of_file = "{\n \"Header\": [\n";
		var field_name =  start_of_file+"{ \"DataDocumento\": ";
		var s = field_name + "\""+ (<HTMLInputElement>document.getElementById('datePicker')).value+"\"";
		field_name = ",\n \"Data Consegna\": \" " + (<HTMLInputElement>document.getElementById('datePickerCon')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Magazzino\": \" " + (<HTMLInputElement>document.getElementById('magazzino')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Priorità\": \" " + (<HTMLInputElement>document.getElementById('priorita')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Trasportatore\": \" " + (<HTMLInputElement>document.getElementById('trasp')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Pagamento\": \" " + (<HTMLInputElement>document.getElementById('pagamento')).value+"\"}], ";
		s = s + field_name;
		field_name = ",\n \"TOTALE\": \" " + this.totale +"\"}], ";
		s = s + field_name;
		
		/*fine*/
		if(this.list_in_cart.length > 0){
			s = s + "\n\n\"order\": [";
			for (var x in this.list_in_cart) {
				if(this.list_in_cart.indexOf(this.list_in_cart[x]) != 0){
					s = s + "}, \n";	
				}
				s = s + "{";
				field_name =  "\n \"Nome\": \" " + this.list_in_cart[x].name+"\"";
				s = s + field_name;
				field_name =  "\n \"Prezzo\": \" " + this.list_in_cart[x].prezzo+"\"";
				s = s + field_name;
				field_name =  "\n \"Quantita\": \" " + this.list_in_cart[x].quantita_inserita+"\"";
				s = s + field_name;
				field_name =  "\n \"Subtotale\": \" " + (this.list_in_cart[x].quantita_inserita* this.list_in_cart[x].prezzo)+"\"";
				s = s + field_name;
				if(this.list_in_cart.length == 1) s = s + "} \n ";
			}
			s = s + "}], "		
		}		
		field_name =  start_of_file+"[{ \"DataDocumento\": ";		
		s  = s  + "\n\n \"data\": \n";
		var end_of_file = " }]\n}";
		field_name = "[{ \"Ragione Sociale\": "+ (<HTMLInputElement>document.getElementById('ragionesociale')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Nome\": \" " + (<HTMLInputElement>document.getElementById('nome')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Cognome\": \" " + (<HTMLInputElement>document.getElementById('cognome')).value+"\"";
		s = s+ field_name;
		field_name = ",\n \"Indirizzo\": \" " + (<HTMLInputElement>document.getElementById('indirizzo')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Città\": \" " + (<HTMLInputElement>document.getElementById('citta')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Telefono\": \" " + (<HTMLInputElement>document.getElementById('telefono')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Cellulare\": \" " + (<HTMLInputElement>document.getElementById('cellulare')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Fax\": \" " + (<HTMLInputElement>document.getElementById('fax')).value+"\"";
		s = s + field_name;
		field_name = ",\n \"Email\": \" " + (<HTMLInputElement>document.getElementById('mail')).value+"\"";
		s = s + field_name;
		
		if(this.ind_fatt){
			s = s + "} ,\n{ ";
			field_name = "\n \"Ragione Sociale\": \" " + (<HTMLInputElement>document.getElementById('ragionesocialefatt')).value+"\"";
			s = s + field_name;
			field_name = ",\n \"Nome\": \" " + (<HTMLInputElement>document.getElementById('nomefatt')).value+"\"";
			s = s + field_name;
			field_name = ",\n \"Cognome\": \" " + (<HTMLInputElement>document.getElementById('cognomefatt')).value+"\"";
			s = s + field_name;
			field_name = ",\n \"Indirizzo\": \" " + (<HTMLInputElement>document.getElementById('indirizzofatt')).value+"\"";
			s = s + field_name;
			field_name = ",\n \"Città\": \" " + (<HTMLInputElement>document.getElementById('cittafatt')).value+"\"";
			s = s + field_name;
			field_name = ",\n \"Cap\": \" " + (<HTMLInputElement>document.getElementById('capfatt')).value+"\"";
			s = s + field_name;
			field_name = ",\n \"Telefono\": \" " + (<HTMLInputElement>document.getElementById('telefonofatt')).value+"\"";
			s = s + field_name;
			field_name = ",\n \"Cellulare\": \" " + (<HTMLInputElement>document.getElementById('cellularefatt')).value+"\"";
			s = s + field_name;
			field_name = ",\n \"Fax\": \" " + (<HTMLInputElement>document.getElementById('faxfatt')).value+"\"";
			s = s + field_name;
			field_name = ",\n \"Email\": \" " + (<HTMLInputElement>document.getElementById('mailfatt')).value+"\"";
			s = s + field_name;
			s = s + end_of_file;
		}else{
			s = s + end_of_file;
		}
		var out = JSON.stringify(s);
		var obj = JSON.parse(out);		
		//alert(obj);
		console.log(obj);
		/* 
		var a: any = document.getElementById("a");
		var file = new Blob([obj], {type: 'application/json'});
		a.href = URL.createObjectURL(file);
		a.download = "output.json";		
		//  var fs = require("fs");
		// var word = fs.readFileSync('words.json'); */

		/* save order data into json file
		const jsonfile=require("jsonfile");
		var filename='./orderdata/1.json';
		jsonfile.writefile(filename, obj, function(err){
			alert(err);
		})*/
		//this.router.navigate(['/orderslist']); // redirect prodcut page
		alert("Successfully ordered!");
	}

	carica(event){
		//var http = require("http");
		/* var path = (<HTMLInputElement>document.getElementById('file_ch')).files[0].name;
		alert(path);
		var ArrPage = path.split(".");
		var LenPage = ArrPage.length;
		var ExtPage = ArrPage[LenPage - 1];
		alert(ExtPage);
		if(ExtPage != 'json'){alert('inserire un json');}else{		
			var ajaxhttp = new XMLHttpRequest();
			var url = path;		
			ajaxhttp.open("GET", url, true);
			ajaxhttp.setRequestHeader("content-type","application/json");
			ajaxhttp.onreadystatechange = function(){
				if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
					var jcontent = ajaxhttp.responseText;
					console.log(jcontent);
					console.log(ajaxhttp);
				}
			}
			ajaxhttp.send(null);
		}*/
		//   var data = fs.readFileSync('output.json');
	}
		
	ciao():void{
		//	alert((<HTMLInputElement>document.getElementById('magazzino')).value);
		this.mag = (<HTMLInputElement>document.getElementById('magazzino')).value;
		this.anutenteservice.setMagazzino(this.mag);
	}
}