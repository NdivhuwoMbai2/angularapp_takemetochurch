import { TestBed } from '@angular/core/testing';

import { PersondataService } from './persondata.service';

describe('PersondataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersondataService = TestBed.get(PersondataService);
    expect(service).toBeTruthy();
  });
});
