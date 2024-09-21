import { SearchInput } from "@/components/SearchInput";
import VideoList from "@/components/videos/VideoList";
import { YouTubeSearchResponse } from "@/types/response";

const VideosPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const fetchVideos = async (query: string) => {
    const url = new URL(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}`
    );

    url.searchParams.set("maxResults", "100");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("type", "video");

    try {
      const videos = await fetch(url);
      return videos.json();
    } catch (error) {
      console.error(error);
    }
  };

  const videos: YouTubeSearchResponse = await fetchVideos(searchParams.v);

  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="flex justify-center mb-8">
        <SearchInput />
      </div>
      <div>
        <VideoList videos={videos} />
      </div>
    </div>
  );
};

export default VideosPage;
