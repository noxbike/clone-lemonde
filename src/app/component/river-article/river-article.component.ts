import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-river-article',
  templateUrl: './river-article.component.html',
  styleUrls: ['./river-article.component.scss']
})
export class RiverArticleComponent implements OnInit {
  river!: any;
  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
    this.getOtherArticle()
  }
  getOtherArticle(){
    let articles = []
    for(let i = 3; i < 15; i++){
      articles.push(this.ds.getArticle(Math.floor(Math.random() * 99)))
    }
    this.river = articles
  }
}
