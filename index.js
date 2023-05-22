// Fetch and render initial player list
function fetchPlayers() {
    fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt/players')
      .then(response => response.json())
      .then(players => renderPlayerList(players))
      .catch(error => console.error(error));
  }
  
  function renderPlayerList(players) {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
  
    players.forEach(player => {
      const li = document.createElement('li');
      li.textContent = player.name;
      li.addEventListener('click', () => showPlayerDetails(player));
      playerList.appendChild(li);
    });
  }
  
  function showPlayerDetails(player) {
    const playerInfo = document.getElementById('player-info');
    playerInfo.innerHTML = `
      <h3>${player.name}</h3>
      <p>Breed: ${player.breed}</p>
      <p>Age: ${player.age}</p>
      <p>Weight: ${player.weight}</p>
      <!-- Add more details as needed -->
    `;
  }
  
  function addPlayer(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const breedInput = document.getElementById('breed');
  
    const player = {
      name: nameInput.value,
      breed: breedInput.value
      // Add more properties as needed
    };
  
    // Here you can make a POST request to the API to add the player
    // Once the request is successful, you can update the UI with the new player
  
    nameInput.value = '';
    breedInput.value = '';
  }
  
  // Event listeners
  document.getElementById('add-player-form').addEventListener('submit', addPlayer);
  
  // Fetch players on page load
  fetchPlayers();
  