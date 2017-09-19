import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article:ArticleCard;

  constructor(

  ) { }

  ngOnInit() {

    
  }

}


export class ArticleCard {
  constructor(
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