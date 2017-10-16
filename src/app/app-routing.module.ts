import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {AboutComponent} from './page/about/about.component';
import {ArticleDetailComponent} from './article/article-detail/article-detail.component';
import {PageNotFoundComponent} from './page/page-not-found/page-not-found.component';
import {RegisterAndLoginComponent} from './enter/register-and-login/register-and-login.component';
import {RegisterComponent} from './enter/register/register.component';
import {LoginComponent} from './enter/login/login.component';
import {ArticleCreateComponent} from './article/article-create/article-create.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "article/:id", component: ArticleDetailComponent},
    {path: "article/create/:user_id", component: ArticleCreateComponent},
    {
        path: "enter", component: RegisterAndLoginComponent,
        children: [
            {path: 'register', component: RegisterComponent},
            {path: 'login', component: LoginComponent}
        ]
    },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
