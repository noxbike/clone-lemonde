import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-nav',
  templateUrl: './dropdown-nav.component.html',
  styleUrls: ['./dropdown-nav.component.scss']
})
export class DropdownNavComponent implements OnInit {
  @Input() dropdown!:any;
  @Input() articles!:any;
  @Output() disableActive = new EventEmitter();
  logoarticle: any = "../../../assets/logoarticle.svg";
  
  constructor() { }

  ngOnInit(): void {
  }

  closeDropdown(){
    this.disableActive.emit()
  }
}
