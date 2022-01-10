import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorsettingComponent } from './tutorsetting.component';

describe('TutorsettingComponent', () => {
  let component: TutorsettingComponent;
  let fixture: ComponentFixture<TutorsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
