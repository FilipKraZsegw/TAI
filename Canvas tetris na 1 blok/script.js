$(document).ready(function() {
    const plansza = document.querySelector("canvas");
    const kontekst = plansza.getContext("2d");

    const szerokoscPlanszy = plansza.width;
    const wysokoscPlanszy = plansza.height;
    const rozmiarBloku = 30; // Zwiększenie rozmiaru bloku

    // Tablica reprezentująca planszę
    const siatka = Array.from({ length: wysokoscPlanszy / rozmiarBloku }, () => 
        Array(szerokoscPlanszy / rozmiarBloku).fill(null)
    );

    // Definicje kształtów
    const kształty = [
        { id: "T", kolor: "blue", bloki: [[1, 0], [0, 1], [1, 1], [2, 1]] },
        { id: "L", kolor: "blue", bloki: [[1, 0], [1, 1], [1, 2], [2, 2]] },
        { id: "I", kolor: "blue", bloki: [[1, 0], [1, 1], [1, 2], [1, 3]] },
        { id: "O", kolor: "blue", bloki: [[0, 0], [1, 0], [0, 1], [1, 1]] },
        { id: "S", kolor: "blue", bloki: [[1, 0], [2, 0], [0, 1], [1, 1]] }
    ];

    let aktualnyKształt = null;
    let aktualneX = 0;
    let aktualneY = 0;

    function rysujPlansze() {
        kontekst.clearRect(0, 0, szerokoscPlanszy, wysokoscPlanszy);
        // Rysowanie siatki
        for (let y = 0; y < siatka.length; y++) {
            for (let x = 0; x < siatka[y].length; x++) {
                if (siatka[y][x]) {
                    kontekst.fillStyle = siatka[y][x];
                    kontekst.fillRect(x * rozmiarBloku, y * rozmiarBloku, rozmiarBloku, rozmiarBloku);
                }
            }
        }

        // Rysowanie aktualnego kształtu
        if (aktualnyKształt) {
            kontekst.fillStyle = aktualnyKształt.kolor;
            aktualnyKształt.bloki.forEach(([dx, dy]) => {
                const x = aktualneX + dx;
                const y = aktualneY + dy;
                kontekst.fillRect(x * rozmiarBloku, y * rozmiarBloku, rozmiarBloku, rozmiarBloku);
            });
        }
    }

    function kolizja(przesuniecieX = 0, przesuniecieY = 0) {
        return aktualnyKształt.bloki.some(([dx, dy]) => {
            const x = aktualneX + dx + przesuniecieX;
            const y = aktualneY + dy + przesuniecieY;
            return (
                x < 0 ||
                x >= szerokoscPlanszy / rozmiarBloku ||
                y >= wysokoscPlanszy / rozmiarBloku ||
                (y >= 0 && siatka[y][x])
            );
        });
    }

    function zablokujKształt() {
        aktualnyKształt.bloki.forEach(([dx, dy]) => {
            const x = aktualneX + dx;
            const y = aktualneY + dy;
            if (y >= 0) {
                siatka[y][x] = aktualnyKształt.kolor;
            }
        });
        usunPelneLinie();
        wylosujKształt();
    }

    function usunPelneLinie() {
        for (let y = siatka.length - 1; y >= 0; y--) {
            if (siatka[y].every(komorka => komorka)) {
                siatka.splice(y, 1);
                siatka.unshift(Array(szerokoscPlanszy / rozmiarBloku).fill(null));
                y++; // Sprawdzamy tę samą linię ponownie po przesunięciu
            }
        }
    }

    function wylosujKształt() {
        const indeks = Math.floor(Math.random() * kształty.length);
        aktualnyKształt = { ...kształty[indeks], bloki: [...kształty[indeks].bloki] };
        aktualneX = Math.floor(szerokoscPlanszy / rozmiarBloku / 2) - 1;
        aktualneY = -2;

        if (kolizja()) {
            alert("Koniec Gry");
            resetujGrę();
        }
    }

    function resetujGrę() {
        for (let y = 0; y < siatka.length; y++) {
            siatka[y].fill(null);
        }
        wylosujKształt();
    }

    document.addEventListener("keydown", event => {
        if (!aktualnyKształt) return;

        switch (event.key) {
            case "ArrowLeft":
                if (!kolizja(-1)) {
                    aktualneX--;
                }
                break;
            case "ArrowRight":
                if (!kolizja(1)) {
                    aktualneX++;
                }
                break;
            case "ArrowDown":
                if (!kolizja(0, 1)) {
                    aktualneY++;
                }
                break;
        }
        rysujPlansze();
    });

    function petlaGry() {
        if (!aktualnyKształt) return;

        if (!kolizja(0, 1)) {
            aktualneY++;
        } else {
            zablokujKształt();
        }

        rysujPlansze();
    }

    setInterval(petlaGry, 500);

    wylosujKształt();
});
