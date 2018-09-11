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
  const list = document.createElement('ol');
  // list.classList.add("list");
  list.id = "list";
  const keys = Object.keys(planet);
  for (let i = 0; i < keys.length-1; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${keys[i].toUpperCase()}:  ${planet[keys[i]]}`
    listItem.classList.add("list-item");
    list.appendChild(listItem);
  }
  const image = document.createElement('img');
  image.classList.add("list-image");
  image.src = planet["image"];

  const parentElement = document.querySelector('section.planet-details');
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  parentElement.appendChild(list);
  parentElement.appendChild(image);
};

module.exports = ResultView;
