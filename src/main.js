//import $ from 'jquery';
import { Age } from './age';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


let birthday = new Date("Oct 28, 1987 00:00:00");
let lifeExpectancy = 75

const newSolarAge = new Age(birthday, lifeExpectancy);

document.getElementById("test7").innerHTML = "Date of Birth: " + newSolarAge.displayDate();

document.getElementById("test").innerHTML = "life expectancy " + newSolarAge.displayExpected() + " (Earth Years)";

document.getElementById("test6").innerHTML = "Current Age: " + newSolarAge.earthAge() + " (Earth Years)";

document.getElementById("test1").innerHTML = "Earth: Age " + newSolarAge.earthAge() + "</br>" + newSolarAge.expectedEarth();

document.getElementById("test2").innerHTML = "Mercury: Age " + newSolarAge.mercuryAge() + "</br>" + newSolarAge.expectedMercury();

document.getElementById("test3").innerHTML = "Venus: Age " + newSolarAge.venusAge() + "</br>" + newSolarAge.expectedVenus();

document.getElementById("test4").innerHTML = "Mars: Age " + newSolarAge.marsAge() + "</br>" + newSolarAge.expectedMars();

document.getElementById("test5").innerHTML = "Jupiter: Age " + newSolarAge.jupiterAge() + "</br>" + newSolarAge.expectedJupiter();
//document.getElementById("test6").innerHTML = newSolarAge.expectedEarthAge()
