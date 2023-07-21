import { Component } from '@angular/core';
import {CarsListService} from "../carservice/cars-list.service";
import {CarsListComponent} from "../cars-list/cars-list.component";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  constructor(private carsData:CarsListComponent) {

  }

  increaseCount(){
    this.carsData.updatePageCount();
    console.log(this.carsData.pageNumber);
  }

}
