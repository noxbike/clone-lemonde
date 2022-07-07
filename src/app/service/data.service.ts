import { Injectable } from '@angular/core';
import data from '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  article = data;
  constructor() { }

  getArticle(){
    return this.article
  }

  getByCategory(category: string){
   let tab = this.article.data.filter(item => item.categorie === category)
  return tab
  }
}
