const flashcards = [
  {
    term: "According to the course overview, which of the following is NOT listed as a main learning objective for successful graduates?",
    definition: "Master advanced C# memory management techniques",
  },
  {
    term: "What specific version of Python is highly recommended for use in this course according to the reading?",
    definition: "The latest version (3.13.x mentioned)",
  },
  {
    term: "What is the fundamental difference between parallelism and concurrency as defined in the text?",
    definition: "Parallelism involves tasks literally executing at the same time, while concurrency involves tasks making progress in overlapping time periods",
  },
  {
    term: "Which concept, parallelism or concurrency, strictly requires multiple processing units (e.g., multiple cores) to be achieved?",
    definition: "Parallelism",
  },
  {
    term: "Applying the same image filter to different blocks of a large image simultaneously is an example of which type of parallelism?",
    definition: "Data Parallelism",
  },
  {
    term: "Which characteristic best describes fine-grained parallelism according to the reading?",
    definition: "Small tasks executing concurrently with frequent communication and synchronization",
  },
];
// cards here
let deck = [];// deck here
let currentIndex = 0;

const homePage = document.querySelector("#home");//functions
const studyPage = document.querySelector("#study");
const navHome = document.querySelector("#nav-home");
const navStudy = document.querySelector("#nav-study");
const startBtn = document.querySelector("#start-btn");
const deckInfo = document.querySelector("#deck-info");
//other
const cardScene = document.querySelector("#card-scene");
const card = document.querySelector("#card");
const frontText = document.querySelector("#front-text");
const backText = document.querySelector("#back-text");
const statusBadge = document.querySelector("#status-badge");

const prevBtn = document.querySelector("#prev-btn");//buttons
const nextBtn = document.querySelector("#next-btn");
const knownBtn = document.querySelector("#known-btn");
const reviewBtn = document.querySelector("#review-btn");
const shuffleBtn = document.querySelector("#shuffle-btn");
const resetBtn = document.querySelector("#reset-btn");
const restartBtn = document.querySelector("#restart-btn");

const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
const summary = document.querySelector("#summary");
const summaryText = document.querySelector("#summary-text");
const year = document.querySelector("#year");

// ===== HELPER FUNCTIONS - Data Transformation (like recipes/blog pattern) =====

// Get current card from deck
function getCurrentCard() {
  return deck[currentIndex];
}

// Filter cards by search term (like filterRecipes pattern)
function filterCards(searchTerm) {
  const lowerSearch = searchTerm.toLowerCase();
  return deck.filter(function (cardItem) {
    return cardItem.term.toLowerCase().includes(lowerSearch) || 
           cardItem.definition.toLowerCase().includes(lowerSearch);
  });
}

// Check if all cards have been marked (like .every() pattern)
function checkAllMarked() {
  return deck.every(function (cardItem) {
    return cardItem.status !== "unseen";
  });
}

// Update card display HTML and classes (like renderBooks helper pattern)
function updateCardDisplay(currentCard) {
  card.classList.remove("flipped");
  frontText.textContent = currentCard.term;
  backText.textContent = currentCard.definition;

  if (currentCard.status === "known") {
    statusBadge.className = "status-badge known";
    statusBadge.textContent = "Known";
  } else if (currentCard.status === "review") {
    statusBadge.className = "status-badge review";
    statusBadge.textContent = "Needs Review";
  } else {
    statusBadge.className = "status-badge";
    statusBadge.textContent = "";
  }
}

// Update progress bar (like progress tracking in other projects)
function updateProgress() {
  const total = deck.length;
  const cardNumber = currentIndex + 1;
  const percent = (cardNumber / total) * 100;
  progressText.textContent = "Card " + cardNumber + " of " + total;
  progressBar.style.width = percent + "%";
}

// ===== MAIN FUNCTIONS - Core Logic =====

// Build deck from flashcards (like getRecipes pattern with .map())
function buildDeck() {
  deck = flashcards.map(function (card) {
    return {
      term: card.term,
      definition: card.definition,
      status: "unseen",
    };
  });
  currentIndex = 0;
}

