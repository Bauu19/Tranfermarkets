// Datos de ejemplo de jugadores
const players = [
    {
        id: 1,
        name: "Lionel Messi",
        team: "Paris Saint-Germain",
        nationality: "Argentina",
        age: 34,
        goals: 750,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg"
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        team: "Manchester United",
        nationality: "Portugal",
        age: 36,
        goals: 800,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        team: "Paris Saint-Germain",
        nationality: "Francia",
        age: 23,
        goals: 250,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kylian_Mbapp%C3%A9_2019.jpg"
    }
];

// Mostrar todos los jugadores en la lista
function displayPlayers(players) {
    const playerListContainer = document.getElementById("player-list");
    playerListContainer.innerHTML = "";  // Limpiar contenido anterior

    players.forEach(player => {
        const playerCard = document.createElement("div");
        playerCard.classList.add("player-card");
        playerCard.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>Equipo: ${player.team}</p>
        `;
        playerCard.onclick = () => showPlayerDetails(player);
        playerListContainer.appendChild(playerCard);
    });
}

// Mostrar detalles del jugador
function showPlayerDetails(player) {
    const playerDetails = document.getElementById("player-details");
    playerDetails.style.display = "block";  // Mostrar los detalles
    playerDetails.innerHTML = `
        <img src="${player.image}" alt="${player.name}">
        <h2>${player.name}</h2>
        <p><strong>Equipo:</strong> ${player.team}</p>
        <p><strong>Edad:</strong> ${player.age} años</p>
        <p><strong>Nacionalidad:</strong> ${player.nationality}</p>
        <p><strong>Goles:</strong> ${player.goals}</p>
    `;
}

// Función de búsqueda de jugadores
function searchPlayer() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const filteredPlayers = players.filter(player => 
        player.name.toLowerCase().includes(searchQuery)
    );
    displayPlayers(filteredPlayers);
}

// Cargar los jugadores inicialmente
displayPlayers(players);
