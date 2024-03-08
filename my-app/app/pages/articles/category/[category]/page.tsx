import Image from "next/image";
import { client, urlFor } from "../../../../../lib/sanity";
import { Article } from "../../../../../models/article";
import Link from "next/link";
import { Metadata } from "next";
import LoadMore from "@/app/components/LoadMore";
import { fetchAnime } from "@/app/action";



export default async function categoryView({
  params,
}: {
  params: { category: string };
}) {
  async function getData() {
    const query = `
    *[
      _type == "${params.category}"
    ] 
    | order(_createdAt desc) {
      _id,
      _createdAt,
      _type,
        title,
        "articleSlug": slug.current,
        image,
        "tagNames": tags[]->name,
        "JournalistName": journalist->name,
        "JournalistPhoto": journalist->image,
        "JournalistSlug": journalist->slug.current
    }`;
    const data = await client.fetch(query);
    console.log(data);
    return data;
  }

  console.log(params.category);

  const data: Article[] = await getData();
  const anime = await fetchAnime(1);
  const metadata: Metadata = {
    title: 'test',
    description: 'test',
  }

  return (
    <div className=" px-10 mt-4">

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto ">
          <h1 className="text-4xl font-bold text-center text-gray-300 mx-auto rounded-lg ">Kategori: {params.category}</h1>

          <p className="text-center mx-auto mt-4 text-gray-300  rounded-lg ">Bragt direkte til dig</p>
          {/* <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p> */}

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {data.map((article) => (
              <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-lg ">
                {/* <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div> */}
                <Link href={`/pages/articles/article/${article.articleSlug}`}>
                  <Image
                    className="w-full bg-gray-300 rounded-t-lg dark:bg-gray-600"
                    src={urlFor(article.image).url()}
                    alt=""
                    width={500}
                    height={500}
                  />
                </Link>

                <div className="p-4">
                  <p className=" bg-gray-200 rounded-lg dark:bg-gray-700">
                    Klokken:{" "}
                    {new Date(article._createdAt).toLocaleString("da-DK", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <div className="grid grid-cols-4">
                    <Link href={`/pages/articles/category/${article._type}`}>
                      <button className="bg-indigo-600 p-2 my-2 font-bold text-xs rounded-lg dark:bg-indigo-500">
                        {article._type}
                      </button>
                    </Link>
                    {article.tagNames.map((tag) => (
                      <Link href={`/pages/articles/tag/${tag}`}>
                        <button
                          key={tag}
                          className="bg-orange-700 font-bold text-xs  p-2 my-2 mr-2  rounded-lg"
                        >
                          {tag}
                        </button>
                      </Link>
                    ))}
                  </div>

                  <h1 className=" bg-gray-200 min-h-[130px] text-lg rounded-lg dark:bg-gray-700">
                    {article.title}
                  </h1>
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
              </div>
            ))}
          </div>
        </div>
        <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Udforsk indenfor kategori: {params.category}</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {anime}
      </section>
      <LoadMore />
    </main>
      </section>
    </div>
  );
}
