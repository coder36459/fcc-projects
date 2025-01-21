"use strict";
const App = () => {
	const quotes = [
		['"I have a dream."', 'Martin Luther King Jr.'],
		['"The greatest glory in living lies not in never falling, but in rising every time we fall."', 'Nelson Mandela'],
		['A journey of a thousand miles begins with a single step.', 'Lao Tzu'],
		['"The only way to do great work is to love what you do."', 'Steve Jobs'],
		['"If you want to live a happy life, tie it to a goal, not to people or things."', 'Albert Einstein']
	];
	const random = () => {
		return Math.floor(Math.random() * 5);
	};
	const rd = random();
	const [display, setDisplay] = React.useState([quotes[rd][0], quotes[rd][1]]);
	const newQuote = () => {
		const r = random();
		return setDisplay([quotes[r][0], quotes[r][1]]);
	};
	return (
		React.createElement("div", { id: "quote-box" },
			React.createElement("div", { id: "btn" },
				React.createElement("button", { id: "new-quote", type: "button", onClick: newQuote }, "New quote")
			),
			React.createElement("div", { id: "text" }, display[0]),
			React.createElement("div", { id: "author" }, display[1]),
			React.createElement("a", { id: "tweet-quote", href: "#twitter.com/intent/tweet" }, "Tweet quote")
		)
	);
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
