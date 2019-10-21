import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersondataService } from '../_service/persondata.service';
import { ChurchdataService } from '../_service/churchdata.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(public fb: FormBuilder, public ps: PersondataService, public ch: ChurchdataService) { }

  churchmembers: any;
  churches: any;
  angForm = this.fb.group({
    name: [''],
    surname: [''],
    birthday: [''],
    telephonenumber: [''],
    location: [''],
    isAlive: [''],
    motherid: [''],
    fatherid: [''],
    ismarried: [''],
    idchurch:['']
  });
  onSubmit() {
    if (window.confirm('Are you sure you want to save?')) {
      this.ps.addperson(this.angForm.value);
    } else {
    }
  }
  ngOnInit() { 
    this.ps.getchurchmembers()
      .subscribe((data: {}) => {
        this.churchmembers = data;
      });
    return this.ch.getAllchurches().subscribe((data: {}) => {
      this.churches = data;
    })
  }
}
