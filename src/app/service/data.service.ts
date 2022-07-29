import { Injectable } from '@angular/core';
import data from '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  article = data;
  constructor() { }

  getAllArticle(){
    return this.article.data
  }

  getArticle(id: number){
    if(id < 0){
      return this.article.data[this.article.data.length + id]
    }
    return this.article.data[id]
  }

  getByCategory(category: string){
   let tab = this.article.data.filter(item => item.categorie === category)
  return tab
  }
}
