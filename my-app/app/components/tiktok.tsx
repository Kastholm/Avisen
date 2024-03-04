import { TikTokEmbed } from "react-social-media-embed";

//import YouTubePlayer from 'react-player/youtube'

export function TikTokPreview(props: { title: string }) {
  const { title: url } = props;

  return (
    <div>
      {typeof url === "string" ? (
        <div>
          {" "}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TikTokEmbed url={url} width={325} />
          </div>{" "}
        </div>
      ) : (
        <h1>Add a TikTok URL</h1>
      )}
    </div>
  );
}
