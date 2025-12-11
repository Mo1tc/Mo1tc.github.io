const choices = ['Kamień', 'Papier', 'Nożyce'];
let gracz = 0;
let komputer = 0;

function getWyborKomputer() {
     random = Math.floor(Math.random() * 3);
    return choices[random];
}

function runda(WyborGracz, WyborKomputer) {
    if (WyborGracz === WyborKomputer) {
        return "Remis";
    } 
    else if ((WyborGracz === 'Kamień' && WyborKomputer === 'Nożyce')||(WyborGracz === 'Papier' && WyborKomputer === 'Kamień')||(WyborGracz === 'Nożyce' && WyborKomputer === 'Papier')) {
        gracz++;
        return "Wygrałeś";
    } 
    else {
        komputer++;
        return "Wygrał komputer";
    }
}

function updatepunkty() {
    document.getElementById('gracz-punkty').textContent = gracz;
    document.getElementById('komputer-punkty').textContent = komputer;
}

function gra(WyborGracz) {
    const WyborKomputer = getWyborKomputer();
    const wynik = runda(WyborGracz, WyborKomputer);
    document.getElementById('wynik1').textContent = `Twój wybór: ${WyborGracz}`;
    document.getElementById('wynik2').textContent = `Wybór komputera: ${WyborKomputer}`;
    document.getElementById('wynik3').textContent = `${wynik}`;
    
    updatepunkty();
}

papier.onclick = function() {
  gra('Papier');    
};
kamien.onclick = function() {
    gra('Kamień');    
  };
nozyce.onclick = function() {
    gra('Nożyce');    
  };

