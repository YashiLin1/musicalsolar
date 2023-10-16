import Spacejam from "../components/spacejam";
import Keyboard from "../components/DrumKit";
import Preview from "/video/Preview.mp4";
import Learning from "../components/Learning";
import LearningObjectives from "../components/LearningObjectives"; 
import AdvancedLearning from "../components/AdvancedLearning";

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
      
      <LearningObjectives />
      <Learning />
      <AdvancedLearning />
    </div>
  );
}

export default HomePage;
