//Code by Henry ndubuaku
var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

var quotes = [
  {
    quote:
      "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    author: "John Keats"
  },
  {
    quote:
      "But man is not made for defeat. A man can be destroyed but not defeated.",
    author: "Ernest Hemingway"
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote:
      "The natural environment sustains the life of all beings universally. ",
    author: "Dalai Lama"
  },
  {
    quote:
      "I have no other wish than a close fusion with nature and I desire no other fate than to have worked and lived in harmony with her laws.",
    author: "Claude Monet"
  },
  {
    quote: "We can never have enough of Nature.",
    author: "Henry David Thoreau"
  },
  {
    quote:
      "It is a curious situation that the sea, from which life first arose, should now be threatened by the activities of one form of that life.",
    author: "Rachel Carson"
  },
  {
    quote: "A nation that destroys its soils destroys itself.",
    author: "Franklin D. Roosevelt"
  }
];

function openURL(url) {
  window.open(
    url,
    "Share",
    "width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0"
  );
}

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function getQuote() {
  var random = quotes[Math.floor(Math.random() * quotes.length)];
  var currentQuote = random.quote;
  var currentAuthor = "- " + random.author;
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  $(".quote-text").html(currentQuote);
  $(".quote-author").html(currentAuthor);
  $(".quote-area").css("background-color", "randomColor");
  if (inIframe()) {
    $("#tweet-button").attr(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
  }
}

$(document).ready(function() {
  getQuote();
  $("#new-quote").click(function() {
    getQuote();
  });
});
