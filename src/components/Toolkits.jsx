import { useEffect, useState } from "react";
import drumButtons from "./DrumButtons"; 

const Toolkits = () => {
  useEffect(() => {
    drumButtons.forEach((button) => {
      const audio = new Audio(button.soundPath);
      audio.load(); // Load the audio file
    });
  }, []);

  const [displayedNumber, setDisplayedNumber] = useState(null);

  const playSound = (soundPath, number) => {
    setDisplayedNumber(null);
    const audio = new Audio(soundPath);
    audio.currentTime = 0;
    audio.play();
 
    setDisplayedNumber(number);
 
  };
  return (
    <section className="toolkits-section 2xl:container 2xl:mx-auto mx-10 my-48 z-10">
      <div className="grid xl:grid-cols-2 gap-16">
        <div>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient-1 mr-6 mb-3 leading-relaxed lg:leading-relaxed">
                Drum Kit
              </h1>
              <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-20">
                Press them! <br></br> Remember their number for the
                <span className="block-jam blue text-base ml-2">Play Sound</span>.
              </p>
            </div>
            <div className="text-center">
              <span
                className={`text-white font-bold show-number ${
                  displayedNumber ? "" : "hidden"
                }`}
              >
                {displayedNumber}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 md:max-w-3xl">
            {drumButtons.map((button, index) => (
              <button
                key={index}
                onClick={() => playSound(button.soundPath, button.number)}
                className={`drum-button btn-neon ${button.class} `}
              >
                <span className="drum-number">{button.number}</span>
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gradient-1 mr-6 mb-3 leading-relaxed lg:leading-relaxed">
            Counting Beats
          </h1>
          <p className="text-xl font-light text-gray-200 max-w-3xl leading-[2rem] mb-20">
            In music, notes have different durations of time. If a planet
            orbit time 4000 represent a whole note, the sheet is
            reference.
          </p>
          <div>
            <table className="table-auto w-full text-white rhythm-table mb-5 text-lg">
              <thead>
                <tr>
                  <th>Notes</th>
                  <th colSpan="8">A Bar</th>
                  <th>Orbit Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center hover-orange">Whole note</td>
                  <td colSpan="8">
                    <span className="note hover-orange"></span>
                  </td>
                  <td className="text-center hover-orange">4000</td>
                </tr>
                <tr>
                  <td className="text-center hover-blue">Half Note</td>
                  <td colSpan="4">
                    <span className="note hover-blue"></span>
                  </td>
                  <td colSpan="4">
                    <span className="note hover-blue"></span>
                  </td>
                  <td className="text-center hover-blue">2000</td>
                </tr>
                <tr>
                  <td className="text-center hover-green">Quarter Note</td>
                  <td colSpan="2">
                    <span className="note hover-green"></span>
                  </td>
                  <td colSpan="2">
                    <span className="note hover-green"></span>
                  </td>
                  <td colSpan="2">
                    <span className="note hover-green"></span>
                  </td>
                  <td colSpan="2">
                    <span className="note hover-green"></span>
                  </td>
                  <td className="text-center hover-green">1000</td>
                </tr>
                <tr>
                  <td className="text-center">Eighth Note</td>
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
                  <td className="text-center">500</td>
                </tr>
                <tr>
                  <td className="text-center">Start Degree Reference </td>
                  <td width={48}>0°</td>
                  <td width={48}>45°</td>
                  <td width={48}>90°</td>
                  <td width={48}>135°</td>
                  <td width={48}>180°</td>
                  <td width={48}>225°</td>
                  <td width={48}>270°</td>
                  <td width={48}>315°</td>
                  <td className="text-center"> </td>
                </tr>
              </tbody>
            </table>
          </div>
 
 
        </div>
      </div>
    </section>
  );
};

export default Toolkits;
