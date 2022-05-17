import { Component, OnInit } from '@angular/core';
import { MusicQueueService } from '../music-queue.service';
import { Song } from '../music-list';
import { fromEvent, Observable } from 'rxjs';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  currentSong?: Song;
  currentQueue?: Song[];
  videoTag!: HTMLVideoElement;
  stop$?: Observable<any>;

  constructor(private musicService: MusicQueueService) {}

  ngOnInit(): void {
    this.getVideoTag();
    this.nextSong();
    this.currentQueue = this.musicService.getQueue();
  }

  getVideoTag() {
    this.videoTag = document.getElementById('video') as HTMLVideoElement;
  }

  nextSong(): void {
    //this.videoTag = document.getElementById('video') as HTMLVideoElement;
    this.stop$ = fromEvent(this.videoTag, 'ended');
    var subscription = this.stop$.subscribe({
      next: (x) => {
        this.cleanPlayer();
        if (!this.musicService.queueIsEmpty()) this.play();
      },
    });
  }

  play(): void {
    this.currentSong = this.currentQueue!.shift();
    this.videoTag.src = this.currentSong!.url;
    this.videoTag.play();
  }

  cleanPlayer(): void {
    this.videoTag.src = '';
  }

  clearQueue(): void {
    this.musicService.clearQueue();
    this.currentQueue = this.musicService.getQueue();
  }

  addSong(): void {
    let input = document.getElementById('url') as HTMLInputElement;
    let inputUrl = input.value;
    input.value = '';
    this.musicService.addSong(inputUrl);
  }

  isPlaying(): boolean {
    return !!this.videoTag.src;
  }
}
