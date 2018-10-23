import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'parent1',
  template : `
  <h2>Parent</h2>
  Message : {{message}}
  <cchild (messageEvent) = "receiveMessage($event)"></cchild>
  <button (click)="sendMessage(message)" class = "button">submit</button>`
})
export class PParentComponent implements OnInit {

  message:string;

  constructor() { }

  ngOnInit() {
  }


  receiveMessage($event){
    this.message = $event;
  }

  @Output() messageEvent = new EventEmitter<string>();



  sendMessage(value:string){
      
    this.message = value;
    this.messageEvent.emit(this.message);
}
}
