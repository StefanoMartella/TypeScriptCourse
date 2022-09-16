interface City {
  name: string;
}

interface Coords {
  latitude: number;
  longitude: number;
}

interface CityWithCoords extends City {
  coords: Coords;
}

const montreal: CityWithCoords = {
  coords: {
    latitude: 42.332,
    longitude: -73.324,
  },
  name: "Montréal",
};

const tampa: CityWithCoords = {
  coords: {
    latitude: 27.9478,
    longitude: -82.4584,
  },
  name: "Tampa",
};

function getCityInfo(city: CityWithCoords) {
  const coords = `(${city.coords.latitude.toFixed(
    3
  )}, ${city.coords.longitude.toFixed(3)})`;
  return `${city.name.toUpperCase()} is located at ${coords}.`;
}

console.log(`${getCityInfo(montreal)} \n\n ${getCityInfo(tampa)}`);
