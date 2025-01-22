"use strict";
const data = [
	["Q", "Heater 1", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"],
	["W", "Heater 2", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"],
	["E", "Heater 3", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"],
	["A", "Heater 4", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"],
	["S", "Clap", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"],
	["D", "Open-HH", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"],
	["Z", "Kick-n'-Hat", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"],
	["X", "Kick", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"],
	["C", "Closed-HH", "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"]
];
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: ""
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleClick(e) {
		this.setState({
			display: e.currentTarget.id
		});
		e.target.children[0].play();
	}
	handleKeyPress(e) {
		let k = e.key.toUpperCase();
		for (const x in data) {
			if (k === data[x][0]) {
				document.getElementById(k).play();
			}
		}
	}
	render() {
		return (
			React.createElement("div", { id: "drum-machine", onKeyPress: this.handleKeyPress },
			React.createElement("div", { id: "display" }, this.state.display),
				React.createElement("button", { id: data[0][1], className: "drum-pad", onClick: this.handleClick }, data[0][0],
					React.createElement("audio", { id: data[0][0], className: "clip", src: data[0][2] })
				),
				React.createElement("button", { id: data[1][1], className: "drum-pad", onClick: this.handleClick }, data[1][0],
					React.createElement("audio", { id: data[1][0], className: "clip", src: data[1][2] })
				),
				React.createElement("button", { id: data[2][1], className: "drum-pad", onClick: this.handleClick }, data[2][0],
					React.createElement("audio", { id: data[2][0], className: "clip", src: data[2][2] })
				),
				React.createElement("button", { id: data[3][1], className: "drum-pad", onClick: this.handleClick }, data[3][0],
					React.createElement("audio", { id: data[3][0], className: "clip", src: data[3][2] })
				),
				React.createElement("button", { id: data[4][1], className: "drum-pad", onClick: this.handleClick }, data[4][0],
					React.createElement("audio", { id: data[4][0], className: "clip", src: data[4][2] })
				),
				React.createElement("button", { id: data[5][1], className: "drum-pad", onClick: this.handleClick }, data[5][0],
					React.createElement("audio", { id: data[5][0], className: "clip", src: data[5][2] })
				),
				React.createElement("button", { id: data[6][1], className: "drum-pad", onClick: this.handleClick }, data[6][0],
					React.createElement("audio", { id: data[6][0], className: "clip", src: data[6][2] })
				),
				React.createElement("button", { id: data[7][1], className: "drum-pad", onClick: this.handleClick }, data[7][0],
					React.createElement("audio", { id: data[7][0], className: "clip", src: data[7][2] })
				),
				React.createElement("button", { id: data[8][1], className: "drum-pad", onClick: this.handleClick }, data[8][0],
					React.createElement("audio", { id: data[8][0], className: "clip", src: data[8][2] })
				)
			)
		);
	}
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
