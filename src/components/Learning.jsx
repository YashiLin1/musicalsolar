import React from "react";

function Learning() {
  return (
    <section className="2xl:container 2xl:mx-auto mx-10 mb-36">
      <h1 className="text-3xl lg:text-5xl font-bold text-white text-gradient-1 mr-6 mb-12 lg:leading-relaxed">
         Learning 
      </h1>
       

      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-16">
        <div className="learn-board py-8 px-6 mb-4">
          <h4 className="text-white text-4xl font-bold mb-5">
            <span className="inline-block mr-2">
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M532.042 0C372.404 0 269.006 65.406 187.828 182.052c-14.726 21.16-10.186 50.172 10.356 65.748l86.276 65.418c20.746 15.73 50.264 12.052 66.506-8.296 50.098-62.762 87.26-98.898 165.514-98.898 61.528 0 137.632 39.598 137.632 99.262 0 45.104-37.234 68.268-97.986 102.328-70.846 39.72-164.598 89.152-164.598 212.81V640c0 26.51 21.49 48 48 48h144.942c26.51 0 48-21.49 48-48v-11.546c0-85.72 250.536-89.29 250.536-321.254C883.008 132.512 701.804 0 532.042 0zM512 746.918c-76.392 0-138.542 62.15-138.542 138.542 0 76.39 62.15 138.54 138.542 138.54s138.542-62.15 138.542-138.542-62.15-138.54-138.542-138.54z"
                  fill="#5bba74"
                ></path>
              </svg>
            </span>{" "}
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
            Set Refresh Time to 130 ms, click <div className="planet small sun mx-4"></div> to update, see what happens!
          </h6>
        </div>
        <div className="learn-board py-8 px-6 mmb-4">
          <h4 className="text-white text-4xl font-bold mb-5">
          <span className="inline-block mr-2">
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M532.042 0C372.404 0 269.006 65.406 187.828 182.052c-14.726 21.16-10.186 50.172 10.356 65.748l86.276 65.418c20.746 15.73 50.264 12.052 66.506-8.296 50.098-62.762 87.26-98.898 165.514-98.898 61.528 0 137.632 39.598 137.632 99.262 0 45.104-37.234 68.268-97.986 102.328-70.846 39.72-164.598 89.152-164.598 212.81V640c0 26.51 21.49 48 48 48h144.942c26.51 0 48-21.49 48-48v-11.546c0-85.72 250.536-89.29 250.536-321.254C883.008 132.512 701.804 0 532.042 0zM512 746.918c-76.392 0-138.542 62.15-138.542 138.542 0 76.39 62.15 138.54 138.542 138.54s138.542-62.15 138.542-138.542-62.15-138.54-138.542-138.54z"
                  fill="#5bba74"
                ></path>
              </svg>
            </span>{" "}
            What is Loop?
          </h4>

          <p className="text-lg  font-light text-gray-200 mb-4">
            In computer programming, a loop continuously checks a condition and
            triggers actions when met. In this solar system, the computer is
            checking if a planet crosses the string. When the planet satisfies
            the condition, it triggers a action. This action is <span className="block-jam blue">Play Sound</span> method associated
            with the planet object.
          </p>
          <h6 className="text-theme-blue text-2xl mb-3">
            Loop allows the computer to watch and respond to events without
            human intervention.
          </h6>
        </div>
        <div className="learn-board py-8 px-6 mmb-4">
          <h4 className="text-white text-4xl font-bold mb-5">
          <span className="inline-block mr-2">
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M532.042 0C372.404 0 269.006 65.406 187.828 182.052c-14.726 21.16-10.186 50.172 10.356 65.748l86.276 65.418c20.746 15.73 50.264 12.052 66.506-8.296 50.098-62.762 87.26-98.898 165.514-98.898 61.528 0 137.632 39.598 137.632 99.262 0 45.104-37.234 68.268-97.986 102.328-70.846 39.72-164.598 89.152-164.598 212.81V640c0 26.51 21.49 48 48 48h144.942c26.51 0 48-21.49 48-48v-11.546c0-85.72 250.536-89.29 250.536-321.254C883.008 132.512 701.804 0 532.042 0zM512 746.918c-76.392 0-138.542 62.15-138.542 138.542 0 76.39 62.15 138.54 138.542 138.54s138.542-62.15 138.542-138.542-62.15-138.54-138.542-138.54z"
                  fill="#5bba74"
                ></path>
              </svg>
            </span>{" "}
            What is Class?
          </h4>

          <p className="text-lg  font-light text-gray-200 mb-4">
            Class Planet is like a blueprint of creating planets! Planets are the
            instances (objects) of this class with different properties!{" "}
            <br></br>In this musical solar system, Class Planet is designed to
            orbit around the Sun. Each planet has its own properties (Name,
            Orbit, Orbit Time, Direction, and Start Degree) and can perform
            action of <span className="block-jam blue">Play Sound</span>.
          </p>
          <h6 className="text-theme-blue text-2xl mb-3">
            A class is a template that defines the structure and behavior of
            objects.
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Learning;
