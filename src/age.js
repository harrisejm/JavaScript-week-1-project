export class Age {
  constructor(age, currentDate) {
    this.age = age;
    this.currentDate = currentDate;

  }
  earthAge() {
    const ageEarth = this.currentDate - this.age;
    return ageEarth;
  }
  mercuryAge() {
    const ageMercury = this.earthAge() / .24;
    return ageMercury;
  }
  venusAge() {
    const ageVenus = this.earthAge() / .62;
    return ageVenus;
  }

}
}
