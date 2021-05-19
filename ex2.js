class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  information() {
    console.log(` ${this.name} , ${this.age} years old.`);
  }
}

const person1 = new Person("Gary", 45);
person1.information();

///////########### 2

class Clock {
  constructor({ template }, timer) {
    this.timer = timer;
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {}

  start() {
    ;
  }
}

////////////########## 3

class Tv {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  incVolume() {
    // increase the volume
    if (this.volume < 100) {
      this.volume++;
      console.log(this.volume);
    } else {
      console.log("Loud sound");
    }
  }
  decVolume() {
    // decrease the volume
    if (this.volume > 0) {
      this.volume--;
      console.log(this.volume);
    } else {
      console.log("No sound");
    }
  }
  rest() {
    // volume and channel
    this.channel = 1;
    this.volume = 50;
  }
  randomChannel() {
    // max 50
    this.channel = Math.floor(Math.random() * 50) + 1;
    console.log(`you are watching channel ${this.channel}`);
  }
  display() {
    return `This Tv ${this.brand}, had ${this.channel} channels and the volume is on ${this.volume}`;
  }
}

const samsung = new Tv("SAMSUNG");
console.log(samsung);
samsung.incVolume();
samsung.decVolume();

const panasonic = new Tv("Panasonic", 30, 100);
console.log(panasonic);
panasonic.randomChannel();
