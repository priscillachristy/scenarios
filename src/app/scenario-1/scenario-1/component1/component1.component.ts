import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  template : `
  <h2>Component</h2>
  <input #box (keyup.enter)="onEnter(box.value)">
  <p>{{value}}</p>
  <button (click)="onClickMe(box.value)">submit</button>
    {{clickMessage}}
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  value = '';
  onEnter(value: string) { this.value = value;}
  // console.log(value); }

  clickMessage = '';

  onClickMe(value:string){
    //this.value = value;
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
