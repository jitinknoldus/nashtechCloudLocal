import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

  @Injectable({
    providedIn: 'root'
  })
  export class CarsListService {

      pageNumber = 5;
      apiKey:string = 'c8f844d0';

      url = `https://my.api.mockaroo.com/jitin_cars_data.json?key=${this.apiKey}&page_number=${this.pageNumber}`;
      constructor(private http:HttpClient) {
      }

      carsList(){
        return this.http.get(this.url)
      }
 }
