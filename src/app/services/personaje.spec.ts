import { TestBed } from '@angular/core/testing';

import { PersonajeService } from './personaje';

describe('Personaje', () => {
  let service: PersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
