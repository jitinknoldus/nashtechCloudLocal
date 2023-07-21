import {Component, OnInit} from '@angular/core';
import {CarsListServiceService} from "../carservice/cars-list-service.service";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})

export class CarsListComponent implements OnInit {
  title = 'pagination';
  cars: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20]


  constructor(private carsData: CarsListServiceService) {
  }

  ngOnInit() {
    this.postList();
  }

  postList(): void {
    this.carsData.carsList().subscribe((data) => {
      this.cars = data;
      console.log(this.cars)
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
  }

  onTableSizeChange(event: any) {
    this.tableSizes = event.target.value;
    this.page = 1;
    this.postList();
  }

}
