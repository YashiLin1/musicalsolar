import React, { useState } from "react";
import ChallengeAVid from "/video/ChallengeAVid.mp4";
import ChallengeBVid from "/video/ChallengeBVid.mp4";
import ChallengeCVid from "/video/ChallengeCVid.mp4";

function Challenges() {
  const [showTableA, setShowTableA] = useState(false);
  const [showTableB, setShowTableB] = useState(false);
  const [showTableC, setShowTableC] = useState(false);
  const handleAClick = () => {
    setShowTableA((prevState) => !prevState);
  };
  const handleBClick = () => {
    setShowTableB((prevState) => !prevState);
  };
  const handleCClick = () => {
    setShowTableC((prevState) => !prevState);
  };

  return (
    <section className="challenge-section 2xl:container 2xl:mx-auto mx-10 mb-56">
      <h1 className="text-7xl lg:text-8xl font-bold text-white text-gradient-1 mr-6 mb-16 lg:leading-relaxed">
        Recreate these beats!
      </h1>
      <img className="logo-img mb-6" src="/image/neroart.png" />

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="">
          <video controls className="video-panel mx-auto">
            <source src={ChallengeAVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-center p-12">
            {showTableA ? (
              <button
                className={`button-jam md border mr-4`}
                onClick={handleAClick}
              >
                Close Tips
              </button>
            ) : (
              <button
                className={`button-jam md blue mr-4`}
                onClick={handleAClick}
              >
                View Tips
              </button>
            )}
          </div>
          {showTableA && (
            <div>
              
              <table className="table-auto w-full text-white rhythm-table mb-5">
                <tbody>
                  <tr>
                    <td className="text-center" rowSpan="2">
                      Orbit Time
                    </td>
                    <td className="text-center hover-orange" colSpan="8">
                      2800
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center hover-blue" colSpan="4">
                      1400
                    </td>
                    <td className="text-center hover-blue" colSpan="4">
                      1400
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center ">Ride cymbal</td>
                    <td width={48}>
                      <span className="note hover-blue"></span>
                    </td>
                    <td width={48}></td>
                    <td width={48}></td>
                    <td width={48}></td>
                    <td width={48}>
                      <span className="note hover-blue"></span>
                    </td>
                    <td width={48}></td>
                    <td width={48}></td>
                    <td width={48}></td>
                  </tr>
                  <tr>
                    <td className="text-center ">Kick</td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <span className="note hover-orange"></span>
                    </td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-center ">High Hat 1</td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-center ">Snare</td>
                    <td></td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center text-white">Not all the beats are in the same speed of loop!</div>
            </div>
          )}
        </div>

        <div className="">
          <video controls className="video-panel mx-auto">
            <source src={ChallengeBVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-center p-12">
            {showTableB ? (
              <button
                className={`button-jam md border mr-4`}
                onClick={handleBClick}
              >
                Close Tips
              </button>
            ) : (
              <button
                className={`button-jam md blue mr-4`}
                onClick={handleBClick}
              >
                View Tips
              </button>
            )}
          </div>
          {showTableB && (
            <div>
              <table className="table-auto w-full text-white rhythm-table mb-5">
                <tbody>
                  <tr>
                    <td className="text-center" rowSpan="2">
                      Orbit Time
                    </td>
                    <td className="text-center hover-orange" colSpan="4">
                      2400
                    </td>
                    <td className="text-center hover-orange" colSpan="4">
                      2400
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center hover-blue" colSpan="2">
                      1200
                    </td>
                    <td className="text-center hover-blue" colSpan="2">
                      1200
                    </td>
                    <td className="text-center hover-blue" colSpan="2">
                      1200
                    </td>
                    <td className="text-center hover-blue" colSpan="2">
                      1200
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center ">Kick</td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center ">Crash Cymbal</td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-center text-center  ">Ride Cymbal</td>
                    <td className="text-center">
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <td className="text-center ">Snare</td>
                    <td></td>
                    <td className="text-center ">
                      <span className="note hover-orange"></span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center ">
                      <span className="note hover-orange"></span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center text-white">You create two 1200 orbit-time planets with degree 0 and 180 to achieve beats in 600 orbit time!</div>
            </div>
          )}
        </div>
        <div className="">
          <video controls className="video-panel mx-auto">
            <source src={ChallengeCVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-center p-12">
            {showTableC ? (
              <button
                className={`button-jam md border mr-4`}
                onClick={handleCClick}
              >
                Close Tips
              </button>
            ) : (
              <button
                className={`button-jam md blue mr-4`}
                onClick={handleCClick}
              >
                View Tips
              </button>
            )}
          </div>
          {showTableC && (
            <div>
              <table className="table-auto w-full text-white rhythm-table mb-5">
                <tbody>
                  <tr>
                    <td className="text-center" rowSpan="3">
                      Orbit Time
                    </td>
                    <td className="text-center hover-orange" colSpan="8">
                      3600
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center hover-blue" colSpan="4">
                      1800
                    </td>
                    <td className="text-center hover-blue" colSpan="4">
                      1800
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center" colSpan="2">
                      900
                    </td>
                    <td className="text-center" colSpan="2">
                      900
                    </td>
                    <td className="text-center" colSpan="2">
                      900
                    </td>
                    <td className="text-center" colSpan="2">
                      900
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">High Hat 1</td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                    <td>
                      <span className="note"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">Kick</td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td className="text-center">
                      <span className="note hover-orange"></span>
                    </td>
                    <td className="text-center">
                      <span className="note hover-orange"></span>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-center">Snare</td>
                    <td></td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-orange"></span>
                    </td>
                    <td></td>
                    <td>
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center text-white">
                It&apos;s important to identify the beat in different speed of loop.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Challenges;
