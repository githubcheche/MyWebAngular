import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MottoCardComponent } from './motto-card.component';

describe('MottoCardComponent', () => {
  let component: MottoCardComponent;
  let fixture: ComponentFixture<MottoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MottoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MottoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
