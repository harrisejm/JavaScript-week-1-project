export class Age {
  constructor(birthday) {
    this.birthday = birthday;
    this.ageExpectedLife = 75;
  }
  ////
  earthAge() {
    const currentDate = new Date();
    const ageEarth = Math.floor((currentDate.getTime() - this.birthday) / 31556900000);
    return ageEarth;
  }
  expectedEarth(){
    const remaining = this.ageExpectedLife - this.earthAge();
    return remaining;
  }
//////
  mercuryAge() {
    const ageMercury = Math.floor(this.earthAge() / .24);
    return ageMercury;
  }
  expectedMercury() {
  const ageMercuryExpected = Math.floor(this.expectedEarth() / .24);
   return ageMercuryExpected;
  }
//////
  venusAge() {
    const ageVenus = Math.floor(this.earthAge() / .62);
    return ageVenus;
  }
  expectedVenus() {
  const ageVenusExpected = Math.floor(this.expectedEarth()/ .62);
  return ageVenusExpected;
  }
///
  marsAge() {
    const ageMars = Math.floor(this.earthAge() * 1.88);
    return ageMars;
  }
  expectedMars() {
  const ageMarsExpected = Math.floor(this.expectedEarth() * 1.88);
  return ageMarsExpected;
  }
///
  jupiterAge() {
    const ageJupiter = Math.floor(this.earthAge() * 11.86);
    return ageJupiter;
  }
  expectedJupiter() {
  const ageJupiterExpected = Math.floor(this.expectedEarth() * 11.86);

  return ageJupiterExpected;
  }
///
}
