// Import React and useState
import { useState, useEffect } from "react";
import Solar from "./solar";
import "./control.css";
import "./spacejam.css";
import {
  defaultSet,
  challengeA,
  challengeB,
  Orbit1091,
  Orbit923,
  newset1,
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
    "Challenge A": challengeA,
    "Challenge B": challengeB,
    Orbit1091: Orbit1091,
    Orbit923: Orbit923,
    newset1: newset1,
  };

  const handleApplyPreset = () => {
    if (presetSettings[selectedPreset]) {
      setUpdatedPlanets([...presetSettings[selectedPreset]]);
    }
  };

  return (
    <section className="2xl:container 2xl:mx-auto mx-10 grid grid-cols-1 xl:grid-cols-2 gap-16 my-24 z-10">
      <div>
        <Solar
          planetSettings={planets}
          soundOn={soundOn}
          handleSunButtonClick={handleSunButtonClick}
          stringDegree={stringDegree}
        />
      </div>
      <div>
        <div className=" mb-14">
          <h1 className="text-5xl lg:text-7xl font-bold text-white text-gradient-1 mb-4 leading-relaxed lg:leading-relaxed">
            Compose Your Beats!
          </h1>
          <div className="text-xl font-light text-gray-200 max-w-3xl leading-[2.4rem] ">
            Explore Setup, Loop and Class.
          </div>
          <div className="text-xl font-light text-gray-200 max-w-3xl leading-[2.4rem] mb-20">
            Click
            <div className="planet small sun mx-4"></div>
            in the middle to update the animation!
          </div>
        </div>

        <div className=" mb-10">
          <div className="grid md:grid-cols-2 gap-5">
            <section className="block-section setup-section">
              <div className="setup-panel block-panel ">
                <div className="header">Setup</div>
                <div className="mb-4 text-lg ">
                  <span className="inline-block mr-2 align-middle">
                    <svg
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M950.848 128l0 640q0 28.576-19.424 50.848t-49.152 34.56-59.136 18.272-55.136 6.016-55.136-6.016-59.136-18.272-49.152-34.56-19.424-50.848 19.424-50.848 49.152-34.56 59.136-18.272 55.136-6.016q60 0 109.728 22.272l0-306.848-438.848 135.424 0 405.152q0 28.576-19.424 50.848t-49.152 34.56-59.136 18.272-55.136 6.016-55.136-6.016-59.136-18.272-49.152-34.56-19.424-50.848 19.424-50.848 49.152-34.56 59.136-18.272 55.136-6.016q60 0 109.728 22.272l0-552.576q0-17.728 10.848-32.288t28-20.288l475.424-146.272q6.848-2.272 16-2.272 22.848 0 38.848 16t16 38.848z"
                        fill="#5490ff"
                      ></path>
                    </svg>
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

                <div className="mb-4 text-lg ml-1">
                  <span className="inline-block mr-2">
                    <svg
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                    >
                      <path
                        d="M448.802236 872.404056l497.138714-646.456719c21.417134-27.849325 17.21996-68.608-9.374403-91.035848-26.594363-22.427848-65.515561-18.032415-86.932695 9.817932L392.734659 750.972168l-5.174164 6.340215L175.011002 456.701956c-20.968495-28.222339-59.814068-33.299417-86.764072-11.341669-26.948982 21.957749-31.799186 62.635689-10.83069 90.858028l248.9577 335.079984c31.427194 42.298762 90.24792 42.953836 122.429317 1.106779z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-white">
                    Draw <span style={{ color: "#da6e08" }}>String </span> at{" "}
                  </span>
                  <input
                    className="inputNumber inputHuns "
                    type="number"
                    step="1"
                    min="0"
                    max="359"
                    value={stringDegree}
                    onChange={handleStringDegreeChange}
                  />
                  <span className="text-white">degree</span>
                </div>
                <div className="mb-2 text-lg ml-1">
                  <span className="inline-block mr-2">
                    <svg
                      className="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                    >
                      <path
                        d="M448.802236 872.404056l497.138714-646.456719c21.417134-27.849325 17.21996-68.608-9.374403-91.035848-26.594363-22.427848-65.515561-18.032415-86.932695 9.817932L392.734659 750.972168l-5.174164 6.340215L175.011002 456.701956c-20.968495-28.222339-59.814068-33.299417-86.764072-11.341669-26.948982 21.957749-31.799186 62.635689-10.83069 90.858028l248.9577 335.079984c31.427194 42.298762 90.24792 42.953836 122.429317 1.106779z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-white">
                    Draw Star <div className="planet tiny sun mx-2"></div>
                    and Planets
                    <div className="planet tiny planet-empty mx-2"></div>
                  </span>
                </div>
              </div>
            </section>
            <section className="block-section loop-section text-white">
              <div className="loop-panel block-panel">
                <div className="header ">Loop</div>
                <div className="mb-4 text-lg">
                  Planet<div className="planet tiny planet-empty mx-2"></div>:
                  Orbit around star
                </div>

                <div className="mb-4 text-lg condition-panel">
                  <span className="mr-2 text-theme-blue condition">
                    Condition:
                  </span>
                  <span>If Planet Cross <span style={{ color: "#da6e08" }}>String </span>:</span>
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
          <div className="class-panel block-panel ">
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
                  <option value="newset1">New Set 1</option>
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
                  <div className="planet-block pt-14 pb-6">
                    <div className="orbit-tag text-slate-400">Orbit</div>
                    <div className="planet big planet-empty mb-6"></div>
                    <h4 className="text-xl font-bold mb-3 text-center text-white">
                      Class: Planet
                    </h4>
                    <div className="">
                      <div className="mx-auto w-fit text-slate-400 leading-7 ">
                        <div>
                          <svg
                            className="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="200"
                          >
                            <path
                              d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334C323.477333 170.666667 170.666667 323.477333 170.666667 512s152.810667 341.333333 341.333333 341.333333 341.333333-152.810667 341.333333-341.333333S700.522667 170.666667 512 170.666667z m0 106.666666a21.333333 21.333333 0 0 1 21.333333 21.333334v234.666666h170.666667a21.333333 21.333333 0 0 1 21.333333 21.333334v42.666666a21.333333 21.333333 0 0 1-21.333333 21.333334H469.333333a21.333333 21.333333 0 0 1-21.333333-21.333334V298.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h42.666667z"
                              fill="#5490ff"
                            ></path>
                          </svg>
                          Orbit Time
                        </div>
                        <div>
                          <svg
                            className="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M716.8 290.133333c-110.933333-102.4-281.6-106.666667-396.8-12.8S170.666667 537.6 247.466667 665.6c59.733333 106.666667 179.2 166.4 302.933333 149.333333s221.866667-102.4 256-221.866666c8.533333-34.133333 42.666667-51.2 76.8-42.666667 34.133333 8.533333 51.2 42.666667 42.666667 76.8-68.266667 226.133333-302.933333 354.133333-524.8 290.133333C174.933333 853.333333 42.666667 618.666667 106.666667 392.533333c42.666667-145.066667 153.6-256 298.666666-298.666666s298.666667 0 405.333334 102.4l81.066666-81.066667c8.533333-8.533333 21.333333-12.8 34.133334-8.533333 4.266667 12.8 12.8 21.333333 12.8 34.133333v264.533333c0 17.066667-12.8 29.866667-29.866667 29.866667h-260.266667c-12.8 0-25.6-8.533333-29.866666-17.066667s0-25.6 8.533333-34.133333l89.6-93.866667zM512 601.6c-46.933333 0-85.333333-38.4-85.333333-89.6s38.4-89.6 85.333333-89.6 85.333333 38.4 85.333333 89.6-38.4 89.6-85.333333 89.6z"
                              fill="#5490ff"
                            ></path>
                          </svg>
                          Direction
                        </div>
                        <div>
                          <svg
                            className="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M929.11 927.64h-831a32 32 0 0 1-28.4-46.74l414-797.42A32 32 0 0 1 540.5 113L150.82 863.64h778.29a32 32 0 0 1 0 64z"
                              fill="#5490ff"
                            ></path>
                            <path
                              d="M531.9 924.68a32 32 0 0 1-30.84-40.61c41.09-147.13-45.18-300.26-192.31-341.35A32 32 0 1 1 326 481.08a340.8 340.8 0 0 1 236.7 420.2 32 32 0 0 1-30.8 23.4z"
                              fill="#5490ff"
                            ></path>
                          </svg>
                          Start Degree
                        </div>
                        <div className="block-jam blue inline-block mt-1">
                          <svg
                            className="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M581.063111 113.777778a35.271111 35.271111 0 0 0-19.000889 5.745778l-230.286222 159.857777A28.103111 28.103111 0 0 1 315.676444 284.444444H113.550222A56.775111 56.775111 0 0 0 56.888889 341.333333v341.333334c0 31.402667 25.372444 56.888889 56.661333 56.888889h202.126222c5.802667 0 11.377778 1.763556 16.099556 5.063111l230.286222 159.857777a35.271111 35.271111 0 0 0 19.000889 5.745778c22.300444 0 42.496-22.755556 42.496-53.987555V167.822222c0-31.288889-20.195556-53.987556-42.496-53.987555zM510.236444 730.112l-135.793777-94.264889a56.661333 56.661333 0 0 0-32.199111-10.126222H198.599111a28.444444 28.444444 0 0 1-28.330667-28.444445v-170.666666a28.444444 28.444444 0 0 1 28.330667-28.444445h143.644445c11.491556 0 22.755556-3.527111 32.199111-10.126222l135.793777-94.264889v436.280889zM963.356444 500.565333c-4.892444-99.441778-86.129778-170.154667-142.620444-207.587555-26.737778-17.749333-62.236444-6.940444-75.377778 23.210666l-2.161778 4.892445a55.352889 55.352889 0 0 0 19.114667 67.925333c40.163556 26.908444 90.225778 70.940444 92.387556 117.475556 1.820444 38.456889-31.459556 83.512889-94.606223 129.137778a56.149333 56.149333 0 0 0-16.213333 72.533333l2.389333 4.266667c15.132444 27.022222 49.265778 35.498667 73.955556 17.749333 98.986667-71.168 147.114667-148.252444 143.132444-229.660445z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                          Play Sound
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {planets.map((planet, index) => (
                  <div className="panel mt-10 mb-3" key={planet.name}>
                    <div className="planet-block pt-14 pb-6">
                      <div className="orbit-tag">{`${planet.period}`}</div>
                      <div className={`${planet.name} planet big mb-3`}> </div>
                      <h4 className="text-xl font-bold mb-3 text-center text-white">
                        {`${planet.name}`}
                      </h4>

                      <div className=" ">
                        <div className="mx-auto w-fit text-white ">
                          <div>
                            <div className=" leading-7  text-base">
                              <svg
                                className="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="200"
                                height="200"
                              >
                                <path
                                  d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334C323.477333 170.666667 170.666667 323.477333 170.666667 512s152.810667 341.333333 341.333333 341.333333 341.333333-152.810667 341.333333-341.333333S700.522667 170.666667 512 170.666667z m0 106.666666a21.333333 21.333333 0 0 1 21.333333 21.333334v234.666666h170.666667a21.333333 21.333333 0 0 1 21.333333 21.333334v42.666666a21.333333 21.333333 0 0 1-21.333333 21.333334H469.333333a21.333333 21.333333 0 0 1-21.333333-21.333334V298.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h42.666667z"
                                  fill="#5490ff"
                                ></path>
                              </svg>

                              {updatedPlanets[index].interval}
                            </div>
                          </div>
                          <div>
                            <div className=" leading-7 text-base">
                              <svg
                                className="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M716.8 290.133333c-110.933333-102.4-281.6-106.666667-396.8-12.8S170.666667 537.6 247.466667 665.6c59.733333 106.666667 179.2 166.4 302.933333 149.333333s221.866667-102.4 256-221.866666c8.533333-34.133333 42.666667-51.2 76.8-42.666667 34.133333 8.533333 51.2 42.666667 42.666667 76.8-68.266667 226.133333-302.933333 354.133333-524.8 290.133333C174.933333 853.333333 42.666667 618.666667 106.666667 392.533333c42.666667-145.066667 153.6-256 298.666666-298.666666s298.666667 0 405.333334 102.4l81.066666-81.066667c8.533333-8.533333 21.333333-12.8 34.133334-8.533333 4.266667 12.8 12.8 21.333333 12.8 34.133333v264.533333c0 17.066667-12.8 29.866667-29.866667 29.866667h-260.266667c-12.8 0-25.6-8.533333-29.866666-17.066667s0-25.6 8.533333-34.133333l89.6-93.866667zM512 601.6c-46.933333 0-85.333333-38.4-85.333333-89.6s38.4-89.6 85.333333-89.6 85.333333 38.4 85.333333 89.6-38.4 89.6-85.333333 89.6z"
                                  fill="#5490ff"
                                ></path>
                              </svg>

                              {updatedPlanets[index].direction}
                            </div>
                          </div>
                          <div>
                            <div className=" leading-7 text-base">
                              <svg
                                className="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M929.11 927.64h-831a32 32 0 0 1-28.4-46.74l414-797.42A32 32 0 0 1 540.5 113L150.82 863.64h778.29a32 32 0 0 1 0 64z"
                                  fill="#5490ff"
                                ></path>
                                <path
                                  d="M531.9 924.68a32 32 0 0 1-30.84-40.61c41.09-147.13-45.18-300.26-192.31-341.35A32 32 0 1 1 326 481.08a340.8 340.8 0 0 1 236.7 420.2 32 32 0 0 1-30.8 23.4z"
                                  fill="#5490ff"
                                ></path>
                              </svg>

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
                              <svg
                                className="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M581.063111 113.777778a35.271111 35.271111 0 0 0-19.000889 5.745778l-230.286222 159.857777A28.103111 28.103111 0 0 1 315.676444 284.444444H113.550222A56.775111 56.775111 0 0 0 56.888889 341.333333v341.333334c0 31.402667 25.372444 56.888889 56.661333 56.888889h202.126222c5.802667 0 11.377778 1.763556 16.099556 5.063111l230.286222 159.857777a35.271111 35.271111 0 0 0 19.000889 5.745778c22.300444 0 42.496-22.755556 42.496-53.987555V167.822222c0-31.288889-20.195556-53.987556-42.496-53.987555zM510.236444 730.112l-135.793777-94.264889a56.661333 56.661333 0 0 0-32.199111-10.126222H198.599111a28.444444 28.444444 0 0 1-28.330667-28.444445v-170.666666a28.444444 28.444444 0 0 1 28.330667-28.444445h143.644445c11.491556 0 22.755556-3.527111 32.199111-10.126222l135.793777-94.264889v436.280889zM963.356444 500.565333c-4.892444-99.441778-86.129778-170.154667-142.620444-207.587555-26.737778-17.749333-62.236444-6.940444-75.377778 23.210666l-2.161778 4.892445a55.352889 55.352889 0 0 0 19.114667 67.925333c40.163556 26.908444 90.225778 70.940444 92.387556 117.475556 1.820444 38.456889-31.459556 83.512889-94.606223 129.137778a56.149333 56.149333 0 0 0-16.213333 72.533333l2.389333 4.266667c15.132444 27.022222 49.265778 35.498667 73.955556 17.749333 98.986667-71.168 147.114667-148.252444 143.132444-229.660445z"
                                  fill="#ffffff"
                                ></path>
                              </svg>
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
                    <div className="planet-block p-4 pr-7">
                      <div className="orbit-tag">{` ${planet.period}`}</div>

                      <div className="flex">
                        <div className="flex-none mr-4 w-[3rem] text-center">
                          <img
                            className="planet small"
                            src={`/image/${planet.name}.jpg`}
                            alt={planet.name}
                          />
                          <h4 className=" text-theme-blue text-sm">{`${planet.name}`}</h4>
                        </div>
                        <div className="flex-1">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                            <div>
                              <div>
                                Orbit Time
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
                                Direction
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
                                Degree
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
                                Play Sound
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

            <div className="text-center mb-4">
              <button
                className={`button-jam md ${isEditMode ? "blue" : "border"}`}
                onClick={toggleEditMode}
              >
                {isEditMode ? "Edit the Planets!" : "Exit Edit Mode"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Spacejam;
