import { TestBed } from '@angular/core/testing';

import { MusicQueueService } from './music-queue.service';

describe('MusicQueueService', () => {
  let service: MusicQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
