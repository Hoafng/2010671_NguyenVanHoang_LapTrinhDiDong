const gameEvents = new Map([
    [17, ' GOAL'],
    [36, ' Substitution'],
    [47, ' GOAL'],
    [61, ' Substitution'],
    [64, ' Yellow card'],
    [69, ' Red card'],
    [70, ' Substitution'],
    [72, ' Substitution'],
    [76, ' GOAL'],
    [80, ' GOAL'],
    [92, ' Yellow card'],
  ]);
  
  // 1. Create an array of the different game events (no duplicates)
  const events = [...new Set(gameEvents.values())];
  console.log(events); // [" GOAL", " Substitution", " Yellow card", " Red card"]
  
  // 2. Remove the unfair yellow card from minute 64
  gameEvents.delete(64);
  console.log(gameEvents); // Check if the event was removed
  
  // 3. Compute and log the string for average event occurrence
  const time = [...gameEvents.keys()].pop(); // Get the last event's minute
  console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);
  
  // 4. Log each event with the half information
  for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${event}`);
  }
  