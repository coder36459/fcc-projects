"use strict";
const text = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");
const check = (v) => {
	if (v.length != 0) {
		const s = `<b>${v}</b>`;
		let t = v.toLowerCase().match(/[a-z0-9]/g).join("");
		let r = t.split("").reverse().join("");
		if (t.length === 1 || t === r) {
			result.innerHTML = s + " is a palindrome";
		}
		else {
			result.innerHTML = s + " is not a palindrome";
		}
	}
	else {
		alert("Please input a value");		
	}
	text.value = "";
}
btn.addEventListener("click", () => check(text.value));
