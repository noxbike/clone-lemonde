import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-headline-article',
  templateUrl: './headline-article.component.html',
  styleUrls: ['./headline-article.component.scss']
})
export class HeadlineArticleComponent implements OnInit {
  headline!: any;
  constructor(
    private ds:DataService,
  ) { }

  ngOnInit(): void {
    this.getHeadline();
  }

  getHeadline(){
    let articles = []
    for(let i = 0; i < 2; i++){
      articles.push(this.ds.getArticle(Math.floor(Math.random() * 99)))
    }
    this.headline = articles
  }
}
