import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-runner-article',
  templateUrl: './runner-article.component.html',
  styleUrls: ['./runner-article.component.scss']
})
export class RunnerArticleComponent implements OnInit {
  runner!: any;
  constructor(
    private ds:DataService
  ) { }

  ngOnInit(): void {
    this.getThreeArticles();
  }

  getThreeArticles(): void {
    let articles = []
    for(let i = -1; i > -4; i--){
      articles.push(this.ds.getArticle(i))
    }
    this.runner = articles
  }
}
