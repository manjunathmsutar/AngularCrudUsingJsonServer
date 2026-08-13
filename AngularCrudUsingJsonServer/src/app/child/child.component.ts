import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() childvar:any;
@Output() data = new EventEmitter<string>();
childval:string='from child'
ngOnInit(){
  console.log(this.childvar)
}
send(){
  this.data.emit(this.childval)
}
}
