import { TestBed } from '@angular/core/testing';

import { JobCodeService } from './job-code.service';

describe('JobCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobCodeService = TestBed.get(JobCodeService);
    expect(service).toBeTruthy();
  });
});
