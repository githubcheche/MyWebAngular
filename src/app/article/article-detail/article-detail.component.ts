import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap, Router } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  private id:number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) =>
      params.get('id')).subscribe((id: string) => this.id = +id);
      scroll(0,0);
  }

}
