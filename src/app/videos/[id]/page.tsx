
import { YoutubeVideoResponse } from "@/types/response";
import type { Metadata } from "next";
import React from "react";

export async function generateMetadata(
  { params }: {params: {id: string}},

): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const video = await fetchVideo(id)
 
  return {
    title: video.items[0].snippet.title,
  }
}

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const fetchVideo = async (id: string) => {
  const url = new URL(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}`
  );

  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const video = await fetch(url);
    return video.json();
  } catch (error) {
    console.error(error);
  }
};


const VideoDetailPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  
  const videoSrc = `https://www.youtube.com/embed/${params.id}`;

  const video: YoutubeVideoResponse = await fetchVideo(params.id);

  return (
    <div className="px-8 grid grid-cols-10 gap-4">
      <div className="col-span-7">
        <div className="w-[100%] mb-4">
          <iframe src={videoSrc} className="w-[100%] h-[30rem]"></iframe>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">{video.items[0].snippet.title}</h2>
          <h5 className="font-bold text-sm">
            {video.items[0].snippet.channelTitle}
          </h5>
          <p className="text-md text-slate-400">
            {video.items[0].snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;
