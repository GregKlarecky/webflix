export interface Video {
  snippet: VideoSnippet;
  statistics: Statistics;
}

export interface VideoResponse {
  items: Video[];
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface VideoSnippet {
  title: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
