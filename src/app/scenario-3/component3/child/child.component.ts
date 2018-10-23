import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template : `
  <h3>CHILD COMPONENT</h3>
<p>{{childmsg}}</p> `
})
export class ChildComponent implements OnInit {

  @Input() childmsg:string;

  constructor() { }

  ngOnInit() {
  }

}
