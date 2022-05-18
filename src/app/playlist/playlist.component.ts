import { Component, OnInit } from '@angular/core';
import { Playlist } from '../music-list';
import { MusicQueueService } from '../music-queue.service';
import { PLAYLISTS } from '../music-list';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = PLAYLISTS;
  constructor(private musicService: MusicQueueService) {}

  ngOnInit(): void {}

  addPlaylistToQueue(playlist: Playlist): void {
    this.musicService.addPlaylist(playlist);
  }

  deletePlaylist(playlist: Playlist): void {
    let index = this.playlists.indexOf(playlist);
    this.playlists.splice(index, 1);
  }

  addNewPlaylist(): void {
    let newPlaylist: Playlist = { playlistTitle: '', songs: [] };
    this.playlists.push(newPlaylist);
  }
}
