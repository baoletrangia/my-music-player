export interface Song {
  title: string;
  url: string;
}

export interface Playlist {
  playlistTitle: string;
  songs: Song[];
}
export var PLAYLISTS: Playlist[] = [
  {
    playlistTitle: 'chill',
    songs: [
      {
        title: 'Sintel',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
    ],
  },
  {
    playlistTitle: 'workout',
    songs: [
      {
        title: 'elephant dream',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      {
        title: 'For bigger blaze',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
    ],
  },
  {
    playlistTitle: 'later',
    songs: [
      {
        title: 'elephant dream',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      {
        title: 'For bigger blaze',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
    ],
  },
];
