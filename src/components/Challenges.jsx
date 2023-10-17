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
      <img className="logo-img mb-12 " src="/image/neroart.png" />

      <div className="grid xl:grid-cols-3 gap-10  ">
        <div className="max-w-3xl">
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
                Hide Rhythm
              </button>
            ) : (
              <button
                className={`button-jam md blue mr-4`}
                onClick={handleAClick}
              >
                View Rhythm
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
                    <td className="text-center ">
                      <span className="drum-number mr-2">1</span>Kick
                    </td>
                    <td width={43}>
                      <span className="note hover-blue"></span>
                    </td>
                    <td width={43}></td>
                    <td width={43}></td>
                    <td width={43}>
                      <span className="note hover-orange"></span>
                    </td>
                    <td width={43}>
                      <span className="note hover-blue"></span>
                    </td>
                    <td width={43}></td>
                    <td width={43}></td>
                    <td width={43}></td>
                  </tr>
                  <tr>
                    <td className="text-center ">
                      <span className="drum-number mr-2">5</span>High Hat 1
                    </td>
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
                    <td className="text-center ">
                      <span className="drum-number mr-2">2</span>Snare
                    </td>
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

              <div className="text-xl text-gray-200 max-w-3xl leading-[2rem] my-12">
                <span className="text-center font-bold text-theme-blue text-2xl">
                  Challenge:
                </span>{" "}
                Only use 4 planets!
              </div>
              <div className="text-xl text-gray-400">
                <span className="text-center font-bold text-theme-blue text-2xl">
                  Tips:
                </span>{" "}
                Not all the beats are in the same duration of loop!
              </div>
            </div>
          )}
        </div>

        <div className="max-w-3xl">
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
                Hide Rhythm
              </button>
            ) : (
              <button
                className={`button-jam md blue mr-4`}
                onClick={handleBClick}
              >
                View Rhythm
              </button>
            )}
          </div>
          {showTableB && (
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
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <span className="drum-number mr-2">5</span>High Hat 1
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <span className="drum-number mr-2">1</span>Kick
                    </td>
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
                    <td className="text-center">
                      <span className="drum-number mr-2">2</span>Snare
                    </td>
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
              <div className="text-center text-white"></div>

              <div className="text-xl text-gray-200 max-w-3xl leading-[2rem] my-12">
                <span className="text-center font-bold text-theme-blue text-2xl">
                  Challenge:
                </span>{" "}
                Only allow Orbit Time of 1800 and 3600.
              </div>
              <div className="text-xl text-gray-400">
                <span className="text-center font-bold text-theme-blue text-2xl">
                  Tips:
                </span>{" "}
                Two 900 orbit-time planets with degree 0 and 180 can achieve
                beats in 450 orbit time!
              </div>
            </div>
          )}
        </div>
        <div className="max-w-3xl">
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
                Hide Rhythm
              </button>
            ) : (
              <button
                className={`button-jam md blue mr-4`}
                onClick={handleCClick}
              >
                View Rhythm
              </button>
            )}
          </div>
          {showTableC && (
            <div>
              <table className="table-auto w-full text-white rhythm-table mb-5">
                <tbody>
                  <tr>
                    <td className="text-center" rowSpan="4">
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
                    <td className="text-center hover-green" colSpan="2">
                      900
                    </td>
                    <td className="text-center hover-green" colSpan="2">
                      900
                    </td>
                    <td className="text-center hover-green" colSpan="2">
                      900
                    </td>
                    <td className="text-center hover-green" colSpan="2">
                      900
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                    <td className="text-center">450</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <span className="drum-number mr-2">1</span>Kick
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                    <td width={43}>
                      <span className="note"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <span className="drum-number mr-2">4</span>Ride cymbal
                    </td>
                    <td className="text-center">
                      <span className="note hover-green "></span>
                    </td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-green "></span>
                    </td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-green "></span>
                    </td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-green"></span>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <span className="drum-number mr-2">2</span>Snare
                    </td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <span className="drum-number mr-2">5</span>High hat 1
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-blue"></span>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-blue"></span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <span className="drum-number mr-2">3</span>Crash cymbal
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="text-center">
                      <span className="note hover-orange"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Challenges;
