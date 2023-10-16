import React from "react";

function LearnMore() {
  return (
    <section className="2xl:container 2xl:mx-auto mx-10 mb-36">
      <h1 className="text-3xl lg:text-5xl font-bold text-white text-gradient-1 mr-6 mb-3 lg:leading-relaxed">
        Computer Science Sparks Creativity!
      </h1>
      <img className="logo-img mb-6" src="/image/neroart.png" />

      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-16">
        <div className="learn-board py-8 px-6 mb-4">
          <h4 className="text-white text-4xl font-bold mb-5">
            What is Refresh Time?
          </h4>
          <p className="text-lg  font-light text-gray-200 mb-4">
            Refresh Time is the time duration between the display of individual
            frames in an animation sequence. Refresh Time = 0.05 milliseconds
            means the image updates every 0.05 milliseconds, which also means
            the computer calculates new positions for all the planets and moves
            them every 0.05 milliseconds to create the illusion of movement.
          </p>
          <h6 className="text-theme-blue text-2xl mb-3">
            Set Refresh Time to 250 ms and see what happens!
          </h6>
        </div>
        <div className="learn-board py-8 px-6 mmb-4">
          <h4 className="text-white text-4xl font-bold mb-5">What is Loop?</h4>

          <p className="text-lg  font-light text-gray-200 mb-4">
            In computer programming, a loop continuously checks a condition and
            triggers actions when met. In this solar system, the computer is
            checking if a planet crosses the string. When the planet satisfies
            the condition, it immediately triggers a action. This action is
            <span className="block-jam blue">Play Sound</span> method associated
            with the planet object.
          </p>
          <h6 className="text-theme-blue text-2xl mb-3">
            Loop allows the computer to watch and respond to events without
            human intervention.
          </h6>
        </div>
        <div className="learn-board py-8 px-6 mmb-4">
          <h4 className="text-white text-4xl font-bold mb-5">What is Class?</h4>

          <p className="text-lg  font-light text-gray-200 mb-4">
          Class Planet is the blueprint of creating planets! 
                Planets are the instances (objects) of this class with different properties! <br></br>In this musical solar system, Class Planet is designed to
            orbit around the Sun. Each planet has its own properties (Name,
            Orbit, Orbit Time, Direction, and Start Degree) and can perform
            action of <span className="block-jam blue">Play Sound</span>.
          </p>
          <h6 className="text-theme-blue text-2xl mb-3">
          A class is a template that defines the structure and behavior of objects.
          </h6>
        </div>
      </div>
    </section>
  );
}

export default LearnMore;
