import $ from 'jquery';
import { Age } from './age';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';



let birthday = new Date("Oct 28, 1987 00:00:00");

const newSolarAge = new Age(birthday);

document.getElementById("test1").innerHTML = "Earth: " + newSolarAge.earthAge();
document.getElementById("test2").innerHTML = "Mercury: " + newSolarAge.mercuryAge();
document.getElementById("test3").innerHTML = "Venus: " + newSolarAge.venusAge();
document.getElementById("test4").innerHTML = "Mars: " + newSolarAge.marsAge();
document.getElementById("test5").innerHTML = "Jupiter: " + newSolarAge.jupiterAge();
