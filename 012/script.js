"use strict";
const defaultText = ["# a header (H1 size)", "## a sub header (H2 size)", "[a link](https://github.com/coder36459)", "```", "inline code {\ncode\n}", "```", "a code block `<html><head><title></title>`", "a list item", "1. First item", "2. Second item", "- a list item", "> a blockquote", "![an image](image.jpg)", "**bolded text**"];
marked.use({
	breaks: true
});
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			textarea: defaultText.join("\n")
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			textarea: e.target.value
		});
	}
	render() {
		return (
			React.createElement("div", null,
				React.createElement("textarea", { id: "editor", onChange: this.handleChange }, this.state.textarea),
				React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked.parse(this.state.textarea) } })
			)
		);
	}
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
