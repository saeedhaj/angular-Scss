import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restoran',
  templateUrl: './restoran.component.html',
  styleUrls: ['./restoran.component.scss']
})
export class RestoranComponent implements OnInit {
  name: string;
  sname: string;
  restorans: any[] = [
    {
      nameRestoran: 'gklesf',
      city: 'gasdg',
    },
    {
      nameRestoran: 'ASDFGHJK',
      city: 'gasdg4545',
    },
    {
      nameRestoran: 'gklesfLKJJH',
      city: 'gasdg1235',
    },
  ];

  isAddingRestoran = false;
  isUpdateingRestoran = false;
  selectedRestoranIndex: number;




  constructor() { }


  ngOnInit(): void {
  }


  onSaveClick() {
    const NewRestoran = {
      nameRestoran: this.name,
      city: this.sname,
    };
    this.restorans.push(NewRestoran);
    this.resetForm();
      this.isAddingRestoran=false;
  }

  onCreateCancel() {
    this.isAddingRestoran = false;
  }

  onCreateNewClick() {
    this.isAddingRestoran = true;
    // this.isUpdateingRestoran = false;
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.sname = '';
  }

  onRemoveClick(x: number) {
    this.restorans.splice(x, 1)
  }

  onEditClick(restoran: any, x: number) {
    this.isUpdateingRestoran = true;
    this.isAddingRestoran = false;
    this.name = restoran.nameRestoran;
    this.sname = restoran.city;
    this.selectedRestoranIndex = x;
  }

  onUpdateClick() {
    this.isUpdateingRestoran = false;

    const NewRestoran = {
      nameRestoran: this.name,
      city: this.sname,
    };
    this.restorans[this.selectedRestoranIndex] = NewRestoran;
  }
}
