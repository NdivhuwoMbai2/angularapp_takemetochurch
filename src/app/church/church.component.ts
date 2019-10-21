import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { PersondataService } from '../_service/persondata.service';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.css'],
  template: '<ng2-smart-table class="table" [settings]="settings"'+
    '[source]="data" (editConfirm)="onSaveConfirm($event)" (custom)="onCustomAction($event)">'+ 
    '< /ng2-smart-table>'
})

export class ChurchComponent implements OnInit {
  people: [];
  data: any = [];
  source = new LocalDataSource();
  settings: {};
  constructor(private ps: PersondataService ,private router:Router) {
    this.settings = {
      custom: [
        {name: 'ourCustomAction',title:'test'} 
      ],
      edit: {
        confirmSave: true
      },
      attr: {
        class: 'ng2-smart-table table'
      }
      ,
      actions: { delete: false, add: false},
      position: 'left',        
      columns: {
        idperson: {
          title: 'id',
          editable:false
        },
        name: {
          title: 'Name',
          editable: false
        },
        surname: {
          title: 'Surname',
          editable: false
        },
        birthday: {
          title: 'Birthday',
          editable: false,
          type : Date
        },
        telephonenumber: {
          title: 'Telephone',
          editable: false
        },
        isAlive: {
          title: 'Alive or not',
          editable: false
        },
        isMarried: {
          title: 'Married or not',
          editable: false
        },
        location: {
          title: 'Geocode location(Lat;Lng)',
        },
        numberofkids: {
          title: 'Number of kids under the age of 10',
          editable: false
        }
      },
    };
  }
  ngOnInit() {
    return this.ps.getchurchmembers()
      .subscribe((data: {}) => {
        this.data = data;
        console.log(this.data);
        this.source.load(this.data);
      })
  }
  onCustomAction(event) {
    this.router.navigate(['church/church']);
  }
  onCreateConfirm(event) {
    //console.log(event);
    

     
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      //call to remote api, remember that you have to await this
      this.ps.updatelocation(event.newData); 
      event.confirm.resolve(event.newData);
      location.reload();
    } else {
      event.confirm.reject();
    }

    
  }

  

}
