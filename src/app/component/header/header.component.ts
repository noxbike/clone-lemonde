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
    this.imageSrc = 'https://www.mucem.org/sites/default/files/2018-11/image_logo_partenaire_le_monde_web.png';
    this.imageAlt = 'logo';
    this.journalAlt = 'logo-jounal';
    this.journalLogo= 'https://ge-vendee-littorale.fr/wp-content/uploads/2019/03/Presse.png';
  }

}
