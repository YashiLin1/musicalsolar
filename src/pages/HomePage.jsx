import Spacejam from "../components/spacejam";
import Keyboard from "../components/DrumKit";
import Preview from "/video/Preview.mp4";
import LearnMore from "../components/LearnMore";

function HomePage() {
  return (
    <div
      className="homepage main z-10"
      // style={{ backgroundImage: "url(/image/galaxyBg.jpg)" }}
    >
      <section className="hero-screen">
        <div className="container mx-auto pt-32 pb-36 pb-10 ">
          <div>
            <h1 className="text-7xl lg:text-9xl font-bold text-gradient-1 mr-6 mb-3 leading-relaxed lg:leading-relaxed">
              Space Jam
            </h1>
            <img className="logo-img mb-12" src="/image/neroart.png" />
            <p className="text-xl font-light text-gray-200 max-w-3xl mb-32 leading-[2.4rem]">
              Program planets to generate your unique rhythms! Explore the logic
              of the solar system animation, discover their pattern and
              re-create the beats from the challenge videos!
            </p>
          </div>
          <div className="max-w-[1920px] ">
            <p className="text-white">Video will update</p>
            <video controls className="video-panel mx-auto">
              <source src={Preview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <Spacejam />
      <Keyboard />
      <LearnMore />
      <section className="2xl:container 2xl:mx-auto mx-10 mb-36">
        <h1 className="text-3xl lg:text-5xl font-bold text-white text-gradient-1 mr-6 mb-3 lg:leading-relaxed">
          Learning objectives
        </h1>
        <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
          What do this game have to do with Computer Science?
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="learn-board py-8 px-6 mb-4">
            <h5 className="text-3xl font-bold text-gradient-1 leading-relaxed">
              Computational Thinking
            </h5>
            <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
              Learn to break complex rhythms into smaller beats and solve
              challenges one step at a time. Using logical reasoning to solve
              problems is a fundamental mindset in Computer Science.
            </p>
          </div>
          <div className="learn-board py-8 px-6 mb-4">
            <h5 className="text-3xl font-bold text-gradient-1 leading-relaxed">
              Pattern Recognition
            </h5>
            <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
              Recognizing patterns to solve problem is essential in Computer
              Science. For instance, you&apos;ll identify the &apos;trick&apos;
              of the planet&apos;s orbital time and starting degree to create
              corresponding music notes (whole notes, half notes, quarter notes,
              etc).
            </p>
          </div>
          <div className="learn-board py-8 px-6 mb-4">
            <h5 className="text-3xl font-bold text-gradient-1 leading-relaxed">
              Sequential Logic
            </h5>
            <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
              Arranging commands in a specific order is crucial in Computer
              Science. To create a specific rhythm pattern for the planets, you
              adjust the planet properties (Name, Orbit, Orbit Time, Direction,
              and Start Degree) accordingly within a fixed condition (planet
              cross string) to achieve the desired outcomes.
            </p>
          </div>
          <div className="learn-board py-8 px-6 mb-4">
            <h5 className="text-3xl font-bold text-gradient-1 leading-relaxed">
              Creative Problem-solving Skill
            </h5>
            <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-8">
              Understand that there are different ways to create rhythms, and
              different combinations of planets can make the same rhythm. Being
              creative and trying new things is important in Computer Science!
              The key to composing lies in your perspective. For instance, you
              can try to understand how the rhythm is affected when the
              direction is counterclockwise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
