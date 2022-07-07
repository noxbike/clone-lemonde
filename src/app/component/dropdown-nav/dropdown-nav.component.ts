import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dropdown-nav',
  templateUrl: './dropdown-nav.component.html',
  styleUrls: ['./dropdown-nav.component.scss']
})
export class DropdownNavComponent implements OnInit {
  @Input() dropdown!:any;
  articles!: any;
  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
    console.log()
  }
  getFewArticle() {
    this.articles = this.ds.getByCategory(this.dropdown)
    console.log("click")
  }
}
