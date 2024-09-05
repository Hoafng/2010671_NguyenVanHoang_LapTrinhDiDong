const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies',
        'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnabry', 'Lewandowski'
      ],
      [
        'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
        'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Muller'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5,
    },
  };
  
  // 1. Print each player name with goal number
  for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
  }
  
  // 2. Calculate the average odd
  const odds = Object.values(game.odds);
  let avgOdd = 0;
  
  for (const odd of odds) {
    avgOdd += odd;
  }
  avgOdd /= odds.length;
  console.log(`Average odd: ${avgOdd}`);
  
  // 3. Print odds in formatted way
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'team1' ? `victory ${game.team1}` : team === 'team2' ? `victory ${game.team2}` : 'draw';
    console.log(`Odd of ${teamStr}: ${odd}`);
  }
  
  // 4. Bonus: Create the scorers object
  const scorers = {};
  
  for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  }
  
  console.log(scorers);
  