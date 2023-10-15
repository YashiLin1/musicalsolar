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
  refreshTime,
  stringDegree,
}) {
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
    }, refreshTime);
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
        degree < stringDegree + 2.5 &&
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
      <DisplayPanel
        planetSettings={planetSettings}
        planetDegrees={planetDegrees}
        planetRadians={planetRadians}
      />
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
