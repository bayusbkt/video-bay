import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { YouTubeSearchResult } from "@/types/response";
import Image from "next/image";
import Link from "next/link";

interface VideoItemProps {
  video: YouTubeSearchResult;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <Card>
      <Link href={`/videos/${video.id.videoId}`}>
        <CardContent>
          <Image
            width={500}
            height={500}
            alt=""
            src={video.snippet.thumbnails.medium.url}
          />
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-lg">{video.snippet.title}</h2>
            <h5 className="font-bold text-sm text-slate-400">
              {video.snippet.channelTitle}
            </h5>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default VideoItem;
