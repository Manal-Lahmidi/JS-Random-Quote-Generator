
//Object Array to hold quotes, sources, citaitons and years
var quotes = [
	{
	quote: "Good programmers know what to write. Great ones know what to rewrite and reuse.",
	source: "Eric S. Raymond"
	},
	{
	quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	source: "Martin Fowler"
	},
	{
	quote: "Keep your eyes on the stars and your feet on the ground.",
	source: "Theodore Roosevelt"
	},
	{
	quote: "The only person you should try to be better than is the person you were yesterday.",
	source: "Anonymous"
	},
	{
	quote: "Common programmer thought pattern: there are only three numbers: 0, 1, and n.",
	source: "Joel Spolsky"
	},
	{
	quote: "The most disastrous thing that you can ever learn is your first programming language.",
	source: "Alan Kay"
	},
	{
	quote: "C programmers never die. They are just cast into void.",
	source: "Alan Perlis", 
	},
	{
	quote:  "Walking on water and developing software from a specification are easy if both are frozen.",
	source: "Edward V. Berard"
	},
	{
	quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
	source: "Edsger Dijkstra"
	},
	{
	quote: "There are two ways to write error-free programs; only the third one works.",
	source: "Alan Perlis"
	},
	{
	quote: "Any program is only as good as it is useful.",
	source: "Linus Torvalds", 
	},
	{
	quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
	source: "Muhammad Waseem", 
	},
	{
	quote: "You can have data without information, but you cannot have information without data.",
	source: "Daniel Keys Moran",
	},
	{
	quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
	source: "Thomas Edison"
	},
	{
	quote: "If you want to go fast, go alone. If you want to go far, go together.",
	source: "African proverb"
	},
	{
	quote: "Design and programming are human activities; forget that and all is lost.",
	source: "Anonymous"
	},
	{
	quote: "Believe you can and you're halfway there.",
	source: "T. Roosevelt"
	},
	{
	quote: "When done well, software is invisible.",
	source: "Bjarne Stroustrup"
	},
	{
	quote: "Before software can be reusable it first has to be usable.",
	source: "Ralph Johnson"
	},
	{

	quote: "The best performance improvement is the transition from the nonworking state to the working state.",
	source: "J. Osterhout"
	},
	{
	quote: "There is no elevator to success  you have to take the stairs.",
	source: "Anonymous"
	},
	{
	quote: "Many people tend to look at programming styles and languages like religions: if you belong to one, you cannot belong to others. But this analogy is another fallacy.",
	source: "Niklaus Wirth"
	},
	{
	quote: "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
	source: "Bjarne Stroustrup", 
	},
	{
	quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
	source: "George Carlin"
	},
	{
	quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
	source: "John Woods"
	},
	{
	quote: "Deleted code is debugged code.",
	source: "Anonymous"
	},
	{
	quote: "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
	source: "Doctor Who"
	},
	{
	quote: "It's supposed to be hard. If it were easy, everyone would do it.",
	source: "Jimmy Dugan",
	},
	{
	quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
	source: "Jeff Sickel"
	},
	{
	quote: "Don’t comment bad code — rewrite it.",
	source: "Brian Kernighan"
	},
	{
	quote: "Code is like humor. When you have to explain it, it’s bad.",
	source: "Cory House"
	},
	{
	quote: "Talk is cheap. Show me the code.",
	source: "Linus Torvalds"
	},
	{
	quote: "Software testing is not only ensuring absence of bugs but also ensuring presence of value.",
	source: "Amit Kalantri"
	},
	{
	quote: "Nothing makes a system more flexible than a suite of tests ",
	source: "Robert Martin"
	},
	{
	quote: "As a rule, software systems do not work well until they have been used, and have failed repeatedly, in real applications.",
	source: "David Parnas",

	},
	{
	quote: "A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment.",
	source: "Robert Martin"
	}
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value
function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
		quoteString += '</p>';
		quoteContainer.innerHTML = quoteString;

		//assigns random color value to document background color 
		document.body.style.backgroundColor = getRandomColor ();
}

//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 15000);

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);






	
