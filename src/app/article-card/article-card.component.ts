import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article:ArticleCard;

  constructor(
     private router:Router 
  ) { }

  ngOnInit() {

    
  }

  goToAticleDetail() {
    this.router.navigate(['/article', this.article.id]);
  }

}


export class ArticleCard {
  constructor(
    public id:number,
    private title: string,
    private author: string,
    private time: string,
    private content: string,
    private lable: string,
    private checkNumber: number,
    private replies: number,
    private importance:number
  ) { }
}