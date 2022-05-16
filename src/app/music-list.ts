export interface Music{
  title: string;
  url: string;
}

export interface Playlist{
  playListTitle: string;
  playlists: Music[];
}
export var PLAYLISTS: Playlist[] = [
  {
    playListTitle: 'chill',
    playlists: [
      {
        title: 'elephant dream',
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      },
      {
        title: 'For bigger blaze',
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
      }
    ]
  },
  {
    playListTitle: 'workout',
    playlists: [
      {
        title: 'elephant dream',
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      },
      {
        title: 'For bigger blaze',
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
      }
    ]
  },
  {
    playListTitle: 'later',
    playlists: [
      {
        title: 'elephant dream',
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
      },
      {
        title: 'For bigger blaze',
        url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
      }
    ]
  }
 ]
