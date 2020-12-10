import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import imageTwo from "../spiderman-astronaut-suit-4k_1557260144.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import imageLoad from "../pixil-frame-0.png";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="mt-28 inflex-flex items-center py-6 px-3 mr-4 text-black-200 hover:text-white-500 text-4xl font-bold cursive tracking-widest">
        <img src={imageLoad} alt="loadingdude"/>Loading...
      </div>
    );
  return (
    <main className="relative ">
      <img src={imageTwo} alt="spiderman" className="absolute object-cover w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-pink-200 bg-opacity-60 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-purple-900 mb-4">
              {/*Hello there!*/}{" "}
              <span className="text-gray-900">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-gray-700">
              <BlockContent
                blocks={author.bio}
                projectId="aixxtsmi"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
