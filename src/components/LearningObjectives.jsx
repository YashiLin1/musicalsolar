import React from "react";

function LearningObjectives() {
  return (
    <section className="2xl:container 2xl:mx-auto mx-10 mb-36">
      <h1 className="text-4xl lg:text-6xl font-bold text-white text-gradient-1 mr-6 lg:leading-relaxed">
        Computer Science Sparks Creativity!
      </h1>
      <img className="logo-img mb-6" src="/image/neroart.png" />
      <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-12">
        What does this game have to do with Computer Science?
      </p>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="learn-board py-12 px-8 mb-4">
          <h5 className="text-3xl font-bold text-gradient-1 leading-relaxed">
            Computational Thinking
          </h5>
          <p className="text-lg font-light text-gray-200 max-w-3xl leading-[2rem] ">
            Break a problem down into smaller parts to solve it! When you break complex rhythms into
            single beat to solve it and
            recognize pattern of the planets, you are developing the skill!
            Using logical reasoning to solve problems is a fundamental mindset
            in Computer Science!
          </p>
        </div>

        <div className="learn-board py-8 px-6 mb-4">
          <h5 className="text-3xl font-bold text-gradient-1 leading-relaxed">
            Sequential Logic
          </h5>
          <p className="text-lg font-light text-gray-200 max-w-3xl leading-[2rem] ">
            Arranging commands in a specific order is crucial in Computer
            Science. To create a specific rhythm pattern for the planets, you
            adjust the planet properties (Name, Orbit, Orbit Time, Direction,
            and Start Degree) accordingly within a fixed condition (planet cross
            string) to achieve the desired outcomes.
          </p>
        </div>
        <div className="learn-board py-8 px-6 mb-4">
          <h5 className="text-3xl font-bold text-gradient-1 leading-relaxed">
            Be Creative
          </h5>
          <p className="text-lg font-light text-gray-200 max-w-3xl leading-[2rem] ">
            There are different combinations to create the same rhythms. Being
            creative is important in Computer Science! The key to composing lies
            in your perspective. Try to understand how the rhythm is affected
            when the String is not at 0° degree, or when direction is
            counterclockwise
          </p>
        </div>
      </div>
    </section>
  );
}

export default LearningObjectives;
