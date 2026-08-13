const team = {
  _players: [
    {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
    {firstName: 'Lisa', lastName: 'Simpson', age: 10},
    {firstName: 'Bill', lastName: 'Clinton', age: 20}
  ],
  _games: [
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Chargers', teamPoints: 31, opponentPoints: 24},
    {opponent: 'Raiders', teamPoints: 20, opponentPoints: 21}
  ],
  
  get players() {
    return this._players;
  },
  
  get games() {
    return this._games;
  },
  
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },
  
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);