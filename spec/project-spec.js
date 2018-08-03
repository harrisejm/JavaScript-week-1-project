import { Age } from './../src/age.js';



describe('age', function() {

  let birthday = new Date("Oct 28, 1987 00:00:00");

  const newSolarAge = new Age(birthday);

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

});
