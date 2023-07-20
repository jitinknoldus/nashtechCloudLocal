import { Component } from '@angular/core';
import {CarsListServiceService} from "../carservice/cars-list-service.service";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})

export class CarsListComponent {

  cars:any;

  constructor(private carsData:CarsListServiceService) {
    carsData.carsList().subscribe((data)=>{
      this.cars = data;
      console.log(this.cars)
    })
  }
}
