import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() starNum: number;
  @Input() isReadOnly: boolean = true;
  private stars: boolean[] = [];


  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 6; i++)
      this.stars[i - 1] = (i > this.starNum);
  }


  onSelect(i: number) {
    if (!this.isReadOnly) {
      this.starNum = i + 1;
      this.ngOnInit();
    }
  }
}

