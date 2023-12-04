'use client';

import YouTube from 'react-youtube';

export default function YouTubePlayer({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <YouTube videoId={id} opts={opts} iframeClassName="w-10/12" title="title" />
  );
}
