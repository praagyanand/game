let currentMovieIndex = 0;
let guessesLeft = 3;
let correctAnswer = false;

const emojiContainer = document.getElementById("emoji-container");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const remainingGuesses = document.getElementById("remaining-guesses");
const feedback = document.getElementById("feedback");
const nextMovieButton = document.getElementById("next-movie-button");

function loadMovie() {
  const movie = movies[currentMovieIndex];
  emojiContainer.textContent = movie.emoji;
  emojiContainer.setAttribute("aria-label", movie.ariaLabel);
  guessesLeft = 3;
  remainingGuesses.textContent = `Remaining Guesses: ${guessesLeft}`;
  guessInput.value = "";
  feedback.textContent = "";
  correctAnswer = false;
  guessButton.disabled = false;
  nextMovieButton.style.display = "none";
}

function checkGuess() {
  const guess = guessInput.value.trim().toLowerCase();
  const correctTitle = movies[currentMovieIndex].title.toLowerCase();

  if (guess === correctTitle) {
    correctAnswer = true;
    feedback.textContent = "Correct! 🎉";
    guessButton.disabled = true;
    nextMovieButton.style.display = "block";
  } else {
    guessesLeft--;
    if (guessesLeft === 0) {
      feedback.textContent = `Out of guesses! The correct movie was: ${movies[currentMovieIndex].title}`;
      guessButton.disabled = true;
      nextMovieButton.style.display = "block";
    } else {
      feedback.textContent = `Incorrect. Try again!`;
      remainingGuesses.textContent = `Remaining Guesses: ${guessesLeft}`;
    }
  }
}

function nextMovie() {
  currentMovieIndex = (currentMovieIndex + 1) % movies.length;
  loadMovie();
}

guessButton.addEventListener("click", checkGuess);
nextMovieButton.addEventListener("click", nextMovie);

// Initial movie load
loadMovie();
