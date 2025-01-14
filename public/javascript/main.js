const grid = document.querySelector('.grid');

//Crée un tableau pour stocker les carrés
const squares = [];

//Sélectionne l'élément audio
const licorneSound = document.getElementById('licorneSound');

//Génére une grille avec 20 colonnes et 25 lignes
for (let i = 0; i < 20 * 25; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
    squares.push(square); 
    
    //Change la couleur au survol
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();

        //Vérifie si c'est le carré spécial et ajoute la licorne
        if (square === randomSquare) {
            square.innerHTML = '🦄'; 
            // Joue le son quand la licorne est trouvée
            licorneSound.play();
        }
    });
  
    //Réinitialise la couleur et enlève la licorne lorsqu'on sort du carré
    square.addEventListener('mouseout', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#333';
            if (square === randomSquare) {
                square.innerHTML = ''; 
            }
        }, 500); 
    });
}

//Choisit un carré aléatoire parmi tous les carrés
const randomSquare = squares[Math.floor(Math.random() * squares.length)];

//Fonction pour générer une couleur aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
