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
      console.log(data);
      this.cars = data;
    })
  }


//   myCar{
//     carCompany:
// }




  carCompanyName:string = "Mahindra"
  carPrice:string = "12000$"
  carModel:string = "Thar"
  carMileage:string = "2018"
  carLocation:string = "LosAngeles"
  manufacturingYear:string = "2018"
  carColor:string = "White"






}
