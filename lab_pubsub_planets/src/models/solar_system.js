const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('Planet:clicked', (event) => {
    const clickedPlanet = event.detail;
    console.log("about to get planet details", event.detail);
    const planetDetails = this.getPlanetDetails(clickedPlanet);
    console.log("got planet details", planetDetails);
    this.publishPlanetDetails(planetDetails);
  });
};

SolarSystem.prototype.getPlanetDetails = function(clickedPlanet){
  console.log("this.planets:", this.planets);
  console.log("clickedPlanet:", clickedPlanet);
  console.log("name:", this.planets[0].name);
  const selectedPlanet = this.planets.find((planet) => {return planet.name === clickedPlanet;});
  console.log("selectedPlanet:", selectedPlanet);
  return selectedPlanet;
};

SolarSystem.prototype.publishPlanetDetails = function(planetDetails){
  PubSub.publish('Planet:details', planetDetails);
};

module.exports = SolarSystem;
