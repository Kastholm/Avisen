import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import { Article } from "../models/article";
import Link from "next/link";

async function getData() {
  const query = `
  *[
    _type == "sundhed" 
    || 
    _type == "indland"
  ] 
  | order(_createdAt desc) {
    _id,
    _createdAt,
    _type,
      title,
      image,
      "tagNames": tags[]->name,
      "JournalistName": journalist->name,
      "JournalistPhoto": journalist->image,
      "JournalistSlug": journalist->slug.current
  }`;
  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: Article[] = await getData();

  console.log(data);
  return (
    <div className="container mx-auto px-4 my-6">
      <h1 className="text-5xl mb-6">Forside</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((article) => (
          <div key={article._id} className="bg-white p-6">
            <Link href={`/pages/articles/journalist/${article.JournalistSlug}`}>
              <div className="grid grid-cols-2 mb-14">
                <Image
                  className="object-contain"
                  src={urlFor(article.JournalistPhoto).url()}
                  alt=""
                  width={100}
                  height={100}
                />
                <h3 className="text-black font-bold text-2xl">
                  Skrevet af {article.JournalistName} <br></br>
                  <b className=" text-lg text-red-800 ">
                    Den :{" "}
                    {new Date(article._createdAt).toLocaleString("da-DK", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </b>
                  <br></br>
                  <b className=" text-lg text-red-800 ">
                    Klokken:{" "}
                    {new Date(article._createdAt).toLocaleString("da-DK", {
                      
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </b>
                </h3>
              </div>
            </Link>
            <Image
              className="object-contain"
              src={urlFor(article.image).url()}
              alt=""
              width={500}
              height={500}
            />
            <h2 className="text-2xl text-black mt-4">{article.title}</h2>
            <h3 className="mt-4 text-black font-bold text-2xl">Kategori:</h3>
            <Link href={`/pages/articles/category/${article._type}`}><button className="bg-blue-600 p-4 mt-6">{article._type}</button></Link>
            <h3 className="mt-8 text-black font-bold text-2xl">Tags:</h3>
            <div className="mt-4">
              {article.tagNames.map((tag) => (
                <Link href={`/pages/articles/tag/${tag}`}>
                  <button key={tag} className="bg-orange-700 p-2 mr-2">
                    {tag}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
