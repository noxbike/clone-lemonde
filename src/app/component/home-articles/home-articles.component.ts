import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['./home-articles.component.scss']
})
export class HomeArticlesComponent implements OnInit {
  articles!: any;
  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
    this.articles = this.ds.getArticle();
    console.log(this.articles)
  }

}
