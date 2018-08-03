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
    const ageMercury = Math.floor(this.earthAge() / .24);
    return ageMercury;
  }
  venusAge() {
    const ageVenus = Math.floor(this.earthAge() / .62);
    return ageVenus;
  }
  marsAge() {
    const ageMars = Math.floor(this.earthAge() * 1.88);
    return ageMars;
  }
  jupiterAge() {
    const ageJupiter = Math.floor(this.earthAge() * 11.86);
    return ageJupiter;
  }

}
