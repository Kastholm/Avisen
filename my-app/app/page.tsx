import Image from "next/image";

const newsData = [
  { category: 'Europe', title: 'EU Committee Backs Farmers in Trade Talks with Ukraine', imageUrl: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Ukraine/Russia', title: 'Ukrainian Forces Down 10 Enemy Drones', imageUrl: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Entertainment', title: 'Actor Gary Sinise Mourns the Loss of His Son to Cancer', imageUrl: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Health', title: 'New Study Shows That Covid-19 Can Cause Brain Damage', imageUrl: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Science', title: 'NASA to Launch New Space Telescope', imageUrl: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Technology', title: 'Apple to Release New iPhone', imageUrl: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Europe', title: 'EU Committee Backs Farmers in Trade Talks with Ukraine', imageUrl: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { category: 'Ukraine/Russia', title: 'Ukrainian Forces Down 10 Enemy Drones', imageUrl: 'https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=800' }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 my-6">
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Venstre sektion: Stort nyhedsbillede og liste med mindre nyheder */}
      <div className="flex-1 space-y-4">
        {/* Stort nyhedsbillede */}
        <div className="rounded-lg overflow-hidden">
          <Image src={newsData[0].imageUrl} alt="Main news image" width={600} height={400} layout="responsive" />
        </div>
        <h2 className="font-bold text-2xl mt-4">{newsData[0].title}</h2>
        <p className="text-gray-600">{newsData[0].category}</p>

        {/* Liste med mindre nyheder */}
        <div className="space-y-4">
          {newsData.slice(1, 5).map((news, index) => (
            <div key={index} className="flex flex-row gap-4">
              <div className="w-28 flex-none">
                <Image src={news.imageUrl} alt="News thumbnail" width={100} height={100} layout="responsive" className="rounded-lg" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold">{news.title}</h3>
                <p className="text-gray-500 text-sm">{news.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Højre sektion: Liste med mest læste nyheder */}
      <div className="w-full lg:w-1/3 space-y-4">
        <h3 className="font-bold text-xl mb-2">Mest læste</h3>
        <div className="space-y-2">
          {newsData.slice(5).map((news, index) => (
            <div key={index} className="flex flex-row lg:flex-col gap-2 lg:gap-0">
              <div className="w-1/3 lg:w-full">
                <Image src={news.imageUrl} alt="News thumbnail" width={100} height={100} layout="responsive" className="rounded-lg" />
              </div>
              <div className="w-2/3 lg:w-full">
                <h4 className="font-bold">{news.title}</h4>
                <p className="text-gray-500 text-sm">{news.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
  );
}
