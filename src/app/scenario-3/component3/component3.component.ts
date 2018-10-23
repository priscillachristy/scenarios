import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  template : `
  <h2>Parent</h2>
  <app-child [childmsg] = "child_message"></app-child>`
})
export class Component3Component implements OnInit {

  child_message = "here u go!";

  constructor() { }

  ngOnInit() {
  }

}
