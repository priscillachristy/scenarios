import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  template : `
  <h2>Component</h2>
  <input #box (keyup.enter)="onEnter(box.value)">
  <p>{{value}}</p>
  <button (click)="onClickMe(box.value)">submit</button>
    {{clickMessage}}`,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  value = '';
  onEnter(value: string) { this.value = value;}
  // console.log(value); }

  clickMessage = '';

  onClickMe(value:string){
    this.value = value;
    //console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
