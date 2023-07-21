import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CardComponentComponent } from './cars-list/card-component/card-component.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsListComponent,
    CardComponentComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
