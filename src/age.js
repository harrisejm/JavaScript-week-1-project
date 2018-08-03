export class Age {
  constructor(birthday) {
    this.birthday = birthday;
  }
  earthAge() {
    const currentDate = new Date();
    const ageEarth = Math.floor((currentDate.getTime() - this.birthday) / 31556900000);
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
