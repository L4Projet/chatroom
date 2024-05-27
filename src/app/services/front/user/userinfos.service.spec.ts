import { TestBed } from '@angular/core/testing';

import { UserinfosService } from './userinfos.service';

describe('UserinfosService', () => {
  let service: UserinfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
