import { TestBed, inject } from '@angular/core/testing';

import { ApuestasService } from './apuestas.service';

describe('ApuestasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApuestasService]
    });
  });

  it('should be created', inject([ApuestasService], (service: ApuestasService) => {
    expect(service).toBeTruthy();
  }));
});
