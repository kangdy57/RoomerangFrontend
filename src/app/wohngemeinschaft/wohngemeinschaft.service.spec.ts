import { TestBed } from '@angular/core/testing';

import { WohngemeinschaftService } from './wohngemeinschaft.service';

describe('WohngemeinschaftService', () => {
  let service: WohngemeinschaftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WohngemeinschaftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