// Shuffle deck order (like .sort() pattern in hikes.js)
function shuffleDeck() {
  deck.sort(function () {
    return Math.random() - 0.5;
  });
  currentIndex = 0;
}

// Display current card (refactored to use helpers)
function getCard() {
  const current = getCurrentCard();
  updateCardDisplay(current);
  updateProgress();

  if (checkAllMarked()) {
    summary.hidden = false;
    showSummary();
  } else {
    summary.hidden = true;
  }
}

// Toggle card flip (like classList.toggle pattern)
function flipCard() {
  card.classList.toggle("flipped");
}

// Mark card with status and advance (core interaction)
function markCard(status) {
  deck[currentIndex].status = status;
  if (currentIndex < deck.length - 1) currentIndex++;
  getCard();
}

// Show summary with counts (like .forEach() pattern)
function showSummary() {
  let knownCount = 0;
  let reviewCount = 0;

  deck.forEach(function (item) {
    if (item.status === "known") {
      knownCount++;
    } else if (item.status === "review") {
      reviewCount++;
    }
  });

  summaryText.innerHTML = "You marked <strong>" + knownCount + "</strong> as Known and <strong>" + reviewCount + "</strong> for Review.";
}

// Toggle between pages (like modal show/hide pattern)
function showPage(pageId) {
  if (pageId === "study") {
    homePage.hidden = true;
    studyPage.hidden = false;
    homePage.classList.remove("active");
    studyPage.classList.add("active");
    navHome.classList.remove("active");
    navStudy.classList.add("active");
  } else {
    homePage.hidden = false;
    studyPage.hidden = true;
    homePage.classList.add("active");
    studyPage.classList.remove("active");
    navHome.classList.add("active");
    navStudy.classList.remove("active");
  }
}

// Reset and show first card
function resetAndGet() {
  buildDeck();
  summary.hidden = true;
  getCard();
}

// ===== EVENT HANDLERS - Organized by functionality (like gallery.js pattern) =====

// Navigation handlers
function handleNavToHome(e) {
  e.preventDefault();
  showPage("home");
}

function handleNavToStudy(e) {
  e.preventDefault();
  showPage("study");
}

// Start study session
function handleStartStudy() {
  buildDeck();
  getCard();
  showPage("study");
}

// Card interaction handlers
function handleCardClick() {
  flipCard();
}

function handleCardKeydown(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    flipCard();
  }
}

// Navigation through deck
function handlePrevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    getCard();
  }
}

function handleNextCard() {
  if (currentIndex < deck.length - 1) {
    currentIndex++;
    getCard();
  } else {
    showSummary();
  }
}

// Mark card handlers
function handleMarkKnown() {
  markCard("known");
}

function handleMarkReview() {
  markCard("review");
}

// Deck management handlers
function handleShuffle() {
  shuffleDeck();
  summary.hidden = true;
  getCard();
}

// ===== EVENT LISTENERS - Attached handlers (like gallery.js structure) =====

// Navigation listeners
navHome.addEventListener("click", handleNavToHome);
navStudy.addEventListener("click", handleNavToStudy);

// Study initialization
startBtn.addEventListener("click", handleStartStudy);

// Card interaction listeners
cardScene.addEventListener("click", handleCardClick);
cardScene.addEventListener("keydown", handleCardKeydown);

// Deck navigation listeners
prevBtn.addEventListener("click", handlePrevCard);
nextBtn.addEventListener("click", handleNextCard);

// Card marking listeners
knownBtn.addEventListener("click", handleMarkKnown);
reviewBtn.addEventListener("click", handleMarkReview);

// Deck control listeners
shuffleBtn.addEventListener("click", handleShuffle);
resetBtn.addEventListener("click", resetAndGet);
restartBtn.addEventListener("click", resetAndGet);

// ===== INITIALIZATION =====

year.textContent = new Date().getFullYear();
deckInfo.textContent = "Deck contains " + flashcards.length + " cards.";
buildDeck();
getCard();
