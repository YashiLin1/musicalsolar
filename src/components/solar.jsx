//solar.jsx
import { useEffect, useState } from "react";
import "./spacejam.css";
import DisplayPanel from "./PanelData";
import drumSounds from "./presets/drumSounds";

const gap = 49;
const radius = 74; // radius of the orbit of the closest period
const debounceDelay = 150;
const lastPlayedTimestamps = {};

function Solar({
  planetSettings,
  soundOn,
  handleSunButtonClick,
  stringDegree,
}) {
  const [frameInterval, setframeInterval] = useState(0.05);
  const handleframeIntervalChange = (event) => {
    const newframeInterval = parseFloat(event.target.value);
    setframeInterval(newframeInterval);
  };

  const [planetDegrees, setPlanetDegrees] = useState({
    moveMercury: 0,
    moveVenus: 0,
    moveEarth: 0,
    moveMars: 0,
    moveJupiter: 0,
    moveSaturn: 0,
    moveUranus: 0,
  });

  const [planetRadians, setPlanetRadians] = useState({
    moveMercury: 0,
    moveVenus: 0,
    moveEarth: 0,
    moveMars: 0,
    moveJupiter: 0,
    moveSaturn: 0,
    moveUranus: 0,
  });

  const playSound = (soundPath) => {
    const audio = new Audio(soundPath);
    audio.currentTime = 0;
    audio.play();
  };

  const getPosition = (settings, currentTime) => {
    const angle = getRadian(settings, currentTime);
    return {
      x: Math.round(settings.center.x + settings.radius * Math.cos(angle)),
      y: Math.round(settings.center.y + settings.radius * Math.sin(angle)),
    };
  };

  const getRadian = (settings, currentTime) => {
    const angle =
      (currentTime / settings.interval) * 2 * Math.PI * settings.direction -
      settings.startPositionRad;
    const radian = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    return radian;
  };

  const getDegree = (settings, currentTime) => {
    const direction = settings.direction;
    const startPositionDeg = settings.startPositionDeg;
    let degree = ((currentTime / settings.interval) * 360) % 360;
    if (direction === -1) {
      degree = 360 - degree;
    }
    degree -= startPositionDeg;
    if (degree < 0) {
      degree += 360;
    }
    return degree;
  };

  const animatePlanet = (id, settings) => {
    const el = document.getElementById(id);
    const startTime = new Date().getTime();
    const width = el.offsetWidth;
    const height = el.offsetHeight;
    if (el["#system"] !== null) cleanUp(id);
    if (!settings.startPositionRad) {
      settings.startPositionRad = (settings.startPositionDeg / 180) * Math.PI;
    }
    el["#system"] = setInterval(() => {
      let currentTime = new Date().getTime() - startTime;
      let pos = getPosition(settings, currentTime);
      el.style.left = pos.x - Math.round(width / 2) + "px";
      el.style.top = pos.y - Math.round(height / 2) + "px";

      let degrees = getDegree(settings, currentTime);
      setPlanetDegrees((prevDegrees) => ({ ...prevDegrees, [id]: degrees }));

      let radians = getRadian(settings, currentTime);
      setPlanetRadians((prevRadians) => ({ ...prevRadians, [id]: radians }));
    }, frameInterval);
  };

  const cleanUp = (id) => {
    const el = document.getElementById(id);
    if (el["#system"] === null) return;
    clearInterval(el["#system"]);
    el["#system"] = null;
  };

  useEffect(() => {
    planetSettings.forEach((planet) => {
      const planetName = `move${planet.name}`;
      cleanUp(planetName);
    });

    planetSettings.forEach((planet, index) => {
      const planetName = `move${planet.name}`;
      const planetAnimationSettings = {
        center: { x: radius + gap * index, y: radius + gap * index },
        radius: radius + gap * index,
        interval: planet.interval,
        direction: planet.direction,
        startPositionDeg: planet.startPositionDeg,
        drum: planet.drumNumber,
      };
      animatePlanet(planetName, planetAnimationSettings);
    });

    return () => {
      planetSettings.forEach((planet) => {
        const planetName = `move${planet.name}`;
        cleanUp(planetName);
      });
    };
  }, [planetSettings]);

  useEffect(() => {
    for (const planetSetting of planetSettings) {
      const planetName = `move${planetSetting.name}`;
      const degree = planetDegrees[planetName];

      if (
        degree > stringDegree &&
        degree < stringDegree + 2.8 &&
        soundOn &&
        planetSetting.drumNumber !== 0
      ) {
        const matchingDrumSound = drumSounds.find(
          (drumSound) => drumSound.drum === planetSetting.drumNumber
        );

        const currentTime = Date.now();
        const lastPlayedTimestamp =
          lastPlayedTimestamps[planetSetting.drumNumber];

        if (
          !lastPlayedTimestamp ||
          currentTime - lastPlayedTimestamp >= debounceDelay
        ) {
          playSound(matchingDrumSound.soundPath);
          lastPlayedTimestamps[planetSetting.drumNumber] = currentTime;
        }
      }
    }
  }, [planetDegrees, planetSettings, soundOn]);

  return (
    <div className="z-10">
      <div className="mb-2 text-base">
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
              d="M532.042 0C372.404 0 269.006 65.406 187.828 182.052c-14.726 21.16-10.186 50.172 10.356 65.748l86.276 65.418c20.746 15.73 50.264 12.052 66.506-8.296 50.098-62.762 87.26-98.898 165.514-98.898 61.528 0 137.632 39.598 137.632 99.262 0 45.104-37.234 68.268-97.986 102.328-70.846 39.72-164.598 89.152-164.598 212.81V640c0 26.51 21.49 48 48 48h144.942c26.51 0 48-21.49 48-48v-11.546c0-85.72 250.536-89.29 250.536-321.254C883.008 132.512 701.804 0 532.042 0zM512 746.918c-76.392 0-138.542 62.15-138.542 138.542 0 76.39 62.15 138.54 138.542 138.54s138.542-62.15 138.542-138.542-62.15-138.54-138.542-138.54z"
              fill="#5bba74"
            ></path>
          </svg>
        </span>
        <span className="text-white ">Refresh Time (ms): </span>
        <input
          className="inputNumber inputThous"
          type="number"
          step="0.01"
          min="0.01"
          max="1000"
          value={frameInterval}
          onChange={handleframeIntervalChange}
        />
      </div>
      <DisplayPanel
        planetSettings={planetSettings}
        planetDegrees={planetDegrees}
        planetRadians={planetRadians}
      />

      <div className="text-xl text-center text-gray-200 max-w-3xl leading-[2.4rem]">
 
        Click
        <div className="planet small sun mx-4"></div>
        in the middle to update the animation!
      </div>

      <div className="galaxy-body">
        <div
          className="milkyWay"
          style={{
            width: `${(radius + gap * 7) * 2}px`,
            height: `${(radius + gap * 7) * 2}px`,
          }}
        >
          <div
            className="string"
            style={{ transform: `rotate(${stringDegree}deg)` }}
          >
            <div className="string-text">String {stringDegree}°</div>
          </div>
          <div className="sun-container">
            <button className="sun" onClick={handleSunButtonClick}></button>
          </div>
          {planetSettings.map((planet, index) => (
            <div
              className="orbit"
              key={index}
              style={{
                width: `${(radius + gap * index) * 2}px`,
                height: `${(radius + gap * index) * 2}px`,
              }}
            ></div>
          ))}

          {planetSettings.map((planet, index) => (
            <div
              className="orbitPlanet"
              key={index}
              style={{
                width: `${(radius + gap * index) * 2}px`,
                height: `${(radius + gap * index) * 2}px`,
              }}
            >
              <div
                id={`move${planet.name}`}
                className={`planet ${planet.name}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Solar;
