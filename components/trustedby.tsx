import React from "react";
import ClientLogos from "./client-logos";

const TrustedBy: React.FC = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32">
      <div className="flex-1 bg-black"></div>
      <div className="container mx-auto lg:max-w-[70%] lg:px-10">
        <h3 className="text-2xl mb-10 font-bold text-center">
          <span>Built with:</span>
          <br></br>
          <span>some of the apps and frameworks you use daily.</span>
        </h3>
        <ClientLogos />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10">
          <h3 className="text-2xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
            This application attempts to be a reflection of my personal style
            and skill level.
          </h3>
        </div>
      </div>
      <div className="flex-1 bg-black"></div>
    </section>
  );
};

export default TrustedBy;
