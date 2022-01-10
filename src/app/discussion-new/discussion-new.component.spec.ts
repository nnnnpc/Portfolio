import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionNewComponent } from './discussion-new.component';

describe('DiscussionNewComponent', () => {
  let component: DiscussionNewComponent;
  let fixture: ComponentFixture<DiscussionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
