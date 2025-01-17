"use strict";
const text = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const num = document.getElementById("num");
const arr = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];
const check = (v) => {
	num.style.display = "none";
	let n = Number(v);
	if (v.length != 0 && n) {
		if (n < 1) {
			result.innerText = "Please enter a number greater than or equal to 1";
		}
		else if (n > 3999) {
			result.innerText = "Please enter a number less than or equal to 3999";
		}
		else {
			let rest = n;
			let roman = "";
			while (rest > 0) {
				for (const a in arr) {
					if (rest % arr[a][1] != rest) {
						let div = rest / arr[a][1];
						while (div >= 1) {
							rest = rest - arr[a][1];
							roman += arr[a][0];
							div--;
						}
					}
				}
			}
			num.style.display = "block";
			result.innerText = roman;
			num.innerText = n;
		}
	}
	else {
		result.innerText = "Please enter a valid number";
	}
	text.value = "";
}
btn.addEventListener("click", () => check(text.value));
