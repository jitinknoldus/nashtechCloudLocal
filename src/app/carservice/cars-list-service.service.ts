import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarsListServiceService {

  url = "https://my.api.mockaroo.com/jitin_cars_data.json?key=e579fe10&page=1&per_page=2";

  constructor(private http: HttpClient) {
  }

  carsList() {
    return this.http.get(this.url)
  }


}
