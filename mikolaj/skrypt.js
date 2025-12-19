let wynik = 0;
let liczba = 0; 


function start() {
    if (document.getElementById("wybor").checked) {
        wynik = 0;
        document.getElementById('wyniki').textContent = 'Twój wynik: 0';
        document.getElementById("koniec").style.display = "none";
        document.getElementById("wygrana").style.display = "none";
        document.getElementById("mikolaj").style.display = "block";
        document.getElementById("start").style.display = "none";
        document.querySelector(".opcje").style.display = "none";

        liczba = 0;
        const parent = document.getElementById("liczby");
        const heading = document.createElement("h2");
        parent.appendChild(heading);

        const intervalId = setInterval(() => {
            liczba++;
            heading.textContent = liczba.toString();

            if (wynik < -15) {
                clearInterval(intervalId);
                heading.style.display = "none"
                document.getElementById("koniec").style.display = "block";
                document.getElementById("wygrana").style.display = "none";
                document.querySelector(".opcje").style.display = "block";
                document.getElementById("mikolaj").style.display = "none";
                document.getElementById("wyniki").style.display = "block";
            }
            if (wynik >= 20) {
                clearInterval(intervalId);
                heading.style.display = "none"
                document.getElementById("wygrana").style.display = "block";
                document.getElementById("koniec").style.display = "none";
                document.querySelector(".opcje").style.display = "block";
                document.getElementById("mikolaj").style.display = "none";
                document.getElementById("wyniki").style.display = "block";
            }
        }, document.getElementById("speed").value);
    }

    else if (document.getElementById("wyborlosowo").checked) {
        wynik = 0;
        document.getElementById('wyniki').textContent = 'Twój wynik: 0';


        document.getElementById("koniec").style.display = "none";
        document.getElementById("wygrana").style.display = "none";
        document.getElementById("mikolaj").style.display = "block";
        document.getElementById("start").style.display = "none";
        document.querySelector(".opcje").style.display = "none";
        
        liczba = 0;
        const parent = document.getElementById("liczby");
        const heading = document.createElement("h2");
        parent.appendChild(heading);

        const intervalId = setInterval(() => {
            liczba = Math.floor(Math.random() * 100) + 1;
            heading.textContent = liczba.toString();

            if (wynik < -15) {
                clearInterval(intervalId);
                heading.style.display = "none"
                document.getElementById("koniec").style.display = "block";
                document.querySelector(".opcje").style.display = "block";
                document.getElementById("mikolaj").style.display = "none";
                document.getElementById("wyniki").style.display = "block";
                
            }
            if (wynik >= 20) {
                clearInterval(intervalId);
                heading.style.display = "none"
                document.getElementById("wygrana").style.display = "block";
                document.getElementById("koniec").style.display = "none";
                document.querySelector(".opcje").style.display = "block";
                document.getElementById("mikolaj").style.display = "none";
                document.getElementById("wyniki").style.display = "block";
            }
        }, document.getElementById("speed").value);
    }
}





function sprawdz() {
    if (liczba % 7 === 0 || liczba.toString().includes('7')) {
        wynik++;
        document.getElementById('wyniki').textContent = 'Twój wynik: '+wynik;
    }else{
        wynik=wynik-2;
        document.getElementById('wyniki').textContent = 'Twój wynik: '+wynik;
    }
}















const audio = document.getElementById("muzyka");
const glosnosc = document.getElementById("glosnosc");
const btnMuzyka = document.getElementById("buttonMuzyka");

// ustawienie początkowej głośności
audio.volume = glosnosc.value / 100;

// zmiana głośności w czasie rzeczywistym
glosnosc.addEventListener("input", () => {
    audio.volume = glosnosc.value / 100;
    // opcjonalnie zmiana ikony, jeśli głośność = 0
    btnMuzyka.textContent = audio.volume === 0 ? "🔈" : "🔊";
});

// funkcja do włączania/wyłączania muzyki
function toggleMuzyka() {
    if (audio.paused) {
        audio.play();
        btnMuzyka.textContent = "🔊";
    } else {
        audio.pause();
        btnMuzyka.textContent = "🔈";
    }
}
