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
  currentSong: Music|undefined;
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
    let videoTag = document.getElementsByTagName('video');
    this.stop$ = fromEvent(videoTag, 'ended');
    console.log(this.stop$);
    this.stop$.subscribe(() => {
      console.log('sth stop');
    })
  }

  getQueue(): Music[]{
    return this.queue;
  }

  play(): void{
    let app = document.getElementById('main');
    let videoTag = document.createElement('video');
    videoTag.setAttribute('controls', 'true');
    videoTag.setAttribute('autoplay', 'true');
    this.currentSong = this.queue.shift();
    if (typeof (this.currentSong) == undefined)
      videoTag.src = '';
    else
      videoTag.src = this.currentSong!.url;
    app?.appendChild(videoTag);
  }
}
