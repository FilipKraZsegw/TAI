console.log("--------------------Zadanie 1--------------------");
const rectangle = {
  height: 20,
  width: 8,
  showArea: function() {
    return this.height * this.width;
  }
};

const circle = {
  radius: 12,
  showArea: function() {
    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(rectangle);
console.log(circle);

console.log(`Kwadrat ma szerokość ${rectangle.width} i wysokość ${rectangle.height}`);
console.log(`Jego pole to ${rectangle.showArea()}`);

console.log(`\nKoło ma promień ${circle.radius}`);
console.log(`Jego pole to ${circle.showArea().toFixed(2)}`);

console.log("--------------------Zadanie 2--------------------");
const currentUser = {
  name: "Jan",
  surname: "Kowalski",
  email: "jan.kowalski@example.com",
  www: "https://example.com",
  userType: "admin",
  isActive: false,

  show() {
    console.log(`Name: ${this.name}`);
    console.log(`Surname: ${this.surname}`);
    console.log(`Email: ${this.email}`);
    console.log(`Website: ${this.www}`);
    console.log(`User Type: ${this.userType}`);
    console.log(`Is Active: ${this.isActive}`);
  },

  setActive(active) {
    this.isActive = active;
    console.log(`isActive set to: ${this.isActive}`);
  }
};

currentUser.show();
currentUser.setActive(true);
currentUser.show();

console.log("--------------------Zadanie 3--------------------");
const book = {
  title: "Władca Pierścieni",
  author: "J.R.R. Tolkien",
  pageCount: 1178,
  publisher: "1954",

  showDetails() {
    console.log("Pętla 'for in':");
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        console.log(`${key}: ${this[key]}`);
      }
    }

    console.log("\nPętla 'Object.keys()':");
    Object.keys(this).forEach(key => {
      if (typeof this[key] !== 'function') {
        console.log(`${key}: ${this[key]}`);
      }
    });

    console.log("\nPętla 'Object.values()':");
    Object.values(this).forEach(value => {
      if (typeof value !== 'function') {
        console.log(value);
      }
    });

    console.log("\nPętla 'Object.entries()':");
    Object.entries(this).forEach(([key, value]) => {
      if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
      }
    });
  }
};

book.showDetails();

console.log("--------------------Zadanie 4--------------------");
const spaceShip = {
  name: "Żuk",
  currentLocation: "Ziemia",
  flyDistance: 0,

  flyTo(place, distance) {
    this.currentLocation = place;
    this.flyDistance += distance;
    console.log(`Statek ${this.name} doleciał do ${place} i zwiększył dystans o ${distance}.`);
  },

  showInfo() {
    console.log(`
    Informacje o statku:
    ----
    Statek ${this.name}
    doleciał do miejsca ${this.currentLocation}.
    Statek przeleciał już całkowity dystans ${this.flyDistance}.
    `);
  },

  meetClingon() {
    let positiveEncounters = 0;

    for (let i = 0; i < 100; i++) {
      let encounter = Math.random();
      if (encounter > 0.5) {
        positiveEncounters++;
      }
    }

    if (positiveEncounters >= 50) {
      console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
    } else {
      console.warn(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
    }
  }
};

spaceShip.flyTo("Mars", 300);
spaceShip.showInfo();
spaceShip.meetClingon();

console.log("--------------------Zadanie 5--------------------");
const book2 = {
  users: [],

  addUser(name, age, phone) {
    this.users.push({ name, age, phone });
    console.log(`Dodano użytkownika: ${name}, wiek: ${age}, telefon: ${phone}`);
  },

  showUsers() {
    console.log("Wszyscy użytkownicy w książce:");
    this.users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name}, wiek: ${user.age}, telefon: ${user.phone}`);
    });
  },

  findByName(name) {
    const user = this.users.find(user => user.name === name);
    if (user) {
      console.log(`Znaleziono użytkownika: ${user.name}, wiek: ${user.age}, telefon: ${user.phone}`);
    } else {
      console.log(false);
    }
  },

  findByPhone(phone) {
    const user = this.users.find(user => user.phone === phone);
    if (user) {
      console.log(`Znaleziono użytkownika: ${user.name}, wiek: ${user.age}, telefon: ${user.phone}`);
    } else {
      console.log(false);
    }
  },

  getCount() {
    console.log(`Liczba użytkowników w książce: ${this.users.length}`);
  }
};

book2.addUser("Artur", 19, "123-456-789");
book2.addUser("Piotr", 48, "111-111-111");

book2.showUsers();

book2.findByName("Artur");
book2.findByPhone("111-111-111");

book2.getCount();

console.log("--------------------Zadanie 6--------------------");
const tableGenerator = {

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  generateIncTable(nr) {
    const table = [];
    for (let i = 0; i <= nr; i++) {
      table.push(i);
    }
    return table;
  },


  generateRandomTable(lng, min, max) {
    const table = [];
    for (let i = 0; i < lng; i++) {
      table.push(this.randomNumber(min, max));
    }
    return table;
  },

  generateTableFromText(str) {
    if (typeof str !== "string") {
      return [];
    }
    return str.split(' ');
  },

  getMaxFromTable(arr) {
    return Math.max(...arr);
  },

  getMinFromTable(arr) {
    return Math.min(...arr);
  },

  delete(arr, index) {
    if (index >= 0 && index < arr.length) {
      arr.splice(index, 1);
    }
    return arr;
  }
};

console.log(tableGenerator.randomNumber(10, 20));
console.log(tableGenerator.generateIncTable(5));
console.log(tableGenerator.generateRandomTable(5, 1, 100));
console.log(tableGenerator.generateTableFromText("To jest przykładowy tekst"));
console.log(tableGenerator.getMaxFromTable([10, 20, 30]));
console.log(tableGenerator.getMinFromTable([10, 20, 30]));
console.log(tableGenerator.delete([1, 2, 3, 4], 2));

console.log("--------------------Zadanie 7--------------------");
const text = {
  check: function(txt, word) {
    return txt.includes(word);
  },

  getCount: function(txt) {
    return txt.length;
  },

  getWordsCount: function(txt) {
    return txt.trim().split(/\s+/).length;
  },

  setCapitalize: function(txt) {
    return txt
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  },

  setMix: function(txt) {
    let result = '';
    for (let i = 0; i < txt.length; i++) {
      result += i % 2 === 0 ? txt[i].toLowerCase() : txt[i].toUpperCase();
    }
    return result;
  },

  generateRandom: function(lng) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < lng; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  }
};

console.log(text.check("ala ma kota", "kota"));
console.log(text.getCount("ala ma kota"));
console.log(text.getWordsCount("ala ma kota"));
console.log(text.setCapitalize("ala ma kota"));
console.log(text.setMix("ala ma kota"));
console.log(text.generateRandom(10));