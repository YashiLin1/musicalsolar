import Spacejam from "../components/spacejam";
import Toolkits from "../components/Toolkits";
import HeroSection from "../components/Hero";
import Challenges from "../components/Challenges";
import Learning from "../components/Learning";

import LearningObjectives from "../components/LearningObjectives";
import AdvancedLearning from "../components/AdvancedLearning";
import LearnInterface from "../components/LearnInterface";

function HomePage() {
  return (
    <div className="homepage main z-10">
      <HeroSection />
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
