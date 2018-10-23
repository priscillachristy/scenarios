import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  template : `
  <h1>Grand-Parent</h1>
  Message : {{message}}
  <parent1 (messageEvent) = "receiveMessage($event)"></parent1>
  `
})
export class GrandparentComponent implements OnInit {

  message : string;

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.message = $event;
    console.log($event);
  }

}
