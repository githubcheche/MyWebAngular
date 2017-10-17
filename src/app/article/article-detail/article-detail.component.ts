import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Article} from '../../model/article.model';
import {ArticleService} from '../../shared/article.service';

@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

    private id: number;
    private article: Article;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private articleService: ArticleService,
                private el: ElementRef) {
    }

    ngOnInit() {
        scroll(0, 0);
        this.route.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.articleService.getArticle(this.id, (article) => {
                this.article = article;
                this.el.nativeElement.querySelector('#article').innerHTML = this.article.body;
                // console.log(this.article.body);
            });
        });
    }


}
