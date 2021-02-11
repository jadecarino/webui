import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-results-side-navigation',
  templateUrl: './results-side-navigation.component.html',
  styleUrls: ['./results-side-navigation.component.scss']
})
export class ResultsSideNavigationComponent implements OnInit {

  isActive : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
  }

}
