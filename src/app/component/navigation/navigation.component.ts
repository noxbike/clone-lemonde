import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import navigation from './navigation.json';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigations = navigation.navigation;
  dropdown!: any;
  articles!: any;
  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
  }

  setDropdown(value: any): void {
    this.dropdown = value.haveScdNav ? value : null;
  }

  getFewArticle(categorie: string) {
    let result = this.ds.getByCategory(categorie)
    result.splice(1, result.length - 4)
    this.articles = result;
  }
}
