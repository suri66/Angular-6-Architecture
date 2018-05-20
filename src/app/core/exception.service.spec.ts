import { TestBed, inject } from '@angular/core/testing';

import { ExceptionService } from './exception.service';

describe('ExceptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExceptionService]
    });
  });

  it('should be created', inject([ExceptionService], (service: ExceptionService) => {
    expect(service).toBeTruthy();
  }));
});
