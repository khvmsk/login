import { Component, OnInit } from '@angular/core';
import { Service} from '../service.component'; 

@Component({
  selector: 'app-serviceelement',
  templateUrl: './serviceelement.component.html',
  styleUrls: ['./serviceelement.component.scss']
})
export class ServiceelementComponent implements OnInit {
  serviceElement=[];
  serviceName:string;
  serviceContent:string;
  cockfilt:boolean=false;

  constructor(public service:Service) {
    
   }

  ngOnInit() {
  }
  serviceDataGetting(){
    this.cockfilt=true;
    this.serviceElement.push({
      name:this.serviceName,
      content:this.serviceContent
    })
    this.service.serviceArray=this.serviceElement;
    console.log(this.service.serviceArray)
  }
}
