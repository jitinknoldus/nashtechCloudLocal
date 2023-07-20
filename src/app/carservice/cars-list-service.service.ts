import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsListServiceService {

  url = "https://my.api.mockaroo.com/vehicle.json?key=38898010";
  constructor(private http:HttpClient) {
  }

  carsList(){
    return this.http.get(this.url)
  }


}
