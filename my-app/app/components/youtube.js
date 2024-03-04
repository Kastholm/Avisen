// components/YouTubePlayer.js
import dynamic from "next/dynamic";

const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

const YouTubePlayer = ({ videoId }) => (
  <YouTube
    videoId={videoId}
    opts={{ height: "390", width: "640", playerVars: { autoplay: 1 } }}
  />
);

export default YouTubePlayer;
