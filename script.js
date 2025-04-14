// Datos de los 10 mejores jugadores de la historia con enlaces de imágenes válidos
const players = [
    {
        name: "Pelé",
        country: "Brasil",
        team: "Santos, New York Cosmos",
        goals: 1281,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Pele_con_brasil_%28cropped%29.jpg",
        description: "Considerado uno de los mejores futbolistas de todos los tiempos, Pelé ganó tres Copas del Mundo con Brasil."
    },
    {
        name: "Diego Maradona",
        country: "Argentina",
        team: "Boca Juniors, Barcelona, Napoli",
        goals: 346,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Maradona-Mundial_86_con_la_copa.JPG",
        description: "Maradona es recordado por su gran habilidad con el balón y su famosa 'Mano de Dios' en el Mundial de 1986."
    },
    {
        name: "Lionel Messi",
        country: "Argentina",
        team: "FC Barcelona, Paris Saint-Germain, Inter Miami",
        goals: 819,
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
        description: "Uno de los jugadores más exitosos de todos los tiempos, ganador de múltiples Balones de Oro y títulos internacionales."
    },
    {
        name: "Cristiano Ronaldo",
        country: "Portugal",
        team: "Manchester United, Real Madrid, Juventus, Al-Nassr",
        goals: 850,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
        description: "Reconocido por su habilidad, fuerza física y precisión, Cristiano Ronaldo es uno de los mejores goleadores de la historia."
    },
    {
        name: "Johan Cruyff",
        country: "Países Bajos",
        team: "Ajax, Barcelona",
        goals: 327,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Johan_Cruyff_1974c.jpg",
        description: "Un revolucionario del fútbol, Cruyff marcó una era con su estilo de juego creativo y su impacto en el FC Barcelona."
    },
    {
        name: "Zinedine Zidane",
        country: "Francia",
        team: "Juventus, Real Madrid",
        goals: 126,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg",
        description: "Zidane es conocido por su elegancia en el campo, llevando a Francia a ganar la Copa del Mundo de 1998."
    },
    {
        name: "Michel Platini",
        country: "Francia",
        team: "Juventus",
        goals: 126,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Michel_Platini_in_Wroclaw_by_Klearchos_Kapoutsis_tight_crop.jpg",
        description: "Platini fue uno de los jugadores más técnicos y creativos de su generación, destacando con la selección francesa."
    },
    {
        name: "Ronaldo Nazário",
        country: "Brasil",
        team: "Barcelona, Real Madrid, Inter Milan",
        goals: 414,
        image: "https://upload.wikimedia.org/wikipedia/commons/7/74/051119SMcC0014.jpg",
        description: "Conocido por su velocidad y habilidad en el dribbling, Ronaldo ganó dos Copas del Mundo con Brasil."
    },
    {
        name: "Franz Beckenbauer",
        country: "Alemania",
        team: "Bayern Munich",
        goals: 132,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Franz_Beckenbauer_%281975%29.jpg/500px-Franz_Beckenbauer_%281975%29.jpg",
        description: "Beckenbauer es un ícono del fútbol alemán, conocido por su capacidad para liderar y su visión del juego como defensor."
    },
    {
        name: "Bautista Rodriguez",
        country: "Argentina",
        team: "Manchester United",
        goals: 1000,
        image: "bauti.jpeg",
        description: "Bautista es considerado uno de los futbolistas más talentosos de la historia, destacando por su habilidad y estilo."
    }
];

// Función para mostrar jugadores en la página
function displayPlayers() {
    const playerListContainer = document.getElementById("player-list");
    playerListContainer.innerHTML = ""; // Limpiar la lista anterior

    players.forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.classList.add("player-card");
        playerCard.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <h3>${player.name}</h3>
        `;
        playerCard.onclick = () => showPlayerDetails(player); // Mostrar detalles cuando se hace clic
        playerListContainer.appendChild(playerCard);
    });
}

// Función para mostrar detalles del jugador
function showPlayerDetails(player) {
    const playerDetailsSection = document.getElementById("player-details");
    playerDetailsSection.style.display = "block"; // Mostrar detalles

    playerDetailsSection.innerHTML = `
        <h2>${player.name}</h2>
        <img src="${player.image}" alt="${player.name}">
        <p><strong>País:</strong> ${player.country}</p>
        <p><strong>Equipos:</strong> ${player.team}</p>
        <p><strong>Goles:</strong> ${player.goals}</p>
        <p>${player.description}</p>
    `;
}

// Cargar los jugadores al inicio
displayPlayers();
