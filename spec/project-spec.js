import { Age } from './../src/age.js';



describe('age', function() {

  let birthday = new Date("Oct 28, 1987 00:00:00");

  const newSolarAge = new Age(birthday, 75);
  const newSolarAgeLow = new Age(birthday, 20);


  it('should test if age in correctly calculated in earth years', function() {
  expect(newSolarAge.earthAge()).toEqual(30);
  });

  it('should test if age in correctly calculated in Mercury years', function() {
  expect(newSolarAge.mercuryAge()).toEqual(125);
  });

  it('should test if age in correctly calculated in Venus years', function() {
  expect(newSolarAge.venusAge()).toEqual(48);
  });

  it('should test if age in correctly calculated in Mars years', function() {
  expect(newSolarAge.marsAge()).toEqual(56);
  });

  it('should test if age in correctly calculated in Jupiter years', function() {
  expect(newSolarAge.jupiterAge()).toEqual(355);
  });

/////////


///
  it('should test if life expectancy (of 75 Earth years) in correctly calculated in Earth years', function() {
  expect(newSolarAge.expectedEarth()).toEqual("45 Earth years to live");
  });
  it('should test if life expectancy (of 20 Earth years) in correctly calculated in Earth years when age (30 Earth years) is past expectancy', function() {
  expect(newSolarAgeLow.expectedEarth()).toEqual("You have lived 10 years past your live expectancy");
  });
////
  it('should test if life expectancy (of 75 Earth years) in correctly calculated in Mercury years', function() {
  expect(newSolarAge.expectedMercury()).toEqual("187 Mercury years to live");
  });
  it('should test if life expectancy (of 20 Earth years) in correctly calculated in Mercury years when age (30 Earth years) is past expectancy', function() {
  expect(newSolarAgeLow.expectedMercury()).toEqual("You have lived 42 years past your live expectancy");
  });
////
  it('should test if life expectancy (of 75 Earth years) in correctly calculated in Venus years', function() {
  expect(newSolarAge.expectedVenus()).toEqual("72 Venus years to live");
  });
  it('should test if life expectancy (of 20 Earth years) in correctly calculated in Venus years when age (30 Earth years) is past expectancy', function() {
  expect(newSolarAgeLow.expectedVenus()).toEqual("You have lived 17 years past your live expectancy");
  });
////
  it('should test if life expectancy (of 75 Earth years) in correctly calculated in Mars years', function() {
  expect(newSolarAge.expectedMars()).toEqual("84 Mars years to live");
  });
  it('should test if life expectancy (of 20 Earth years) in correctly calculated in Mars years when age (30 Earth years) is past expectancy', function() {
  expect(newSolarAgeLow.expectedMars()).toEqual("You have lived 19 years past your live expectancy");
  });
////
  it('should test if life expectancy (of 75 Earth years) in correctly calculated in Jupiter years', function() {
  expect(newSolarAge.expectedJupiter()).toEqual("533 Jupiter years to live");
  });
  it('should test if life expectancy (of 20 Earth years) in correctly calculated in Jupiter years when age (30 Earth years) is past expectancy', function() {
  expect(newSolarAgeLow.expectedJupiter()).toEqual("You have lived 119 years past your live expectancy");
  });

});
