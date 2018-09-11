const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('Planet:details', (event) => {
    const planet = event.detail;
    this.render(planet);
  });
};

ResultView.prototype.render = function(planet){
  const infoParagraph = document.createElement('p');
  // infoParagraph.textContent = `The ${planet.name}, of class '${animal.class}', has a maximum speed of ${animal.maxSpeed} km/h.`;
  infoParagraph.textContent = JSON.stringify(planet); //planet.name;//.toString();
  const parentElement = document.querySelector('section.planet-details');
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  parentElement.appendChild(infoParagraph);
};

module.exports = ResultView;
