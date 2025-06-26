import { TestBed } from '@angular/core/testing';

import { CounterActionsTsService } from './counter.actions.ts.service';

describe('CounterActionsTsService', () => {
  let service: CounterActionsTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterActionsTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
