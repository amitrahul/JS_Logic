/**
 *  Scissors beats Paper
 *  Paper beats Rock
 *  Rock beats Scissors
 * 
 * Let's play! You have to return which player won! 
 * In case of a draw return Draw!
 * 
 * Examples(Input1, Input2 --> Output):

    "scissors", "paper" --> "Player 1 won!"
    "scissors", "rock" --> "Player 2 won!"
    "paper", "paper" --> "Draw!"

 */

// Approach #01
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

// Approach #02
const rpss = (p1, p2) => {
  const s = "scissors",
    p = "paper",
    r = "rock";

  return (p1 === s && p2 === p) ||
    (p1 === p && p2 === r) ||
    (p1 === r && p2 === s)
    ? "Player 1 won!"
    : (p1 === p && p2 === s) || (p1 === r && p2 === p) || (p1 === s && p2 === r)
    ? "Player 2 won!"
    : "Draw!";
};
