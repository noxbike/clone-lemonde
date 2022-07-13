import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeArticlesComponent } from './component/home-articles/home-articles.component';

const routes: Routes = [
  {path:'', component: HomeArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
