function createSettings(name, period, interval, direction, startPositionDeg, drumNumber) {
  return {
    name,
    period,
    interval,
    direction,
    startPositionDeg,
    drumNumber,
  };
}

export const defaultSet = [
  createSettings("Mercury", 1, 2000, 1, 0, 1),
  createSettings("Venus", 2, 2300, -1, 24, 2),
  createSettings("Earth", 3, 2500, 1, 48, 3),
  createSettings("Mars", 4, 2700, -1, 72, 4),
  createSettings("Jupiter", 5, 2900, 1, 24, 5),
  createSettings("Saturn", 6, 3200, -1, 48, 6),
  createSettings("Uranus", 7, 3500, 1, 72, 7),
];

export const challengeA = [
  createSettings("Mercury", 1, 1000, 1, 0, 1),
  createSettings("Venus", 2, 1000, 1, 180, 1),
  createSettings("Earth", 3, 1000, 1, 80, 4),
  createSettings("Mars", 4, 2000, 1, 130, 2),
  createSettings("Jupiter", 5, 1000, 1, 0, 3),
  createSettings("Saturn", 6, 1000, 1, 270, 5),
  createSettings("Uranus", 7, 4000, 1, 0, 0),
];

export const challengeB = [
  createSettings("Mercury", 1, 1200, 1, 0, 1),
  createSettings("Venus", 2, 1200, 1, 180, 2),
  createSettings("Earth", 3, 2400, 1, 135, 1),
  createSettings("Mars", 4, 1200, 1, 0, 4),
  createSettings("Jupiter", 5, 1200, 1, 80, 5),
  createSettings("Saturn", 6, 4000, 1, 0, 0),
  createSettings("Uranus", 7, 4000, 1, 0, 0),
];

export const Orbit1091 = [
  createSettings("Mercury", 1, 1091, 1, 0, 1),
  createSettings("Venus", 2, 1091, 1, 180, 5),
  createSettings("Earth", 3, 1091, 1, 90, 4),
  createSettings("Mars", 4, 2182, 1, 270, 2),
  createSettings("Jupiter", 5, 2182, 1, 0, 9),
  createSettings("Saturn", 6, 4000, 1, 0, 0),
  createSettings("Uranus", 7, 4000, 1, 0, 0),
];

export const Orbit923 = [
  createSettings("Mercury", 1, 923, 1, 0, 1),
  createSettings("Venus", 2, 923, 1, 180, 2),
  createSettings("Earth", 3, 923, 1, 90, 5),
  createSettings("Mars", 4, 923, 1, 270, 4),
  createSettings("Jupiter", 5, 3692, 1, 340, 3),
  createSettings("Saturn", 6, 4000, 1, 0, 0),
  createSettings("Uranus", 7, 4000, 1, 0, 0),
];