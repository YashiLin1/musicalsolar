import React from "react";
import questionIcon from "/icon/icon-question.svg";
function Learning() {
  return (
    <section className="2xl:container 2xl:mx-auto mx-10 mb-36">
      <h1 className="text-3xl lg:text-5xl font-bold text-white text-gradient-1 mr-6 mb-12 lg:leading-relaxed">
         How animation work?
      </h1>
       

      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-16">
        <div className="learn-board  py-8 px-6 mb-4">
          <h4 className="text-white text-4xl font-bold mb-5">
            <span className="inline-block mr-2">
            <img
                className="inline-block "
                src={questionIcon}
                alt="Question Mark"
                width="30"
                height="30"
              />
            </span>{" "}
             Refresh Time 
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
 
      </div>
    </section>
  );
}

export default Learning;
