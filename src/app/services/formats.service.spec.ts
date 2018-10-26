import { TestBed, inject } from '@angular/core/testing';

import { FormatsService } from './formats.service';

describe('FormatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatsService]
    });
  });

  it('should be created', inject([FormatsService], (service: FormatsService) => {
    expect(service).toBeTruthy();
  }));
});
