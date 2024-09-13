import { useRef } from "react";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import Socials from "./components/Socials";
import WorkCard from "./components/WorkCard";

// Local Data
import data from "./yourData";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto mb-10">
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="laptop:mt-20 mob:mt-10">
        <h2 className="mt-5 text-xl mob:text-5xl laptop:tet-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
          {data.headerTaglineOne} <br />
          {data.headerTaglineTwo}
        </h2>
        <Socials className="mt-5 mob:mt-2 laptop:mt-5" />
      </div>
      <div
        className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={workRef}>
        <h1 className="section-header">Work.</h1>
        <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.projects.map((project, index) => (
            <WorkCard
              key={index}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
            />
          ))}
        </div>
      </div>
      <div className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="section-header">Services.</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <div
        className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={aboutRef}>
        <h1 className="section-header">About.</h1>
        <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-medium md:text-large lg:text-xl w-4/5 md:w-full lg:w-3/5">
          {data.aboutpara}
        </p>
      </div>
      <div className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0">
        <h1 className="section-header">Contact.</h1>
        <div className="mt-5">
          <Socials />
        </div>
      </div>
    </div>
  );
}
