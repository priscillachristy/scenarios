import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child_2',
  template : `
  <h3>CHILD COMPONENT</h3>
<p>{{childmsg}}</p> `
})
export class Child_2Component {

  @Input() childmsg:string;

 

}
