import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  private pages:CarouselPage[] = [];

  constructor() { }

  ngOnInit() {
    this.pages.push(new CarouselPage("../../assets/img_instrument.jpg",true));
    this.pages.push(new CarouselPage("../../assets/img_shanghai.png",false));
    this.pages.push(new CarouselPage("../../assets/img_smart_community.png",false));
  }

}

export class CarouselPage{
  private url:string;
  private active:boolean;

  constructor(url:string, isActive:boolean) {
    this.url =url;
    this.active = isActive;
  }
}
