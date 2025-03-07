        function sprawdz() {
            let imie = document.getElementById("imie").value;
            let nazwisko = document.getElementById("nazwisko").value;
            let wiek = document.getElementById("wiek").value;
            let email = document.getElementById("email").value;
            let ulica = document.getElementById("ulica").value;
            let nrDomu = document.getElementById("nr_domu").value;
            let nrMieszkania = document.getElementById("nr_mieszkania").value;
            let kod = document.getElementById("kod").value;
            let miasto = document.getElementById("miasto").value;
            let wynik = document.getElementById("wynik");
            
            let regImie = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$/;
            let regWiek = /^(1[89]|[2-9][0-9])$/;
            let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|pl|org)$/;
            let regUlica = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+/;
            let regNrDomu = /^[0-9]+[a-zA-Z]?$/;
            let regKod = /^[0-9]{2}-[0-9]{3}$/;
            let regMiasto = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$/;

            let bledy = [];

            if (!regImie.test(imie)) bledy.push("Imię niepoprawne.");
            if (!regImie.test(nazwisko)) bledy.push("Nazwisko niepoprawne.");
            if (!regWiek.test(wiek)) bledy.push("Wiek musi być liczbą i większy od 18.");
            if (!regEmail.test(email)) bledy.push("Niepoprawny adres email.");
            if (!regUlica.test(ulica)) bledy.push("Ulica niepoprawna.");
            if (!regNrDomu.test(nrDomu)) bledy.push("Numer niepoprawny.");
            if (kod && !regKod.test(kod)) bledy.push("Kod pocztowy niepoprawny.");
            if (!regMiasto.test(miasto)) bledy.push("Miasto niepoprawne.");
            
            if (bledy.length > 0) {
                wynik.innerHTML = bledy.join("<br>");
            } else {
                wynik.innerHTML = "Formularz poprawny";
            }
        }