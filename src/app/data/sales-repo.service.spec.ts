import { TestBed, inject } from '@angular/core/testing';

import { SalesRepoService } from './sales-repo.service';

describe('SalesRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesRepoService]
    });
  });

  it('should be created', inject([SalesRepoService], (service: SalesRepoService) => {
    expect(service).toBeTruthy();
  }));
});
