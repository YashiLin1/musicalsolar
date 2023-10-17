// Import React and useState
import { useState, useEffect } from "react";
import Solar from "./solar";
import "./control.css";
import "./spacejam.css";
import musicIcon from "/icon/icon-music.svg";
import tickIcon from "/icon/icon-tick.svg";
import clockIcon from "/icon/icon-clock.svg";
import directionIcon from "/icon/icon-direction.svg";
import degreeIcon from "/icon/icon-degree.svg";
import soundIcon from "/icon/icon-sound.svg";

import {
  defaultSet,
  challengeA,
  challengeB,
  challengeC,
  Orbit1091,
  Orbit923,
  newset1,
  newset2,
  newset3,
} from "./presets/planetSettings";
import { backgroundMusic } from "./presets/bgm";

function Spacejam() {
  const [isEditMode, setIsEditMode] = useState(true);

  const toggleEditMode = () => {
    setIsEditMode((prevState) => !prevState);
  };

  const [soundOn, setSoundOn] = useState(false);
  const toggleSound = () => {
    setSoundOn((prevState) => !prevState);
  };

  const [selectedMusic, setSelectedMusic] = useState(0);
  const [audio, setAudio] = useState(new Audio());

  const handleMusicChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setSelectedMusic(selectedValue);
  };
  useEffect(() => {
    if (selectedMusic === 0) {
      audio.pause();
    } else {
      const selectedMusicIndex = selectedMusic - 1;
      audio.src = backgroundMusic[selectedMusicIndex].soundPath;
      audio.play();
    }
  }, [selectedMusic, audio]);

  const [planets, setPlanets] = useState(defaultSet);
  const [updatedPlanets, setUpdatedPlanets] = useState(defaultSet);

  const [stringDegree, setStringDegree] = useState(0);

  const handleSunButtonClick = () => {
    setPlanets([...updatedPlanets]);
  };

  const handleStringDegreeChange = (event) => {
    const newStringDegree = parseFloat(event.target.value);
    setStringDegree(newStringDegree);
  };

  const handleInputChange = (index, field, value) => {
    const newUpdatedPlanets = [...updatedPlanets];
    newUpdatedPlanets[index][field] = value;
    setUpdatedPlanets(newUpdatedPlanets);
  };
  const [selectedPreset, setSelectedPreset] = useState("Default");

  const presetSettings = {
    Default: defaultSet,
    Orbit1091: Orbit1091,
    Orbit923: Orbit923,
    "Challenge A": challengeA,
    "Challenge B": challengeB,
    "Challenge C": challengeC,
    newset1: newset1,
    newset2: newset2,
    newset3: newset3,
  };

  const handleApplyPreset = () => {
    if (presetSettings[selectedPreset]) {
      setUpdatedPlanets([...presetSettings[selectedPreset]]);
    }
  };

  return (
    <section className="2xl:container 2xl:mx-auto mx-10 grid grid-cols-1 xl:grid-cols-2 gap-16 my-36 z-10">
      <div>
        <Solar
          planetSettings={planets}
          soundOn={soundOn}
          handleSunButtonClick={handleSunButtonClick}
          stringDegree={stringDegree}
        />
      </div>
      <div>
        <div className=" mb-20">
          <h1 className="text-5xl xl:text-7xl font-bold text-gradient-1 mb-4 leading-relaxed xl:leading-relaxed">
            Compose Your Beats!
          </h1>
        </div>

        <div className=" mb-14">
          <div className="grid md:grid-cols-2 gap-8">
            <section className="block-section setup-section">
              <div className="setup-panel block-panel py-5 lg:py-8 px-4 2xl:px-8">
                <div className="header">Setup</div>
                <div className="mb-4 ">
                  <span className="inline-block mr-2 align-middle">
                    <img
                      src={musicIcon}
                      alt="Music Icon"
                      width="20"
                      height="20"
                    />
                  </span>
                  <select
                    value={selectedMusic}
                    className="theme-select px-4 py-2"
                    onChange={handleMusicChange}
                  >
                    <option value={0}>No Music Playing</option>
                    {backgroundMusic.map((music) => (
                      <option key={music.value} value={music.value}>
                        {music.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4 ml-1">
                  <span className="inline-block mr-2">
                    <img
                      src={tickIcon}
                      alt="Tick Icon"
                      width="14"
                      height="14"
                    />
                  </span>
                  <span className="text-white">
                    Draw <span style={{ color: "#da6e08" }}>String </span> at
                  </span>
                  <input
                    className="inputNumber inputHuns mr-2"
                    type="number"
                    step="1"
                    min="0"
                    max="359"
                    value={stringDegree}
                    onChange={handleStringDegreeChange}
                  />
                  <span className="text-white">degree</span>
                </div>
                <div className="mb-2 ml-1">
                  <span className="inline-block mr-2">
                    <img
                      src={tickIcon}
                      alt="Tick Icon"
                      width="14"
                      height="14"
                    />
                  </span>
                  <span className="text-white">
                    Draw Star{" "}
                    <div className="planet tiny sun mx-1 align-middle"></div>
                    and Planets{" "}
                    <div className="planet tiny planet-empty mx-1 align-middle"></div>
                  </span>
                </div>
              </div>
            </section>
            <section className="block-section loop-section text-white">
              <div className="loop-panel block-panel py-5 lg:py-8 px-4 2xl:px-8">
                <div className="header ">Loop</div>
                <div className="mb-6 leading-loose">
                  Planets
                  <div className="planet tiny planet-empty mx-2 align-middle"></div>
                  Orbit around Star{" "}
                  <div className="planet tiny sun mx-1 align-middle"></div>
                </div>

                <div className=" condition-panel">
                  <span className="mr-2 text-theme-blue condition">
                    Condition:
                  </span>
                  <span>
                    If Planet Cross{" "}
                    <span style={{ color: "#da6e08" }}>String </span>:
                  </span>
                  <button
                    className={`button-jam ml-3 sm ${
                      soundOn ? "purple" : "red opacity-70"
                    }`}
                    onClick={toggleSound}
                  >
                    {soundOn ? "Play Sound On" : "Play Sound Off"}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="block-section class-section">
          <div className="class-panel block-panel py-5 lg:py-8 px-4 2xl:px-8">
            <div className="header">Class</div>

            <div className="float-right mb-4">
              <span className="preset-dropdown mr-2">
                <select
                  value={selectedPreset}
                  className="theme-select px-4 py-2"
                  onChange={(e) => setSelectedPreset(e.target.value)}
                >
                  <option value="Default">Presets</option>
                  <option value="Orbit1091">Orbit 1091</option>
                  <option value="Orbit923">Orbit 923</option>
                  <option value="Challenge A">Challenge A</option>
                  <option value="Challenge B">Challenge B</option>
                  <option value="Challenge C">Challenge C</option>
                  <option value="newset1">New Set 1</option>
                  <option value="newset2">New Set 2</option>
                  <option value="newset3">New Set 3</option>
                </select>
              </span>
              <button
                className="px-4 py-2 button-apply "
                onClick={handleApplyPreset}
              >
                Apply
              </button>
            </div>

            {isEditMode ? (
              <div className="text-slate-300 mt-2 text-lg ">
                Class Planet is the blueprint of creating planets!
              </div>
            ) : (
              <div className="text-slate-300 mt-2 text-lg ">
                Change the properties of each planet!
              </div>
            )}

            {isEditMode ? (
              <div className="edit-mode-A mb-8 clear-both grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="panel mt-10 mb-3">
                  <div
                    className="planet-block pt-14 pb-6"
                    style={{ backgroundColor: "#00000078" }}
                  >
                    <div className="orbit-tag text-slate-400">Orbit</div>
                    <div className="planet big planet-empty mb-6"></div>
                    <h4 className="text-xl font-bold mb-3 text-center text-white">
                      Class: Planet
                    </h4>
                    <div className="">
                      <div className="mx-auto w-fit text-slate-400 leading-7 ">
                        <div>
                          <img
                            className="inline-block mr-2"
                            src={clockIcon}
                            alt="Clock Icon"
                            width="14"
                            height="14"
                          />
                          Orbit Time
                        </div>
                        <div>
                          <img
                            className="inline-block mr-2"
                            src={directionIcon}
                            alt="Direction Icon"
                            width="14"
                            height="14"
                          />
                          Direction
                        </div>
                        <div>
                          <img
                            className="inline-block mr-2"
                            src={degreeIcon}
                            alt="Degree Icon"
                            width="14"
                            height="14"
                          />
                          Start Degree
                        </div>
                        <div className="block-jam blue inline-block mt-1">
                          <img
                            className="inline-block mr-2"
                            src={soundIcon}
                            alt="Sound Icon"
                            width="14"
                            height="14"
                          />
                          Play Sound
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {planets.map((planet, index) => (
                  <div className="panel mt-10 mb-3" key={planet.name}>
                    <div
                      className="planet-block pt-14 pb-6"
                      style={{ backgroundColor: "#00000078" }}
                    >
                      <div className="orbit-tag">{`${planet.period}`}</div>
                      <div className={`${planet.name} planet big mb-3`}> </div>
                      <h4 className="text-xl font-bold mb-3 text-center text-white">
                        {`${planet.name}`}
                      </h4>

                      <div className=" ">
                        <div className="mx-auto w-fit text-white ">
                          <div>
                            <div className=" leading-7  text-base">
                              <img
                                className="inline-block mr-2"
                                src={clockIcon}
                                alt="Tick Icon"
                                width="14"
                                height="14"
                              />

                              {updatedPlanets[index].interval}
                            </div>
                          </div>
                          <div>
                            <div className=" leading-7 text-base">
                              <img
                                className="inline-block mr-2"
                                src={directionIcon}
                                alt="Direction Icon"
                                width="14"
                                height="14"
                              />

                              {updatedPlanets[index].direction}
                            </div>
                          </div>
                          <div>
                            <div className=" leading-7 text-base">
                              <img
                                className="inline-block mr-2"
                                src={degreeIcon}
                                alt="Degree Icon"
                                width="14"
                                height="14"
                              />

                              {updatedPlanets[index].startPositionDeg}
                            </div>
                          </div>

                          <div
                            className={`block-jam inline-block mt-1 ${
                              updatedPlanets[index].drumNumber !== 0
                                ? "blue"
                                : "red"
                            }`}
                          >
                            <span className="text-base">
                              <img
                                className="inline-block mr-2"
                                src={soundIcon}
                                alt="Sound Icon"
                                width="14"
                                height="14"
                              />
                            </span>
                            <span className="text-lg ">
                              {updatedPlanets[index].drumNumber}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="edit-mode-B mb-5 clear-both">
                {planets.map((planet, index) => (
                  <div className="panel mb-1" key={planet.name}>
                    <div className="planet-block py-4 pr-7">
                      <div className="orbit-tag">{` ${planet.period}`}</div>

                      <div className="flex">
                        <div className="flex-none mr-4 w-[3rem] text-center">
                          <img
                            className="planet small"
                            src={`/image/${planet.name}.jpg`}
                            alt={planet.name}
                          />
                          <h4 className="text-slate-400 text-sm">{`${planet.name}`}</h4>
                        </div>
                        <div className="flex-1">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                            <div>
                              <div>
                                <span className="text-slate-400 text-sm">
                                  Orbit Time
                                </span>
                                <input
                                  className="inputNumber inputThous"
                                  type="number"
                                  value={updatedPlanets[index].interval}
                                  min="900"
                                  max="4000"
                                  onChange={(e) => {
                                    handleInputChange(
                                      index,
                                      "interval",
                                      Number(e.target.value)
                                    );
                                  }}
                                ></input>
                              </div>
                              <input
                                type="range"
                                className="slider"
                                value={updatedPlanets[index].interval}
                                min="900"
                                max="4000"
                                onChange={(e) => {
                                  handleInputChange(
                                    index,
                                    "interval",
                                    Number(e.target.value)
                                  );
                                }}
                              ></input>
                            </div>
                            <div>
                              <div>
                                <span className="text-slate-400 text-sm">
                                  Direction
                                </span>
                                <input
                                  className="inputNumber inputOnes"
                                  type="number"
                                  min="-1"
                                  max="1"
                                  value={updatedPlanets[index].direction}
                                  onChange={(e) => {
                                    handleInputChange(
                                      index,
                                      "direction",
                                      Number(e.target.value)
                                    );
                                  }}
                                ></input>
                                <select
                                  value={updatedPlanets[index].direction}
                                  onChange={(e) => {
                                    handleInputChange(
                                      index,
                                      "direction",
                                      Number(e.target.value)
                                    );
                                  }}
                                >
                                  <option value={1}>Clockwise</option>
                                  <option value={-1}>Counterclockwise</option>
                                </select>
                              </div>
                            </div>
                            <div>
                              <div>
                                <span className="text-slate-400 text-sm">
                                  Degree
                                </span>
                                <input
                                  className="inputNumber inputHuns"
                                  type="number"
                                  value={updatedPlanets[index].startPositionDeg}
                                  min="0"
                                  max="360"
                                  onChange={(e) => {
                                    handleInputChange(
                                      index,
                                      "startPositionDeg",
                                      Number(e.target.value)
                                    );
                                  }}
                                ></input>
                                <input
                                  type="range"
                                  className="slider"
                                  value={updatedPlanets[index].startPositionDeg}
                                  min="0"
                                  max="360"
                                  onChange={(e) => {
                                    handleInputChange(
                                      index,
                                      "startPositionDeg",
                                      Number(e.target.value)
                                    );
                                  }}
                                ></input>
                              </div>
                            </div>
                            <div
                              className={`block-jam inline-block ${
                                updatedPlanets[index].drumNumber !== 0
                                  ? "blue"
                                  : "red"
                              }`}
                            >
                              <div className="inline-block">
                                <span className="text-slate-400 text-sm">
                                  Play Sound
                                </span>
                                <input
                                  className="inputNumber inputOnes"
                                  type="number"
                                  value={updatedPlanets[index].drumNumber}
                                  min="0"
                                  max="9"
                                  onChange={(e) => {
                                    handleInputChange(
                                      index,
                                      "drumNumber",
                                      Number(e.target.value)
                                    );
                                  }}
                                ></input>
                              </div>
                              <select
                                className="inline-block"
                                value={updatedPlanets[index].drumNumber}
                                onChange={(e) => {
                                  handleInputChange(
                                    index,
                                    "drumNumber",
                                    Number(e.target.value)
                                  );
                                }}
                              >
                                <option value={0}>Null</option>
                                <option value={1}>Kick</option>
                                <option value={2}>Snare</option>
                                <option value={3}>Crash Cymbal</option>
                                <option value={4}>Ride Cymbal</option>
                                <option value={5}>High Hat 1</option>
                                <option value={6}>High Hat 2</option>
                                <option value={7}>Low Tom</option>
                                <option value={8}>Mid Tom</option>
                                <option value={9}>High Tom</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {isEditMode ? (
              <div className="flex justify-between mb-4">
                <button
                  className={`button-jam md blue mr-4`}
                  onClick={toggleEditMode}
                >
                  Edit the Planets!
                </button>
                <button
                  className={`button-jam  md yellow `}
                  onClick={handleSunButtonClick}
                >
                  {" "}
                  Refresh Animation
                  <div className="planet small sun mx-4"></div>
                </button>
              </div>
            ) : (
              <div className="mb-4 flex justify-between ">
                <button
                  className={`button-jam md border`}
                  onClick={toggleEditMode}
                >
                  Back
                </button>
                <button
                  className={`button-jam md yellow `}
                  onClick={handleSunButtonClick}
                >
                  {" "}
                  Refresh Animation
                  <div className="planet small sun mx-4"></div>
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Spacejam;
