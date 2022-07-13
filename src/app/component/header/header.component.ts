import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageSrc!: string;
  imageAlt!: string;
  journalLogo!: string;
  journalAlt!: string;
  constructor() { }

  ngOnInit(): void {
    this.imageSrc = '../../../assets/lemonde.svg';
    this.imageAlt = 'logo';
    this.journalAlt = 'logo-jounal';
    this.journalLogo= 'https://ge-vendee-littorale.fr/wp-content/uploads/2019/03/Presse.png';
  }

}
