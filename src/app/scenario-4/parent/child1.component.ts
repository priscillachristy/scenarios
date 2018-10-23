import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child1',
  template : `
  <h2>Child</h2>
  <input #box (keyup.enter)="onEnter(box.value)">
  <p>{{value}}</p>
  <button (click)="sendMessage(box.value)" class = "button">submit</button>
    {{clickMessage}} `
})
export class Child1Component  {

  //@Input() childmsg:string;

  message : string;

  value='';
  onEnter(value:string){
      this.message = value;
  }

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  clickMessage = '';

  sendMessage(value:string){
      
      this.message = value;
      this.messageEvent.emit(this.message);
  }
}
