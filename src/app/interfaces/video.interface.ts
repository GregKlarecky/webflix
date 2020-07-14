export interface Video {
  id: string;
  favourite?: boolean;
  timestamp?: number;
  snippet: VideoSnippet;
  statistics: Statistics;
}

export interface VideoResponse {
  items: Video[];
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface VideoSnippet {
  title: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
