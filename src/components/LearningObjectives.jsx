import React from "react";

function LearningObjectives() {
  return (
    <section className="2xl:container 2xl:mx-auto mx-10 mb-36">
      <div className="text-4xl text-white ">
      <img className="logo-img mb-6" src="/image/neroart.png" />
        Your Journey in
        <span className="text-4xl font-bold lg:text-6xl text-gradient-1 ml-6 mr-6 mb-12 lg:leading-relaxed">
          Computer Science
        </span>
        through this game...
        
      </div>

      

      <div className="grid lg:grid-cols-3 gap-10 text-center">
        <div className="learn-board py-8 px-6 mb-4">
          <h5 className="text-4xl font-bold text-theme-blue leading-relaxed mb-4">
            Sequential Logic
          </h5>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] ">
            Listening to a sequence of beats and recreating them by adjusting
            the properties of the planets trains your sequential logic in
            Computer Science!
          </p>
        </div>

        <div className="learn-board py-12 px-8 mb-4">
          <h5 className="text-4xl font-bold text-theme-blue leading-relaxed mb-4">
            Computational Thinking
          </h5>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] ">
            Breaking down complex rhythms into single beats and recognizing
            patterns develops crucial problem-solving skills in Computer
            Science.
          </p>
        </div>

        <div className="learn-board py-8 px-6 mb-4">
          <h5 className="text-4xl font-bold text-theme-blue leading-relaxed mb-4">
            Be Creative
          </h5>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] ">
            Different combinations can create the same rhythms. Try to
            understand how the rhythm is affected when the String is not at 0°
            degree, or when direction is counterclockwise.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LearningObjectives;
