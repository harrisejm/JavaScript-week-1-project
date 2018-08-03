import $ from 'jquery';
import { Age } from './age';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';



let birthday = new Date("Oct 28, 1987 00:00:00");

const newSolarAge = new Age(birthday);
document.getElementById("test").innerHTML = "life expectancy 75 (Earth Years)"
document.getElementById("test1").innerHTML = "Earth: Age " + newSolarAge.earthAge() + "</br>" + newSolarAge.expectedEarth() + " Earth years to live";

document.getElementById("test2").innerHTML = "Mercury: Age " + newSolarAge.mercuryAge() + "</br>" + newSolarAge.expectedMercury() + " Mercury years to live";

document.getElementById("test3").innerHTML = "Venus: Age " + newSolarAge.venusAge() + "</br>" + newSolarAge.expectedVenus() + " Venus years to live";

document.getElementById("test4").innerHTML = "Mars: Age " + newSolarAge.marsAge() + "</br>" + newSolarAge.expectedMars() + " Mars years to live";

document.getElementById("test5").innerHTML = "Jupiter: Age " + newSolarAge.jupiterAge() + "</br>" + newSolarAge.expectedJupiter() + " Jupiter years to live";
//document.getElementById("test6").innerHTML = newSolarAge.expectedEarthAge()
