import { TestBed } from '@angular/core/testing';

import { EncrypthelperService } from './encrypthelper.service';

describe('EncrypthelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncrypthelperService = TestBed.get(EncrypthelperService);
    expect(service).toBeTruthy();
  });
});
