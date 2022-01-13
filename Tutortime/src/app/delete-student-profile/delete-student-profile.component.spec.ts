import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentProfileComponent } from './delete-student-profile.component';

describe('DeleteStudentProfileComponent', () => {
  let component: DeleteStudentProfileComponent;
  let fixture: ComponentFixture<DeleteStudentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStudentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
