import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song, PLAYLISTS, Playlist } from '../music-list';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.css'],
})
export class PlaylistDetailsComponent implements OnInit {
  songs?: Song[];
  playlists: Playlist[] = PLAYLISTS;
  playlistTitle?: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPlaylistSongs();
  }

  getPlaylistSongs(): void {
    this.playlistTitle = this.route.snapshot.paramMap.get('playlistTitle')!;
    this.songs = this.playlists.find(
      (playlist) => playlist.playlistTitle == this.playlistTitle
    )?.songs;
  }

  deleteSong(songName: string): void {
    let index = this.songs!.findIndex((song) => song.title == songName);
    this.songs!.splice(index, 1);
  }

  addSong(): void {
    let newSong: Song = { title: '', url: '' };
    this.songs!.push(newSong);
  }
}
