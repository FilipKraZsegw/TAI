console.log("----------------Zadanie 1---------------");
class User {
    constructor(nick, name, surname, email, role) {
        this.nick = nick;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.loginDates = [];
        this.active = true;
    }

    logIn() {
        const currentDate = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());
        this.loginDates.push(currentDate);
        console.log(`${this.nick} zalogował się: ${currentDate}`);
    }

    showLoginDates() {
        if (this.loginDates.length === 0) {
            console.log(`${this.nick} jeszcze się nie logował.`);
        } else {
            console.log(`Daty logowań użytkownika ${this.nick}:`);
            this.loginDates.forEach(date => console.log(date));
        }
    }

    showDetails() {
        console.log(`Szczegóły użytkownika ${this.nick}:`);
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }

    toggleActive() {
        this.active = !this.active;
        console.log(`Użytkownik ${this.nick} jest teraz ${this.active ? 'aktywny' : 'nieaktywny'}.`);
    }
}

const users = [
    new User("john123", "John", "Doe", "john@example.com", "admin"),
    new User("aliceR", "Alice", "Robinson", "alice@example.com", "editor"),
    new User("bobTheReader", "Bob", "Smith", "bob@example.com", "reader")
];

users[0].logIn();
users[0].logIn();

users[0].showLoginDates();

users[1].showDetails();

users[2].toggleActive();
users[2].toggleActive();

users[2].showDetails();

console.log("----------------Zadanie 2---------------");

class Fighter {
    constructor(name) {
        this.name = name;
        this.live = 25; 
        this.power = 5; 
    }

    attack(who) {
        if (Math.random() < 0.5) {
            who.live -= this.power;
            if (who.live < 0) who.live = 0;
            log.push(`${this.name} zaatakował(a) ${who.name}. ${who.name} ma teraz ${who.live} punktów życia.`);
        } else {
            log.push(`${this.name} chybił(a) podczas ataku na ${who.name}.`);
        }
    }
}

const names = [ "Baraka", "Jax", "Johnny Cage", "Kitana", "Kung Lao", "Liu Kang", "Mileena", "Raiden", "Reptile", "Scorpion", "Shang Tsung", "Sub-Zero"];
const fighters = [];
const log = [];

names.forEach(name => {
    fighters.push(new Fighter(name));
});

function getFighter() {
    if (fighters.length > 0) {
        const index = Math.floor(Math.random() * fighters.length);
        return fighters.splice(index, 1)[0];
    }
    return null;
}

let leftFighter = null;
let rightFighter = null;

function loop() {

    if (!leftFighter) leftFighter = getFighter();
    if (!rightFighter) rightFighter = getFighter();

    if (!leftFighter || !rightFighter) {
        log.push(`${leftFighter ? leftFighter.name : rightFighter.name} zwyciężył(a)!`);
        console.clear();
        console.log(log.join("\n"));
        return false;
    }

    if (Math.random() < 0.5) {
        leftFighter.attack(rightFighter);
    } else {
        rightFighter.attack(leftFighter);
    }

    if (leftFighter.live <= 0) {
        log.push(`${rightFighter.name} pokonał(a) ${leftFighter.name}!`);
        rightFighter.live = 20; 
        leftFighter = null; 
    }

    if (rightFighter.live <= 0) {
        log.push(`${leftFighter.name} pokonał(a) ${rightFighter.name}!`);
        leftFighter.live = 20; 
        rightFighter = null; 
    }

    console.clear();
    console.log(log.join("\n"));

    if (fighters.length === 0 && (!leftFighter || !rightFighter)) {
        log.push(`${leftFighter ? leftFighter.name : rightFighter.name} jest ostatecznym zwycięzcą!`);
        console.clear();
        console.log(log.join("\n"));
        return false;
    }

    setTimeout(() => loop(), 100);
}

// loop();

console.log("----------------Zadanie 3---------------");

String.prototype.sortText = function(char) {
    return this
        .split(char)
        .sort()
        .join(char);
};

const sortedText = "Marcin-Ania-Piotrek-Beata".sortText('-');
console.log(sortedText);

console.log("----------------Zadanie 4---------------");

String.prototype.reverse = function() {
    return this.split('')
               .reverse()
               .join('');
};

const reversedText = "Ala ma kota".reverse();
console.log(reversedText);

console.log("----------------Zadanie 5---------------");

Array.prototype.sum = function() {
    return this.reduce((acc, num) => acc + num, 0);
};

console.log([1, 2, 3].sum());

Array.prototype.sortNr = function() {
    return this.sort((a, b) => a - b);
};

console.log([1, 1.2, 11, 22, 2.1].sortNr());