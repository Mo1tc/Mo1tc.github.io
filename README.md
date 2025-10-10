<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Papier, Kamień, Nożyce</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Papier, Kamień, Nożyce</h1>
        <div class="wybory">
            <button id="papier" class="papier">Papier</button>
            <button id="kamien" class="kamien">Kamień</button>
            <button id="nozyce" class="nozyce">Nożyce</button>
        </div>
        <div id="wynik1"></div>
        <div id="wynik2"></div>
        <div id="wynik3"></div>


        <div id="punkty">
            <a>Wynik gracza: </a> 
            <b id="gracz-punkty"> 0</b>
            <a>Wynik komputera: </a>
            <b id="komputer-punkty">0</b>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
