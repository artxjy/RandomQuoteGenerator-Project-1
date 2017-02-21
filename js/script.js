// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
{ quote : "Life is 10% what happens to you and 90% how you react to it.", source : "Charles R. Swindoll" },
{ quote : "Good, better, best. Never let it rest. 'Til your good is better and your better is best.", source : "St. Jerome" },
{ quote : "Quality is not an act, it is a habit.", source : "Aristotle" , year = 900},
{ quote : "What counts can’t always be counted; what can be counted doesn’t always count.", source : "Albert Einstein" citation: "some kind of book"},
{ quote : "If it doesn’t challenge you, it doesn’t change you.", source : "Fred DeVito" }
];

function getRandomQuote(){

var rand = Math.floor(Math.random()*quotes.length());

return quotes[rand];

}

function printQuote(){
	var randomQuote = getRandomQuote();
	var message = "<p class="quote"> randomQuote.quote </p>";
message+="<p class="source"> randomQuote.source <span class="citation"> randomQuote.citation </span><span class="year"> randomQuote.year </span></p>";

document.getElementById('quote-box').innerHTML=message;
}