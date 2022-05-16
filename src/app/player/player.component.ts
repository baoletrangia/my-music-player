import { Component, OnInit } from '@angular/core';
import { MusicQueueService } from '../music-queue.service';
import { Music } from '../music-list';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  currentSong!: Music;
  currentQueue?: Music[]

  constructor(private musicService: MusicQueueService) {}

  ngOnInit(): void {
    this.musicService.nextSong();
    this.currentQueue = this.musicService.getQueue();
  }

  addSong(): void{
    let input = document.getElementById('url') as HTMLInputElement;
    let inputUrl = input.value;
    input.value = '';
    this.musicService.addSong(inputUrl);
  }


}
