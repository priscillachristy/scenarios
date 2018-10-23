import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  
  template : `
  <h2>Parent</h2>
  Message : {{message}}
  <child_1 (messageEvent) = "receiveMessage($event)"></child_1>
  <child_2 [childmsg] = "message"></child_2>`
})
export class Parent1Component implements OnInit {

  message:string;
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.message = $event;
  }


}
