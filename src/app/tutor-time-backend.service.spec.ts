import { TestBed } from '@angular/core/testing';

import { TutorTimeBackendService } from './tutor-time-backend.service';

describe('TutorTimeBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorTimeBackendService = TestBed.get(TutorTimeBackendService);
    expect(service).toBeTruthy();
  });
});
