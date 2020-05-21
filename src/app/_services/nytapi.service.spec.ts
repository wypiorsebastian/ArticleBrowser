import { TestBed } from '@angular/core/testing';

import { NytapiService } from './nytapi.service';

describe('NytapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NytapiService = TestBed.get(NytapiService);
    expect(service).toBeTruthy();
  });
});
