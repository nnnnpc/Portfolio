import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenInfoComponent } from './open-info.component';

describe('OpenInfoComponent', () => {
  let component: OpenInfoComponent;
  let fixture: ComponentFixture<OpenInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
