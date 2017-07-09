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
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.title = 'Dati per la fatturazione';
        this.submitted = false;
        this.button_click = 0;
        this.data = 'ciao';
        this.uri = '...';
        this.options = ["categoria 1", "categoria 2"];
        this.button_click = 0;
    }
    ProductListComponent.prototype.ciao = function (prod) {
        this.sub = true;
        this.productToEdit = prod;
        //this.productToEdit = new Prodotto(prod.id, prod.name, prod.quantita, prod.prezzo, prod.categoria);
    };
    ProductListComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // this.last_product_id = this.last_product_id + 1;
        //  this.selectedProduct.id = this.last_product_id;
        //  this.prodotti.push(this.selectedProduct);
        //  this.selectedProduct = new Prodotto(0,'',0,0, ' ');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ProductListComponent.prototype, "sub", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProductListComponent.prototype, "prodottitoview", void 0);
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-list',
            template: "<!--<h1>{{prodottitoview[0].name}}</h1>-->\n            <!-- <h2>{{title}}</h2> -->\n\t\t\t<div class=\"container\">\n\t\t\t\n\t\t\t<!-- <div class=\"form-group custom_cliente\">\n\t\t\t <label>Cliente: </label>\n\t\t\t <input type=\"text\" name=\"client\" id=\"nome_cliente\" class=\"form-control cliente_textbox\" [(ngModel)] = \"cliente\">\n\t\t\t \n\t\t\t </div>\n\t\t\t <div class=\"form-group custom_cliente\">\n\t\t\t <label>PIVA: </label>\n\t\t\t <input type=\"text\" name=\"piva\" id=\"codice_piva\" class=\"form-control cliente_textbox\">\n\t\t\t </div>\n             <div class=\"form-group custom_cliente\" id=\"link\">\n\t\t\t  <button type=\"button\" class=\"btn btn-success\" (click)=\"salva()\" [disabled]=\"buttonState()\">Salva</button>\n\t\t\t  </div> -->\n             <table class=\"table table-bordered table-responsive table-hover\">\n\t\t\t    <thead class=\"thead-inverse\">\n\t\t\t    <tr><th>ID</th><th>Prodotto</th><th>Quantit\u00E0</th><th>Prezzo</th><th>Categoria</th></tr>\n\t\t\t    </thead>\n\t\t\t\t <tbody>\n\t\t\t   <tr *ngFor=\"let prod of prodottitoview\" (click)=\"ciao(prod)\"><td>{{prod.id}}</td><td>{{prod.name}}</td><td>{{prod.quantita}}</td><td>{{prod.prezzo}}</td><td>{{prod.categoria}}</td></tr>\n\t\t\t   </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t  <!--  <my-product [selectedProduct] = \"this.productToEdit\" *ngIf=\"sub\"></my-product>   -->\n\t\t\t  \n\t\t\t    \n             \n\n            </div>\n\t\t\t\n\t\t\t<div class=\"container\" *ngIf=\"sub\">\n               <form (ngSubmit)=\"onSubmit()\" #prodForm=\"ngForm\">   \n\t\t\t <!--  <div class=\"form-group\">\n\t\t\t      <label for=\"listino_type\">Listino: </label>\n\t\t\t\t  <select class=\"form-control\" id=\"listino_type\" name=\"listino\"  [(ngModel)] = \"selected_listino.name\">\n\t\t\t\t   <option *ngFor=\"let listino of Lista_Listini\" [value]=\"listino.name\">{{listino.name}}</option>\n\t\t\t\t</select>\n\t\t\t\t<button type=\"button\" class=\"btn btn-success\" id=\"load_button\" (click) = \"CaricaProdotti()\" >Carica</button>\n\t\t\t\t<p>{{selected_listino.name}}  </p>\n\t\t\t   </div> -->\n              <div class=\"form-group\">\n                <label for=\"product_id\">ID: </label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"product_id\" [(ngModel)] = \"productToEdit.id\" name=\"prod_id\" required [readonly]=\"true\" #id=\"ngModel\">\n\t\t\t\t\n\t\t\t   </div> \n\t\t\t   <div class=\"form-group\">\n\t\t\t\t<label for=\"product_name\">Prodotto: </label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"product_name\" [(ngModel)] = \"productToEdit.name\"   name=\"prod_name\" required  [readonly]=\"true\" #name=\"ngModel\">\n\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"product_quantity\">Quantit\u00E0: </label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"product_quantity\" [(ngModel)] = \"productToEdit.quantita\" name=\"qta\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"product_price\">Prezzo: </label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"product_price\" [(ngModel)] = \"productToEdit.prezzo\" name=\"price\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"product_category\">Categoria: </label>\n\t\t\t\t<select class=\"form-control\" id=\"product_category\" name=\"prod_categoria\" [(ngModel)] = \"productToEdit.categoria\"  required  #categoria=\"ngModel\">\n\t\t\t\t  <!-- <option *ngFor=\"let opzione of options\" [value]=\"opzione\">{{opzione}}</option> -->\n\t\t\t\t   <option [value] = \"productToEdit.categoria\">{{productToEdit.categoria}}</option>\n\t\t\t\t</select>\n\t\t\t\t<div *ngIf=\"!(categoria.valid) || (categoria.pristine)\" class=\"alert alert-danger\">\n                   Categoria is required\n                </div>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click) = \"update()\">Update</button>\n\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"NewProd()\">Add</button> -->\n  \n  \n            </form></div>\n\t\t\t   \n\n\t\t\t  ",
            styles: ["h2{margin-left: 13%;}\n             table{width: 80%; clear: left; margin-top: 40px;}\n\t\t\t div.custom_cliente{margin-left: 13%;float: left;}\n\t\t\t .custom_cliente label{position:relative; top: 10px;}\n\t\t\t .form-group{width: 500px;}\n             .cliente_textbox {width: 200px; margin-left: 30%; position: relative; bottom: 20px;}\n\t\t\t tr:active {background-color:#123456;}\n\t\t\t \n\t\t\t "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=viewlistproduct.component.js.map