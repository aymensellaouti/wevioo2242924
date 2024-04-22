import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { listCvsResolver } from './list-cvs.resolver';

describe('listCvsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => listCvsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
