import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { HomeComponentComponent } from '../home-component/home-component.component';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css']
})
export class AComponentComponent implements OnInit {

  @Input() somethingTestA;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    
  }
  getParentComponent(): HomeComponentComponent{
      console.log(this.viewContainerRef);
        return this.viewContainerRef[ '_data' ].componentView.component.viewContainerRef[ '_view' ].component
    }

  testClick() {
    this.getParentComponent().testHome = 'Its Jim..!';
  }
}
