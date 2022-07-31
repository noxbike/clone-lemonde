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
  Active = 'Active';
  historiqueSrc!: string;
  body = document.getElementsByTagName('body')[0];
  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
    this.dropdown = null;
    this.articles = null;
    this.historiqueSrc = "../../../assets/historique.svg"
  }

  setDropdown(value: any): void {
    this.dropdown = value.haveScdNav ? value : null;
    this.articles = this.getFewArticle(value.name);
    this.body.style.overflow = 'hidden';
  }

  getFewArticle(categorie: string) {
    let result = this.ds.getByCategory(categorie)
    result.splice(1, result.length - 4 )
    return result ? result: null;
  }

  onCloseDropdown() {
    this.Active = 'inactive';
    this.articles = null;
    this.body.style.overflow = 'scroll';
    return this.dropdown = null;
  }
}
