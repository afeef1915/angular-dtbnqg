import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  @Input() testHome: string;
  constructor() { }

  ngOnInit() {
    this.testHome = '';
  }

}
