import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit ,OnChanges{

  @Input() starNum: number;
  @Input() isReadOnly: boolean = true;
  private stars: boolean[] = [];

  @Output() emitterNum = new EventEmitter<number>();


  constructor() { }

  ngOnChanges() {
    for (let i = 1; i < 6; i++)
      this.stars[i - 1] = (i > this.starNum);
  }

  ngOnInit() {
    
  }


  onSelect(i: number) {
    if (!this.isReadOnly) {
      this.starNum = i + 1;
      this.emitterNum.emit(this.starNum);
    }
  }
}

