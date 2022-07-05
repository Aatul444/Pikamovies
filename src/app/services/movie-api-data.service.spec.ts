import { TestBed } from '@angular/core/testing';

import { MovieApiDataService } from './movie-api-data.service';

describe('MovieApiDataService', () => {
  let service: MovieApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
