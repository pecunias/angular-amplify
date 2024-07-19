import { TestBed } from '@angular/core/testing';

import { ComponentMappingService } from './component-mapping.service';

describe('ComponentMappingService', () => {
  let service: ComponentMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
