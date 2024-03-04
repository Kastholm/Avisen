import Image from "next/image";
import { client, urlFor } from "../../../../../lib/sanity";
import { Article } from "../../../../../models/article";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import Script from "next/script";

export default async function articleView({
  params,
}: {
  params: { article: string };
}) {
  async function getData() {
    const query = `
    *[
      (_type == "sundhed" || _type == "indland" || _type == "udland")
      && slug.current == "${params.article}"
    ] 
    | order(_createdAt desc) {
      _id,
      _createdAt,
      _type,
        title,
        overview,
        "teaser": teaser[].children[].text,
        image,
        "tagNames": tags[]->name,
        "JournalistName": journalist->name,
        "JournalistPhoto": journalist->image,
        "JournalistSlug": journalist->slug.current,
        
    }`;
    const data = await client.fetch(query);
    console.log(data);
    return data;
  }

  console.log(params.article);

  const data: Article[] = await getData();

  // Barebones lazy-loaded image component
  const SampleImageComponent = ({ value, isInline }: any) => (
    <img
      src={urlFor()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{ display: isInline ? "inline-block" : "block" }}
    />
  );
  const SampleYoutubeComponent = ({ value }) => {
    // Ekstraher videoID fra YouTube URL'en
    let videoId = "";
    const url = new URL(value.url);
    const pathname = url.pathname;
    const searchParams = url.searchParams;

    // Tjek om URL'en er en kort URL eller en standard YouTube-video URL
    if (pathname.includes("/shorts/")) {
      videoId = pathname.split("/shorts/")[1];
    } else if (searchParams.has("v")) {
      videoId = searchParams.get("v");
    } else {
      // Hvis URL'en er i et andet format, skal der måske tilføjes yderligere logik
      console.error("YouTube URL format ikke genkendt:", value.url);
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  const SampleTikTokComponent = ({ value }) => {
    // URL'en til TikTok-videoen
    const tikTokUrl = value.url;

    return (
      <blockquote
        className="tiktok-embed"
        cite={tikTokUrl}
        data-video-id={tikTokUrl.split("/").pop()}
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section></section>
      </blockquote>
    );
  };

  const SampleFacebookComponent = ({ value }) => {
    // Erstat 'YOUR_URL' med din Facebook embed URL
    const embedUrl = value.url.replace("fb.watch", "www.facebook.com/watch");
  
    return (
      <iframe
        src={embedUrl}
        width="560"
        height="315"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen={true}
      ></iframe>
    );
  };
  

  const SampleInstagramComponent = ({ value }) => {
    return (
      <a href={value.url} target="_blank" rel="noopener noreferrer">
        Se dette indlæg på Instagram
      </a>
    );
  };

  const components = {
    types: {
      image: SampleImageComponent,
      youTube: SampleYoutubeComponent,
      tikTok: SampleTikTokComponent,
      faceBook: SampleFacebookComponent,
      instagram: SampleInstagramComponent,
    },
  };

  return (
    <div className=" px-10 mt-4">
      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="afterInteractive"
      />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto ">
          <h1 className="text-4xl font-bold text-center text-gray-300 mx-auto rounded-lg ">
            Læser nu: {params.article}
          </h1>

          <p className="text-center mx-auto mt-4 text-gray-300  rounded-lg ">
            Bragt direkte til dig
          </p>
          {/* <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p> */}

          <div className="grid-cols-1">
            {data.map((article) => (
              <div className="w-full  rounded-lg ">
                {/* <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div> */}
                <h1 className="text-6xl mb-12">{article.title}</h1>
                <div className="p-4">
                  <p className=" text-4xl mb-12 rounded-lg ">
                    Klokken:{" "}
                    {new Date(article._createdAt).toLocaleString("da-DK", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <div className="grid grid-cols-4">
                    <Link href={`/pages/articles/category/${article._type}`}>
                      Kategori
                      <button className="bg-indigo-600 p-2 my-2 font-bold text-lg rounded-lg dark:bg-indigo-500">
                        {article._type}
                      </button>
                    </Link>
                    {article.tagNames.map((tag) => (
                      <Link href={`/pages/articles/tag/${tag}`}>
                        Tag
                        <button
                          key={tag}
                          className="bg-orange-700 font-bold text-lg  p-2 my-2 mr-2  rounded-lg"
                        >
                          {tag}
                        </button>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`/pages/articles/journalist/${article.JournalistSlug}`}
                  >
                    <div className="flex items-center space-x-2 p-2 mt-2 border-t-2 border-gray-600">
                      <Image
                        className="w-10 h-10 object-cover object-center rounded-full"
                        src={urlFor(article.JournalistPhoto).url()}
                        alt=""
                        width={100}
                        height={100}
                      />
                      <div>
                        <p className="text-gray-400 font-semibold">
                          {article.JournalistName}
                        </p>
                        <p className="text-gray-300 font-semibold text-sm">
                          Feb 24,2021 &middot; 6 min read
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <Image
                  className="w-full bg-gray-300 rounded-t-lg dark:bg-gray-600"
                  src={urlFor(article.image).url()}
                  alt=""
                  width={500}
                  height={500}
                />
                <h1 className="text-4xl mt-4">{article.teaser}</h1>

                <div className="prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary">
                  <PortableText
                    value={article.overview}
                    components={components}
                  />
                </div>
                {/* <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                  {article.overview.map((overview) => (
                    <p className="text-xl mt-1">{overview}</p>
                    ))}
                  </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
