import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ChurchdataService } from '../_service/churchdata.service';
import { LocalDataSource } from 'ng2-smart-table';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-addchurch',
  templateUrl: './addchurch.component.html',
  styleUrls: ['./addchurch.component.css']
})
export class AddchurchComponent implements OnInit {
  settings: {}; source = new LocalDataSource();
  data: any = [];
  constructor(public fb: FormBuilder, public churchdata: ChurchdataService) {
    
    this.settings = {
      actions: { delete: false, add: false,edit:false },
      position: 'left', attr: {
        class: 'ng2-smart-table table'
      },
      columns: {
        idchurch: {
          title: 'id',
          editable: false
        },
        
        name: {
          title: 'Name',
          editable: false
        },
        location: {
          title: 'location',
          editable: false
        }
      }
    }

   }

  angForm = this.fb.group({
    name: [''],
    location: ['']    
  });
  onSubmit() {
    if (window.confirm('Are you sure you want to save?')) {
      this.churchdata.AddChurch(this.angForm.value);
      location.reload();
    } else {
    }
  }
  ngOnInit() {
    return this.churchdata.getAllchurches()
      .subscribe((data: {}) => {
        this.data = data;
        console.log(this.data);
        this.source.load(this.data);
      })
  }

}
