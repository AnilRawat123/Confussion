import { TestBed } from '@angular/core/testing';

import { CorporateLeaderService } from './corporate-leader.service';

describe('CorporateLeaderService', () => {
  let service: CorporateLeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporateLeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
