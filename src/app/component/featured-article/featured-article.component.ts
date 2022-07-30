import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.scss']
})
export class FeaturedArticleComponent implements OnInit {
  featured!: any;
  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
    this.getFeaturedArticles();
  }

  getFeaturedArticles(): void {
    this.featured = this.ds.getArticle(-1)
  }
}
