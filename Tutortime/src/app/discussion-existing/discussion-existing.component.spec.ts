import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionExistingComponent } from './discussion-existing.component';

describe('DiscussionExistingComponent', () => {
  let component: DiscussionExistingComponent;
  let fixture: ComponentFixture<DiscussionExistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionExistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
