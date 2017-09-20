import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private activeState:string;

  constructor() { }

  ngOnInit() {
  }

  onClick(eventName:string) {
    console.log(eventName);
    this.activeState=eventName;
  }

}
