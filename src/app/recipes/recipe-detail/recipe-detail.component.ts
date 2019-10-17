import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
output :string ;
  @Input() data:string;
  @Output() msg = new EventEmitter();
dataaa:'ghvjghvyg'
  constructor() { }

  ngOnInit() {
    this.output=this.data;
  }
  getMessages(){
  this.msg.emit(this.dataaa)
}
}
