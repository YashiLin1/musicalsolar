import React from "react";
import ChallengeAVid from "/video/ChallengeAVid.mp4";
import ChallengeBVid from "/video/ChallengeBVid.mp4";
import ChallengeCVid from "/video/ChallengeCVid.mp4";

function Challenges() {
  return (
    <section className="2xl:container 2xl:mx-auto mx-10 mb-36">
      <h1 className="text-5xl lg:text-7xl font-bold text-white text-gradient-1 mr-6 lg:leading-relaxed">
        Recreate these beats!
      </h1>
      <img className="logo-img mb-6" src="/image/neroart.png" />
     
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="">
           
          <video controls className="video-panel mx-auto">
              <source src={ChallengeAVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>

        <div className="">
           
          <video controls className="video-panel mx-auto">
              <source src={ChallengeBVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        <div className="">
           
          <video controls className="video-panel mx-auto">
              <source src={ChallengeCVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </section>
  );
}

export default Challenges;
