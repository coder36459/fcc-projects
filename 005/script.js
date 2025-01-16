const project = document.getElementById("pr");
const n = () => {
	let s = "";
	for (let i = 1; i < 13; i++) {
		s += `<div class="project-tile"><a href="#">project #${i}</a></div>`;
	}
	return s;
}
project.innerHTML = `${n()}`;
