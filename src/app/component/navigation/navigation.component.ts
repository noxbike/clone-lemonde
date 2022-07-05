import { Component, OnInit } from '@angular/core';
import navigation from './navigation.json';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigations = navigation.navigation;
  constructor() { }

  ngOnInit(): void {
    
  }

}
