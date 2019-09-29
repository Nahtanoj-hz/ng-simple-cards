import { TestBed } from '@angular/core/testing';

import { NgCardsService } from './ng-cards.service';

describe('NgCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCardsService = TestBed.get(NgCardsService);
    expect(service).toBeTruthy();
  });
});
