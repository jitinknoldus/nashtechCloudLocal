import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarsListServiceService {

  url = "https://my.api.mockaroo.com/car_data.json?key=4be4e570";

  constructor(private http: HttpClient) {
  }

  carsList():Observable<any> {
    return this.http.get(this.url)
  }

}
