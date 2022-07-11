import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dropdown-nav',
  templateUrl: './dropdown-nav.component.html',
  styleUrls: ['./dropdown-nav.component.scss']
})
export class DropdownNavComponent implements OnInit {
  @Input() dropdown!:any;
  @Input() articles!:any;
 
  constructor() { }

  ngOnInit(): void {
  }
 
}
