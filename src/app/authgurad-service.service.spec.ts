import { TestBed } from '@angular/core/testing';

import { AuthguradServiceService } from './authgurad-service.service';

describe('AuthguradServiceService', () => {
  let service: AuthguradServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthguradServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
