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
    pageNumber = 1;


    increaseCount(){
      this.pageNumber = this.pageNumber + 1;
      return this.pageNumber
    }




    constructor(private carsData:CarsListService) {
      carsData.getData(this.pageNumber).subscribe((data)=>{
        console.log(data);
        this.cars = data;
      })
    }

  updatePageCount(){
    let count = this.increaseCount();
    this.carsData.getData(count).subscribe((data)=>{
      this.cars = data;
    })
  }

  }
