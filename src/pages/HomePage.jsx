import Spacejam from "../components/spacejam";
import Toolkits from "../components/Toolkits";
import Preview from "/video/Preview.mp4";
import Challenges from "../components/Challenges";
import Learning from "../components/Learning";

import LearningObjectives from "../components/LearningObjectives";
import AdvancedLearning from "../components/AdvancedLearning";
import LearnInterface from "../components/LearnInterface";

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
              Program planets to create your own musical solar system! <br></br>
              Explore the logic, discover the pattern, complete challenges and
              learn{" "}
              <span className="font-bold text-gradient-1">
                Computer Science
              </span>
              !
            </p>
          </div>
          <div className="max-w-[1920px] ">
            <video controls className="video-panel mx-auto">
              <source src={Preview} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <Spacejam />
      <Toolkits />
      <Challenges />
      <LearningObjectives />
      <LearnInterface />
      <Learning />
      <AdvancedLearning />
    </div>
  );
}

export default HomePage;
