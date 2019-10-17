import { Component, OnInit, Input } from '@angular/core';
import { Service} from '../service.component'; 

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  getElements:any=[];
  constructor(public service:Service) { 
  }

  ngOnInit() {
    this.getElements=this.service.serviceArray;
  }

}
