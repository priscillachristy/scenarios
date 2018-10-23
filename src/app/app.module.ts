import { PParentComponent } from './scenario-5/grandparent/pparent.component';
import { CChildComponent } from './scenario-5/grandparent/cchild.component';
import { Child1Component } from './scenario-4/parent/child1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './scenario-1/scenario-1/component1/component1.component';
import { Component2Component } from './scenario-2/component2/component2.component';
import { Component3Component } from './scenario-3/component3/component3.component';
import { ChildComponent } from './scenario-3/component3/child/child.component';
import { ParentComponent } from './scenario-4/parent/parent.component';
import { GrandparentComponent } from './scenario-5/grandparent/grandparent.component';
import { Parent1Component } from './scenario-6/parent1/parent1.component';
import { Child_1Component } from './scenario-6/parent1/child_1.component';
import { Child_2Component } from './scenario-6/parent1/child_2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    ChildComponent,
    ParentComponent,
    Child1Component,
    GrandparentComponent,
    CChildComponent,
    PParentComponent,
    Parent1Component,
    Child_1Component,
    Child_2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
