// collapsed-menu menu
const collapsedMenu = document.querySelector('.collapsed-menu');
const navMenu = document.querySelector('.nav-menu');

collapsedMenu.addEventListener('click', () => {
  collapsedMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Objects
const categories = [
  {
    name: 'FIFA 22',
    description: 'La plus prestigieuse des jeux de football. Affrontez les meilleurs joueurs de la catégories. En solo ou en équipe',
    imageUrl: './ressources/images/fifa2.png',
    imageAlt: 'Fifa',
  },
  {
    name: 'Mortal Kombat',
    description: 'Kombat avec un K. Defier des adversaires dans des combats epiques. Fatality et Brutality sont au rendez-vous',
    imageUrl: './ressources/images/MortalKombat11.jpg',
    imageAlt: 'mortal kombat',
  },
  {
    name: 'Call of Duty',
    description: "Le meilleur de FPS. Venez gouter à l'imersion et à la realité du champs de bataille",
    imageUrl: './ressources/images/cod22.jpg',
    imageAlt: 'call of duty',
  },
  {
    name: 'Moto GP',
    description: 'La sensation de piloter les motos. Incarnez les legendes de la dicipline la extreme sur deux roues',
    imageUrl: './ressources/images/2x1_NSwitchDS_MotoGP22.jpg',
    imageAlt: 'Leih character',
  },

];

const uneCategory = document.getElementById('category-details');

function generateHTML(details) {
  const card = `
      <div class="category-container">
          <div class="category-card">
              <div class="img-container">
                  <img class="category-image" src="${details.imageUrl}" alt=${details.imageAlt}>
              </div>
              <div class="category-info">
                  <h2>${details.name}</h2>
                  <hr>
                  <p>${details.description}</p>
              </div>
          </div>
      </div>
    `;
  return card;
}

categories.forEach((category) => {
  const HTMLElement = document.createElement('div');
  HTMLElement.innerHTML = generateHTML(category);
  uneCategory.appendChild(HTMLElement);
});