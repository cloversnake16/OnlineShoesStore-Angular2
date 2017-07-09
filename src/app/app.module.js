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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var app_component_1 = require('./app.component');
var formproduct_component_1 = require('./formproduct.component');
var viewlistproduct_component_1 = require('./viewlistproduct.component');
var selectlistino_component_1 = require('./selectlistino.component');
var product_service_1 = require('./product.service');
var categories_data_1 = require('./categories.data');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(categories_data_1.CategoriesData)],
            declarations: [app_component_1.AppComponent, formproduct_component_1.FormProductComponent, viewlistproduct_component_1.ProductListComponent, selectlistino_component_1.SelectListinoComponent],
            providers: [product_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map