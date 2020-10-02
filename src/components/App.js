import React from 'react';
import { animals } from '../constants/animals';
import './App.css';
import dolphinImg from '../images/dolphin.jpg';
import lobsterImg from '../images/lobster.jpg';
import ocean from '../images/ocean.jpg';
import starfishImg from '../images/starfish.jpg';

const animalsImgs = {
  dolphin: dolphinImg,
  lobster: lobsterImg,
  starfish: starfishImg
}
const title = '';
const showBackground = true;
const images = [];
const background = (
  <img 
    className="background" 
    alt="ocean"
    src={ocean}
  />
);

for(const animal in animals){
  images.push(
    <img 
      className="animal"
      alt={animal}
      src={animalsImgs[animal]}
      key={animal}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  ) 
}

function displayFact(e){
  const animal = e.target.alt;
  const animalFacts = animals[animal].facts;
  const animalMaxIndex =  animalFacts.length - 1;
  const randomIndex = Math.floor(Math.random()*animalMaxIndex) + 1;
  const animalFact = animalFacts[randomIndex];
  document.getElementById('fact').innerHTML = animalFact;
}


// Component
const App = () => (
  <div>    
    <h1>
      {title !== '' ? title : 'Click an animal for a fun fact'} 
    </h1>
    {showBackground && background}
    <div className="animals">
      {images}
    </div>
    <p id="fact"></p>
  </div>
);;

export default App;

