import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {CarouselComponent} from './card/carousel/carousel.component';
import {StarsComponent} from './utils/stars/stars.component';
import {HotArticleComponent} from './card/hot-article/hot-article.component';
import {HotLableComponent} from './card/hot-lable/hot-lable.component';
import {MottoCardComponent} from './card/motto-card/motto-card.component';
import {ArticleCardComponent} from './article/article-card/article-card.component';
import {ArticleListComponent} from './article/article-list/article-list.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './page/home/home.component';
import {AboutComponent} from './page/about/about.component';
import {ArticleDetailComponent} from './article/article-detail/article-detail.component';
import {PageNotFoundComponent} from './page/page-not-found/page-not-found.component';
import {AuthorCardComponent} from './card/author-card/author-card.component';
import {ArticleService} from './shared/article.service';
import {RegisterAndLoginComponent} from './enter/register-and-login/register-and-login.component';
import {RegisterComponent} from './enter/register/register.component';
import {LoginComponent} from './enter/login/login.component';
import {CommentComponent} from './article/comment/comment.component';
import {CommentService} from './shared/comment.service';
import {HttpService} from './shared/http.service';
import {HttpModule} from '@angular/http';
import {UserService} from './shared/user.service';
import { ArticleCreateComponent } from './article/article-create/article-create.component';


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
        CommentComponent,
        ArticleCreateComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        HttpService,
        ArticleService,
        CommentService,
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
