import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './stars/stars.component';
import { HotArticleComponent } from './hot-article/hot-article.component';
import { HotLableComponent } from './hot-lable/hot-lable.component';
import { MottoCardComponent } from './motto-card/motto-card.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    StarsComponent,
    HotArticleComponent,
    HotLableComponent,
    MottoCardComponent,
    ArticleCardComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
