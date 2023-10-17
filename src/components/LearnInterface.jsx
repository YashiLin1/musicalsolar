import React from "react";
import questionIcon from "/icon/icon-question.svg";

function LearnInterface() {
  return (
    <section className="2xl:container 2xl:mx-auto mx-10 mb-36">
      <h1 className="text-3xl lg:text-5xl font-bold text-white text-gradient-1 mr-6 mb-12 lg:leading-relaxed">
        Computer Science Concepts
      </h1>
      <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-20">
        In computer science, &quot;setup,&quot; &quot;loop,&quot; and
        &quot;class&quot; are fundamental concepts, often used in programming.
        Here&apos;s a simple explanation of each:
      </p>

      <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-6 ">
        <div className="learn-board py-8 px-6 mb-4">
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
            Setup
          </h4>

          <p className="text-lg  font-light text-gray-200 mb-4">
            Setup is a part of a program or script that is typically used for
            initializing or setting up the initial conditions or parameters for
            a task or process.
          </p>
          <h5 className="text-2xl font-bold text-white leading-relaxed">
            Space Jam Example
          </h5>
          <p className="text-lg  font-light text-gray-200 mb-4">
            Loading the game assets (galaxy, star, planets, background etc.).
          </p>
        </div>
        <div className="learn-board py-8 px-6 mb-4">
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
            Loop
          </h4>

          <p className="text-lg  font-light text-gray-200 mb-4">
            A &quot;loop&quot; is a control structure in programming that
            repeats a set of instructions multiple times. It&apos;s like a
            computerized version of doing something over and over.
          </p>
          <h5 className="text-2xl font-bold text-white leading-relaxed">
            Space Jam Example
          </h5>
          <p className="text-lg  font-light text-gray-200 mb-4">
            The loop allows the computer to call the action of{" "}
            <span className="block-jam blue">Play Sound</span> when the planet
            satisfies the condition of crossing the string.
          </p>
        </div>
        <div className="learn-board py-8 px-6 mb-4 col-span-2">
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
            Class
          </h4>

          <p className="text-lg  font-light text-gray-200 mb-4">
            A "class" is like a blueprint or a template for creating objects in
            object-oriented programming. It defines the structure and behavior
            that the objects will have.
          </p>
          <h5 className="text-2xl font-bold text-white leading-relaxed">
            Space Jam Example
          </h5>
          <p className="text-lg  font-light text-gray-200 mb-4">
            We create a &quot;Planet&quot; class that defines the
            characteristics and actions planets have: having a name, can orbit
            around a star, have a orbit direction and action to{" "}
            <span className="block-jam blue">Play Sound</span>, etc. Then we can
            create specific planet objects (instances) like &quot;Mercury{" "}
            <img className="planet tiny" src={`/image/Mercury.jpg`} /> &quot; or
            &quot;Earth <img className="planet tiny" src={`/image/Earth.jpg`} />{" "}
            &quot; with their unique properties and behaviors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LearnInterface;
