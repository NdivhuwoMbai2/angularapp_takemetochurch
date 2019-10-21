import { TestBed } from '@angular/core/testing';

import { ChurchdataService } from './churchdata.service';

describe('ChurchdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChurchdataService = TestBed.get(ChurchdataService);
    expect(service).toBeTruthy();
  });
});
