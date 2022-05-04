import {TestBed} from '@angular/core/testing';

import {WebComponentFactoryService} from './web-component-factory.service';

describe('WebComponentFactoryService', () => {
  let service: WebComponentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebComponentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
