import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTutorCoursesComponent } from './edit-tutor-courses.component';

describe('EditTutorCoursesComponent', () => {
  let component: EditTutorCoursesComponent;
  let fixture: ComponentFixture<EditTutorCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTutorCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTutorCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
