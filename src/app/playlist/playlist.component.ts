import { Component, OnInit } from '@angular/core';
import { Playlist, PLAYLISTS } from '../music-list';
import { MusicQueueService } from '../music-queue.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = PLAYLISTS;
  constructor(private musicService: MusicQueueService) { }

  ngOnInit(): void {
  }

  playPlaylist(playlist: Playlist): void{
    this.musicService.playPlaylist(playlist);
  }
}
