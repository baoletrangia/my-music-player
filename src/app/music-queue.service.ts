import { Injectable } from '@angular/core';
import { Music, Playlist } from './music-list';
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
    if (!this.isPlaying()) {
      this.play();
    }

  }

  nextSong(): void{
    this.videoTag = document.getElementById('video') as HTMLVideoElement;
    this.stop$ = fromEvent(this.videoTag!, 'ended');
    var subscription = this.stop$.subscribe({
      next: (x) => {
        this.cleanPlayer();
        if (!this.queueIsEmpty())
          this.play();
      }
    })

  }

  getQueue(): Music[]{
    return this.queue;
  }

  isPlaying(): any{
    this.videoTag = document.getElementById('video') as HTMLVideoElement;
    return !!this.videoTag!.src;
  }

  queueIsEmpty(): any{
    return (this.queue.length == 0) ? true : false;
  }

  cleanPlayer(): void{
    this.videoTag = document.getElementById('video') as HTMLVideoElement;
    this.videoTag.removeAttribute('src');
  }

  play(): void{
    this.videoTag = document.getElementById('video') as HTMLVideoElement;
    this.currentSong = this.queue.shift();
    this.videoTag.src = this.currentSong!.url;
    this.videoTag?.play();
  }

  playPlaylist(playlist:Playlist): void{
    playlist.playlists.forEach((e) => {
      this.queue.push(e);
    })
    if (!this.isPlaying()) {
      this.play();
    }
  }
}
