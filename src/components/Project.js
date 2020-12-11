import React, { useEffect, useState } from "react";
import sanityClient from "../client";
{/*import imageSix from "../spiderman-ps4-new_1570393512.jpg";*/}

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        place,
        description,
        projectType,
        link,
        tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main
      className="spiderman-bg absolute w-100" /*className = "bg-green-100 min-h-screen"*/
    >
      {/* 
        commented because we're taking the bg from thirdparty in custom css
        <img
        src={imageFive}
        alt="spiderman"
        className="absolute topZero object-cover w-full h-full"
      />
      */}
      <section className="mt-28 container mx-auto">
        {/*h1 & h2 are not visible on page, this keeps css in check. to display uncomment in index.css*/}
        <h1 className="text-5xl flex justify-center cursive">Project</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome
        </h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className=" relative rounded-lg shadow-xl bg-white p-8">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <br />
                <div className="text-gray-500 text-xs space-x-4 ">
                  <br />
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <br />
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400"
                  >
                    To repository{" "}
                    {/*<span role="img" aria-label="right-pointer" className="emoji">
                      🦥
                    </span>*/}
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
