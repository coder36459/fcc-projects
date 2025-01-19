"use strict";
const search = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const showPokemonName = document.getElementById("pokemon-name");
const showPokemonID = document.getElementById("pokemon-id");
const showWeight = document.getElementById("weight");
const showHeight = document.getElementById("height");
const showTypes = document.getElementById("types");
const showHP = document.getElementById("hp");
const showAttack = document.getElementById("attack");
const showDefense = document.getElementById("defense");
const showSpecialAttack = document.getElementById("special-attack");
const showSpecialDefense = document.getElementById("special-defense");
const showSpeed = document.getElementById("speed");
const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const img = document.getElementById("image");
const check = (input) => {
	fetch(url)
	.then((res) => res.json())
	.then((data) => {
		const c = data.results.some(item => item.name === input);
		const n = data.results.some(item => item.id === Number(input));
		if ((c === false && n === true) || (n === false && c === true)) {
			const record = url + "/" + input;
			return result(record);
		}
		else {
			alert("Pokémon not found");
		}
	})
	.catch((err) => console.error("err"));
}
const result = (rec) => {
	fetch(rec)
	.then((res) => res.json())
	.then((data) => {
		showPokemonName.innerText = data.name;
		showPokemonID.innerText = data.id;
		showWeight.innerText = data.weight;
		showHeight.innerText = data.height;
		showHP.innerText = data.stats[0].base_stat;
		showAttack.innerText = data.stats[1].base_stat;
		showDefense.innerText = data.stats[2].base_stat;
		showSpecialAttack.innerText = data.stats[3].base_stat;
		showSpecialDefense.innerText = data.stats[4].base_stat;
		showSpeed.innerText = data.stats[5].base_stat;
		const types = () => {
			let c = data.types.length;
			let s = "";
			while (c > 0) {
				s += '<p class="type-' + data.types[c - 1].type["name"] + '">' + data.types[c - 1].type["name"].toUpperCase() + '</p>';
				c--
			}
			return showTypes.innerHTML = s;
		}
		types();
		img.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`;
	})
	.catch((err) => console.error("err"));
}
searchBtn.addEventListener("click", () => {
	let i = search.value.toLowerCase();
	check(i);
});
