import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-main-article',
  templateUrl: './main-article.component.html',
  styleUrls: ['./main-article.component.scss']
})
export class MainArticleComponent implements OnInit {
  data!: any;
  constructor(
    private ds:DataService,
  ) { }

  ngOnInit(): void {
    this.getThreeLastArticles();
  }

  getThreeLastArticles(): void {
    let articles = []
    for(let i = -1; i > -4; i--){
      articles.push(this.ds.getArticle(i))
    }
    this.data = articles
  }

}
