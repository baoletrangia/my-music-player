import { Injectable } from '@angular/core';
import { Song, Playlist } from './music-list';
import { fromEvent, Observable } from 'rxjs';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root',
})
export class MusicQueueService {
  queue: Song[] = [];
  currentSong?: Song;
  videoTag: HTMLVideoElement = document.getElementById(
    'video'
  ) as HTMLVideoElement;
  constructor() {}

  ngOnInit() {}

  addSong(url: string): void {
    const rExp: RegExp = /\w+(?=\.mp4)/;
    var titleExtracted = rExp.exec(url)![0];
    let song = { title: titleExtracted, url: url || '' };
    this.queue.push(song);
  }

  getQueue(): Song[] {
    return this.queue;
  }

  queueIsEmpty(): boolean {
    return this.queue.length == 0 ? true : false;
  }

  addPlaylist(playlist: Playlist): void {
    playlist.songs.forEach((song) => {
      this.queue.push(song);
    });
  }

  clearQueue(): void {
    this.queue = [];
    console.log(this.queue);
  }
}
