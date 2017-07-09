import { Component, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Response} from '@angular/http';
import { ActivatedRoute, Params, Routes, Router }  from '@angular/router';
import { Observable} from 'rxjs/Observable';
import { Prodotto } from './prodotto';
import { Listino } from './listino';
import { ListinoService } from './listino.service';

@Component({
  selector: 'select-listino',
  templateUrl: 'selectlistino.component.html',
  styles: [`.form-group{width: 500px;} #listino_type{width: 200px; position: relative; top: -90px; left: 170px;} #load_button{position: relative; bottom: 35px; left: 250px;}
			.form-group input {position: relative; left:90%; bottom: 60px; width: 300px;} #data_doc{position: relative; top: 50px;} #datePicker{position: relative; top: 15px; left: 170px;} 
		    #label_listino_type{position: relative; top: 0px;} #data_con{position: relative; top: 50px;} #datePickerCon{position: relative; top: 15px; left: 170px;}
		    #magazzino,#priorita{position: relative; bottom: 110px; left: 720px; width: 200px;}
		    #mag_label,#label_priorita{position: relative; bottom: 72px; left: 600px;} h4{width: auto; color: red; position: relative; top: -40px;}
		  `]
})

export class SelectListinoComponent { 
	title = "Listini";
	flag_visibility = false;
	selected_listino = new Listino(0, "", []); // initalize selected listino
	name = 'Angular';
	constructor(private listinoserv: ListinoService, private router: Router) { }
	listini = [];
	//magazzini = [];
	//priorita = [];
	//doc_date;
	ngOnInit(): void {
		/*var now = new Date();
		this.doc_date = ""+now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear();*/
		/* var date = new Date();
		var currentDate = date.toISOString().slice(0,10);
		(<HTMLInputElement>document.getElementById('datePicker')).value = currentDate;*/		
		if(this.listinoserv.getSelList()!=null){
			this.router.navigate(['/products']);
		}else{
			this.getValuesFromJson();
		}		
	}

	getValuesFromJson(): void {
		// get listino array from json file using RxJS and set this.listini
		this.listinoserv.getValuesFromJson("/src/app/listini.json").then(listini => this.listini = listini);		
		if (this.listinoserv.getSelList() == null){
			// alert('ciao');
		}else{
			//document.getElementById('listino_type').selectedIndex = 6;
			//alert(this.listinoserv.getSelList().name);
			this.selected_listino = this.listinoserv.getSelList(); // get selList of ListinoService
			// alert(this.selected_listino.name);
			//  (<HTMLInputElement>document.getElementById('listino_type')).value = this.selected_listino.name;
		}		
		// this.listinoserv.getValuesFromJson("/src/app/magazzini.json").then(magazzini => this.magazzini = magazzini);
		// this.listinoserv.getValuesFromJson("/src/app/priorita.json").then(priorita => this.priorita = priorita);
	}

	onHeroChange(event: Event): void  {
		this.flag_visibility = false;
	}

	change(listino: Listino){
		this.listinoserv.setSelList(listino); // set selList in ListinoService
	}

	// redirect sub product on selected listino
	openListino(listino: Listino): void{	
		this.router.navigate(['/products']); // redirect prodcut page
		this.listinoserv.setSelList(listino); // set selList in ListinoService with listino
	}
}