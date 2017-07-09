"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var prodotto_1 = require('./prodotto');
var listino_1 = require('./listino');
var SelectListinoComponent = (function () {
    function SelectListinoComponent() {
        this.title = "Gestione articoli";
        this.flag_visibility = false;
        this.selected_listino = new listino_1.Listino(0, "", []);
        this.name = 'Angular';
        this.Lista_Listini = [new listino_1.Listino(1, "Listino 1", [new prodotto_1.Prodotto(1, "prodotto1", 2, 23.45, "categoria1"), new prodotto_1.Prodotto(2, "prodotto2", 2, 23.45, "categoria1")]), new listino_1.Listino(2, "Listino 2", [])];
    }
    SelectListinoComponent.prototype.onHeroChange = function (event) {
        this.flag_visibility = false;
    };
    SelectListinoComponent = __decorate([
        core_1.Component({
            selector: 'select-listino',
            template: "\n             <div class=\"container\">\n\t\t\t <h1>{{title}}</h1>\n\t\t\t   <div class=\"form-group\">\n\t\t\t      <label for=\"listino_type\">Listino: </label>\n\t\t\t\t  <select class=\"form-control\" id=\"listino_type\" name=\"listino\"  [(ngModel)] = \"selected_listino\" (change)=\"onHeroChange($event)\">\n\t\t\t\t   <option *ngFor=\"let listino of Lista_Listini; let i = index\" [ngValue]=\"listino\">{{listino.name}}</option>\n\t\t\t\t</select> \n\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-success\" id=\"load_button\" (click) = \"CaricaProdotti()\" >Carica</button> -->\n\t\t\t\t<!-- <p>{{selected_listino.name}} \n\t\t\t\t      \n\t\t\t\t</p> -->\n\t\t\t\t\n\t\t<!--\t<ul> \n                   <li *ngFor=\"let art of selected_listino.Lista_Articoli\"> {{art.id}} {{art.name}} {{art.categoria}} </li> </ul>   -->\n\t\t\t   </div>\n               \n             <product-list [prodottitoview]=\"selected_listino.Lista_Articoli\" [sub]=\"this.flag_visibility\"></product-list>\n\t\t\t </div> \n\t\t\t ",
            styles: [".form-group{width: 500px;} #listino_type{width: 200px;} #load_button{position: relative; bottom: 35px; left: 250px;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], SelectListinoComponent);
    return SelectListinoComponent;
}());
exports.SelectListinoComponent = SelectListinoComponent;
//# sourceMappingURL=selectlistino.component.js.map