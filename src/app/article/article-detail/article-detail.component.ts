import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
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
                private articleService: ArticleService) {
    }

    ngOnInit() {
        scroll(0, 0);
        this.route.paramMap
            .switchMap((params: ParamMap) =>
                params.get('id')).subscribe((id: string) => {
            this.id = 12;

            this.articleService.getArticle(this.id, (article) => {
                this.article = article;
            });
        });

    }

}
