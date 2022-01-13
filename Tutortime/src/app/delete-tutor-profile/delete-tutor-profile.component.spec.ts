import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTutorProfileComponent } from './delete-tutor-profile.component';

describe('DeleteTutorProfileComponent', () => {
  let component: DeleteTutorProfileComponent;
  let fixture: ComponentFixture<DeleteTutorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTutorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTutorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
