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
      Want to understand how this animation is done? 
    </p>

    <p className="text-xl font-light text-gray-200 leading-[2rem] mb-8">
       We know that to display any item on the
      screen, the computer needs to know their x and y coordinates. So each item has coordinates, represented as (x, y). 
      We first define the coordinates of the center of the sun as (0, 0).
      The rotation time of
      the planets is defined by the user. So, if a planet has a rotation
      time of 360 milliseconds, then when it has rotated for 30
      milliseconds, you can calculate the angle it has rotated by dividing
      30 milliseconds by 360 milliseconds. Let&apos;s review the sine and cosine
      functions. With the knowledge of the angle and the side length R, we
      can calculate the lengths of the other two sides, x and y, in a right
      triangle. Imagine that the computer calculates x and y every
      millisecond and tells the planet where it should appear. As long as
      the speed is fast enough, to the human eye, it appears as if the
      planet is moving. This is what your computer is doing for the planet
      animation. It continuously calculates position.x and position.y at
      very short intervals.
    </p>

    </div>
    <div>
      <UnitCircleVisualizer/>
    </div>
    </div>
   
    <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
      As for the Website: It&apos;s a static website made with Vite+React and
      deployed on Vercel. You need to learn HTML, CSS, and JavaScript. As
      long as you learn Computer Science, the
      technical skills required for this website will be easy for
      you!
    </p>
  </section>
  );
}

export default AdvancedLearning;