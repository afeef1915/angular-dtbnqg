import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { HomeComponentComponent } from '../home-component/home-component.component';

@Component({
  selector: 'app-b-component',
  templateUrl: './b-component.component.html',
  styleUrls: ['./b-component.component.css']
})
export class BComponentComponent implements OnInit {
  @Input() somethingTestB;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  getParentComponent(): HomeComponentComponent{

       console.log(this.viewContainerRef);
       
        return this.viewContainerRef[ '_data' ].componentView.component.viewContainerRef[ '_view' ].component.viewContainerRef[ '_data' ].componentView.component.viewContainerRef[ '_view' ].component
    }

  testClick() {        
    console.log(this.getParentComponent());
    this.getParentComponent().testHome = 'Its Sara..!';
  }
}