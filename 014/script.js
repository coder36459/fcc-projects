"use strict";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			memory: "",
			display: "0",
			operator: "",
			countOperator: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.clearDisplay = this.clearDisplay.bind(this);
		this.decimalNumbers = this.decimalNumbers.bind(this);
		this.outputNumber = this.outputNumber.bind(this);
	}
	handleClick(e) {
		let a = e.target.innerText;
		if (/\d/.test(a)) {
			this.setState({
				memory: String(this.state.display),
				display: String(this.state.display) === "0" && (String(this.state.memory) === "" || String(this.state.memory) === "0") ? a : String(this.state.display + a),
				countOperator: this.state.countOperator - 1
			});
		}
		else {
			if (this.state.countOperator <= -1) {
				this.setState({
					operator: a,
					display: this.state.display + a,
					countOperator: (a != "-" || (this.state.display + a).search("--") === 1) ? this.state.countOperator + 1 : this.state.countOperator
				}); 
			}
			else {
				this.setState({
					operator: a,
					display: (a != "-" || (this.state.display + a).search("--") === 1) ? this.state.display.slice(0, 1) + a : this.state.display + a,
					countOperator: a != "-" ? this.state.countOperator + 1 : this.state.countOperator
				});
			}
		}
	}
	decimalNumbers() {
		this.setState({
			memory: "",
			display: this.state.operator === "" && /\./.test(String(this.state.display)) ? String(this.state.display) : (String(this.state.display) === "0" && String(this.state.memory) === "" ? String(this.state.display) + "." : String(this.state.memory) + "." || String(this.state.display) === "0" && String(this.state.memory) != "") ? String(this.state.display) + "." : String(this.state.memory) + "."
		});
	}
	outputNumber() {
		this.setState({
			display: Math.floor(eval(this.state.display) * 10000) / 10000
		});
	}
	clearDisplay() {
		this.setState({
			memory: "",
			display: "0",
			operator: "",
			countOperator: 0
		});
	}
	render() {
		return (
			React.createElement("div", null,
				React.createElement("div", { id: "display" }, this.state.display),
				React.createElement("button", { id: "seven", onClick: this.handleClick }, "7"),
				React.createElement("button", { id: "eight", onClick: this.handleClick }, "8"),
				React.createElement("button", { id: "nine", onClick: this.handleClick }, "9"),
				React.createElement("button", { id: "divide", onClick: this.handleClick }, "/"),
				React.createElement("button", { id: "four", onClick: this.handleClick }, "4"),
				React.createElement("button", { id: "five", onClick: this.handleClick }, "5"),
				React.createElement("button", { id: "six", onClick: this.handleClick }, "6"),
				React.createElement("button", { id: "multiply", onClick: this.handleClick }, "*"),
				React.createElement("button", { id: "one", onClick: this.handleClick }, "1"),
				React.createElement("button", { id: "two", onClick: this.handleClick }, "2"),
				React.createElement("button", { id: "three", onClick: this.handleClick }, "3"),
				React.createElement("button", { id: "subtract", onClick: this.handleClick }, "-"),
				React.createElement("button", { id: "zero", onClick: this.handleClick }, "0"),
				React.createElement("button", { id: "decimal", onClick: this.decimalNumbers }, "."),
				React.createElement("button", { id: "equals", onClick: this.outputNumber }, "="),
				React.createElement("button", { id: "add", onClick: this.handleClick }, "+"),
				React.createElement("button", { id: "clear", onClick: this.clearDisplay }, "C")
			)
		);
	}
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
