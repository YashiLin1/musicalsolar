import React from "react";
import UnitCircleVisualizer from "./unitcircle/UnitCircleVisualizer";

function AdvancedLearning() {
  return (
    <section className="2xl:container 2xl:mx-auto mx-10 mb-36">
      <h1 className="text-3xl lg:text-5xl font-bold text-white text-gradient-1 mr-6 mb-3 lg:leading-relaxed">
        Advanced Learning 
      </h1>
      <div className="grid grid-cols-2">
        <div className="">
          <p className="text-xl font-light text-gray-200 leading-[2rem] mb-8">
            How to create this animation?
          </p>

          <h5 className="text-3xl font-bold text-white leading-relaxed">
            1.The Basic
          </h5>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
            In order to display anything on the screen, the computer requires x
            and y coordinates. Each planet is represented by these coordinates
            in the form (x, y).
          </p>
          <h5 className="text-3xl font-bold text-white leading-relaxed">
            2.Established Value
          </h5>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
            We begin by defining the coordinates of the center of the sun, and
            for simplicity, we set it at (0, 0). Orbit radius length is R.
          </p>

          <h5 className="text-3xl font-bold text-white leading-relaxed">
            3.Get Planet Position Angle
          </h5>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
            If a planet has a orbit time of
            3600 milliseconds, and 300 milliseconds has passed since start, we can calculate
            its current orbit angle by dividing 300 by 3600. As a result,
            current Angle θ = 1/12 = 30° 
          </p>

          <h5 className="text-3xl font-bold text-white leading-relaxed">
            4.Math: Unit Circle
          </h5>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
            Now we know the current rotation angle and the side length (R) of a
            right triangle, we can use the Sine and Cosine Functions to
            calculate the calculate the x and y positions of a planet (x,y)!
          </p>

          <h5 className="text-3xl font-bold text-white leading-relaxed">
            5.Animation
          </h5>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
          Imagine the computer calculates the planet (x, y) coordinates every 1 millisecond. (Here 1 millisecond is the Refresh Time!). This is what your computer is doing for the planet animation. It continuously calculates position.x and position.y at very short intervals, so it creates an illusion of objects moving!
          </p>

          <h5 className="text-3xl font-bold text-white leading-relaxed">
            6.Create this Website
          </h5>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
            It&apos;s a static website made with Vite+React and deployed on
            Vercel. You need to learn HTML, CSS, and JavaScript. As long as you
            learn Computer Science, the technical skills required for this
            website will be easy for you!
          </p>
        </div>
        <div>
          <UnitCircleVisualizer />
        </div>
      </div>
    </section>
  );
}

export default AdvancedLearning;
