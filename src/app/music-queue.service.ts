import { Injectable } from '@angular/core';
import { Music } from './music-list';
import { fromEvent, Observable } from 'rxjs';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class MusicQueueService {
  queue: Music[]=[];
  stop$?: Observable<any>;
  currentSong?: Music;
  videoTag?: HTMLVideoElement;
  constructor() {
  }

  ngOnInit() {
  }

  addSong(url: string): void{
    const rExp: RegExp = /\w+(?=\.mp4)/;
    var titleExtracted = rExp.exec(url)![0];
    let song = { title: titleExtracted, url: url||'' };
    this.queue.push(song);
  }

  nextSong(): void{
    this.videoTag = document.getElementById('video') as HTMLVideoElement;
    this.stop$ = fromEvent(this.videoTag!, 'ended');
    var subscription = this.stop$.subscribe({
      next: (x) => {
        console.log('ended');
        if(!this.queueIsEmpty())
          this.play();
      }
    })

  }

  getQueue(): Music[]{
    return this.queue;
  }

  isPlaying(): any{
    return this.videoTag!.src;
  }

  queueIsEmpty(): any{
    return (this.queue.length == 0) ? true : false;
  }

  cleanPlayer(): void{
    this.videoTag!.src = '';
  }

  play(): void{
    let app = document.getElementById('main');
    this.currentSong = this.queue.shift();
    if (typeof (this.currentSong) == undefined)
      this.videoTag!.src = '';
    else
      this.videoTag!.src = this.currentSong!.url;
    this.videoTag?.play();
  }
}
