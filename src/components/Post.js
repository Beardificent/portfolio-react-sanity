import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

export default function Post() {
  //using groq to link postData to our Sanity posts. will review if this is accurate
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        //select all types that are equal to post and gather title, slug, mainImage,...
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
          asset->{
          _id,
          url}, alt
          }
          }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <main
      className="spiderman-bg absolute w-full" /*className = "bg-green-100 min-h-screen"*/>
      {/*
          commented because we're taking the bg from thirdparty in custom css
      <img
        src={imageFive}
        alt="spiderman"
        className="absolute topZero object-cover w-full h-full"
      />
      */}
      <section className="mt-28 container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Findings</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          {/*Room for a subtitle*/}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article className="relative rounded-lg shadow-xl bg-transparent p-8">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-white-400 hover:shadow-2xl"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className={
                        "w-full h-full rounded-r object-cover absolute"
                      }
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
