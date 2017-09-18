import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotLableComponent } from './hot-lable.component';

describe('HotLableComponent', () => {
  let component: HotLableComponent;
  let fixture: ComponentFixture<HotLableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotLableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
