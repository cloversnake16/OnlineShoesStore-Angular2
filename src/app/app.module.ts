// app root module
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component'; // main component
import { ProductListComponent } from './viewlistproduct.component'; // viewlistproduct component ; detail product list on lists
import { SelectListinoComponent } from './selectlistino.component'; // lists component(lists page)
import { ProductService } from './product.service'; // 
import { DialogComponent } from './app-dialog'; // product add/edit dialog
import { CartComponent } from './cart.component';
import { OrderslistComponent } from './orderslist/orderslist.component'; // cart component

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, 
            RouterModule.forRoot([{path: 'orderslist', component: OrderslistComponent}]),
            RouterModule.forRoot([{path: 'cart', component: CartComponent}]),
            RouterModule.forRoot([{path: 'ord', component: SelectListinoComponent}]),
            RouterModule.forRoot([{path: 'products', component: ProductListComponent}])],
  declarations: [ AppComponent, ProductListComponent, SelectListinoComponent, DialogComponent, CartComponent, OrderslistComponent ],
  providers: [ ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }