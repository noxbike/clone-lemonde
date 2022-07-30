import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HeaderComponent } from './component/header/header.component';
import { DropdownNavComponent } from './component/dropdown-nav/dropdown-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeArticlesComponent } from './component/home-articles/home-articles.component';
import { MainArticleComponent } from './component/main-article/main-article.component';
import { HeadlineArticleComponent } from './component/headline-article/headline-article.component';
import { RunnerArticleComponent } from './component/runner-article/runner-article.component';
import { RiverArticleComponent } from './component/river-article/river-article.component';
import { FeaturedArticleComponent } from './component/featured-article/featured-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    DropdownNavComponent,
    HomeArticlesComponent,
    MainArticleComponent,
    HeadlineArticleComponent,
    RunnerArticleComponent,
    RiverArticleComponent,
    FeaturedArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
