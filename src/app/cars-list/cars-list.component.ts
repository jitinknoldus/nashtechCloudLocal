import { Component } from '@angular/core';
import {CarsListService} from "../carservice/cars-list.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})

export class CarsListComponent {

    cars:any;
    constructor(private carsData:CarsListService) {
      carsData.carsList().subscribe((data)=>{
        console.log(data);
        this.cars = data;
      })
    }
  }
