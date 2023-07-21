import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


  @Injectable({
    providedIn: 'root'
  })
  export class CarsListService {

      constructor(private http:HttpClient) {
      }



      getData(pageNumber:number){

        let url = `https://my.api.mockaroo.com/jitin_cars_data.json?key=c8f844d0&page_number=${pageNumber}`

        return this.http.get(url)
      }

 }
