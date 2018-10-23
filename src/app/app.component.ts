import { Component } from '@angular/core';
import { Component1Component } from './scenario-1/scenario-1/component1/component1.component';
import { Component2Component } from './scenario-2/component2/component2.component';
import { Component3Component } from './scenario-3/component3/component3.component';
import { ChildComponent } from './scenario-3/component3/child/child.component';
import { Child1Component } from './scenario-4/parent/child1.component';
import { ParentComponent } from './scenario-4/parent/parent.component';
import { GrandparentComponent } from './scenario-5/grandparent/grandparent.component';
import { CChildComponent } from './scenario-5/grandparent/cchild.component';
import { PParentComponent } from './scenario-5/grandparent/pparent.component';
import { Parent1Component } from './scenario-6/parent1/parent1.component';
import { Child_1Component } from './scenario-6/parent1/child_1.component';
import { Child_2Component } from './scenario-6/parent1/child_2.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasks';
}
