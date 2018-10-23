import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  template : `
  <h2>Parent</h2>
  Message : {{message}}
  <child1 (messageEvent) = "receiveMessage($event)"></child1>`
})
export class ParentComponent implements OnInit {

  message:string;

  constructor() { }

  ngOnInit() {
  }


  receiveMessage($event){
    this.message = $event;
  }
}
