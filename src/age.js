export class Age {
  constructor(birthday, ageExpectedLife) {
    this.birthday = birthday;
    this.ageExpectedLife = ageExpectedLife;
  }

  displayExpected(){
    return this.ageExpectedLife;
  }
  
  displayDate(){
    return this.birthday
  }

  earthAge() {
    const currentDate = new Date();
    const ageEarth = Math.floor((currentDate.getTime() - this.birthday) / 31556900000);
    return ageEarth;
  }
  expectedEarth(){
    const remaining = this.ageExpectedLife - this.earthAge();
    if (remaining >= 0) {
      return remaining + " Earth years to live";
    } else {
      return "You have lived " + Math.abs(remaining) + " years past your live expectancy";
    }
  }
  expected(){
    return this.ageExpectedLife - this.earthAge();
  }

  mercuryAge() {
    const ageMercury = Math.floor(this.earthAge() / .24);
    return ageMercury;
  }
  expectedMercury() {
    const ageMercuryExpected = Math.floor(this.expected() / .24);
    if (ageMercuryExpected >= 0) {
      return ageMercuryExpected + " Mercury years to live";
    } else {
      return "You have lived " + Math.abs(ageMercuryExpected) + " years past your live expectancy";
    }
  }

  venusAge() {
    const ageVenus = Math.floor(this.earthAge() / .62);
    return ageVenus;
  }

  expectedVenus() {
    const ageVenusExpected = Math.floor(this.expected()/ .62);
    if (ageVenusExpected >= 0) {
      return ageVenusExpected + " Venus years to live";
    } else {
      return "You have lived " + Math.abs(ageVenusExpected) + " years past your live expectancy";
    }
  }

  marsAge() {
    const ageMars = Math.floor(this.earthAge() * 1.88);
    return ageMars;
  }
  expectedMars() {
    const ageMarsExpected = Math.floor(this.expected() * 1.88);
    if (ageMarsExpected >= 0) {
      return ageMarsExpected + " Mars years to live";
    } else {
      return "You have lived " + Math.abs(ageMarsExpected) + " years past your live expectancy";
    }
  }

  jupiterAge() {
    const ageJupiter = Math.floor(this.earthAge() * 11.86);
    return ageJupiter;
  }

  expectedJupiter() {
    const ageJupiterExpected = Math.floor(this.expected() * 11.86);
    if (ageJupiterExpected >= 0) {
      return ageJupiterExpected + " Jupiter years to live";
    } else {
      return "You have lived " + Math.abs(ageJupiterExpected) + " years past your live expectancy";
    }
  }

}
