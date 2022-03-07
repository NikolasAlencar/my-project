import { TestBed } from '@angular/core/testing';

import { TelaInicioService } from './tela-inicio.service';

describe('TelaInicioService', () => {
  let service: TelaInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelaInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
