const text1 = "Przykładowy tekst 123";
const regex1 = /\d/;
console.log(regex1.test(text1));

const text2 = "Ala ma kota";
const regex2 = /a/g;
console.log(text2.match(regex2));

const text3 = "Liczby: 11, 48 i 125.";
const regex3 = /\d+/g;
const matches3 = [...text3.matchAll(regex3)];
matches3.forEach(match => console.log(`Liczba: ${match[0]}, Indeks: ${match.index}`));

const text4 = "Ala ma kota";
console.log(text4.split(/\s+/));

const text5 = "Ala ma kota i 2 psy";
const regex5 = /\d/;
console.log(text5.search(regex5));

const text6 = "Hasło: 1a234567b";
const regex6 = /\d/g;
console.log(text6.replace(regex6, 'X'));

const text7 = "Ala ma kota";
const regex7 = /kot/;
const match7 = regex7.exec(text7);
if (match7) {
    console.log(`Znaleziono "${match7[0]}" na indeksie ${match7.index}`);
} else {
    console.log("Nie znaleziono słowa 'kot'");
}
