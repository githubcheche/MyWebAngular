import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { StarsComponent } from './utils/stars/stars.component';
import { HotArticleComponent } from './hot-article/hot-article.component';
import { HotLableComponent } from './hot-lable/hot-lable.component';
import { MottoCardComponent } from './motto-card/motto-card.component';
import { ArticleCardComponent } from './article/article-card/article-card.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorCardComponent } from './author-card/author-card.component';
import { ArticleService } from './shared/article.service';
import { RegisterAndLoginComponent } from './enter/register-and-login/register-and-login.component';
import { RegisterComponent } from './enter/register/register.component';
import { LoginComponent } from './enter/login/login.component';
import { CommentComponent } from './article/comment/comment.component';
import { CommentService } from './shared/comment.service';


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
    ArticleListComponent,
    HomeComponent,
    AboutComponent,
    ArticleDetailComponent,
    PageNotFoundComponent,
    AuthorCardComponent,
    RegisterAndLoginComponent,
    RegisterComponent,
    LoginComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ArticleService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
