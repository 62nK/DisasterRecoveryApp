import { TestBed } from '@angular/core/testing';

import { TimecardService } from './timecard.service';

describe('TimecardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimecardService = TestBed.get(TimecardService);
    expect(service).toBeTruthy();
  });
});
