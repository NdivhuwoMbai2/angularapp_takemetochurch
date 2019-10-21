import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersondataService } from '../_service/persondata.service';
import { ChurchdataService } from '../_service/churchdata.service';

declare var L;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  data: any = [];
 //https://a.tile.osm.org/9/253/166.png
  public constructor(private http: HttpClient, private ps: PersondataService,private ch: ChurchdataService) {
    
  }
  public ngOnInit() {    
    var map = L.map('map').setView([51.505,-0.09]
      , 13);
     this.ps.getchurchmembers()
      .subscribe((data: {}) => {
        this.data = data;
        this.data.forEach(myFunction);
      })
    this.ch.getAllchurches().subscribe((data: {}) => {
      this.data = data;
      this.data.forEach(myFunction);
    })
    
    function myFunction(item) {
      var location = item.location.split(";");
         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         }).addTo(map);
         L.marker([location[0],location[1]]).addTo(map)
           .bindPopup(item.name).openPopup();
      }

    

  }
  


}
