const PubSub = require('../helpers/pub_sub.js');

const NavView = function(){
};

NavView.prototype.bindEvents = function(){
  const nav = document.querySelector('ol');
  console.log('got list');
  nav.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('list clicked', event.target.id);
    const selectedPlanet = event.target.id;
    PubSub.publish('Planet:clicked', selectedPlanet);
  });
};

module.exports = NavView;
