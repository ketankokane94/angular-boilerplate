import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  describe('getHeaders',()=>{
    it('should return a not null list of urls',inject([AppService],(service:AppService)=>{
        let result = service.getHeaderUrl();
        expect(result).toBeDefined();
        expect(result.length).toBe(3);
    }));
  });
});


