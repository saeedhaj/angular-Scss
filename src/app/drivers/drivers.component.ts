import { Component, OnInit } from '@angular/core';

const DRIVERS = [
  { position: 1, name: 'Hydrogen4', lastName: 'lkjlkj', phone: '09125454' },
  { position: 1, name: 'Hydrogen6', lastName: 'lkjlkj', phone: '09125454' },
  { position: 1, name: 'Hydrogen7', lastName: 'lkjlkj', phone: '09125454' }
];

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'lastName', 'phone', 'edit'];
  dataSource = DRIVERS;
  name: string;
  lname: string;
  tel: number;




  constructor() { }

  ngOnInit(): void {

  }

  onSaveClick() {
    const cx = { position: 1, name: this.name, lastName: this.lname, phone: this.tel.toString() };
    this.dataSource.push(cx);
    this.dataSource = [...this.dataSource];
  }

  onEditClick(element) {
    console.log(element)
    this.name = element.name;
    this.lname = element.lastName;
    this.tel = element.phone;
  }
}
