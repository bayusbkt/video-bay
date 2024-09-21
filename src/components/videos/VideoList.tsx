import React from "react";
import VideoItem from "./VideoItem";
import { VideoListProps, YouTubeSearchResult } from "@/types/response";

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {videos.items.map((video: YouTubeSearchResult) => {
        return <VideoItem key={video.id.videoId} video={video} />;
      })}
    </div>
  );
};

export default VideoList;
