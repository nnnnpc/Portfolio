import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutortimeComponent } from './tutortime.component';

describe('TutortimeComponent', () => {
  let component: TutortimeComponent;
  let fixture: ComponentFixture<TutortimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutortimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutortimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
