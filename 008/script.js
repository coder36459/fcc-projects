"use strict";
const data = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const clear = () =>{
	return [data.value = "", result.innerText = "", result.style.visibility = "hidden"];
}
const check = (v) => {
	result.style.visibility = "visible";
	if (v.length != 0) {
		const validator = (n) => {
			return (/[a-z]/g.test(n.toLowerCase()) === false && (n.match(/\d/g).join("").length === 11 || n.match(/\d/g).join("").length === 10) && ((n.split("")[0] === "1" && n.split("")[1] === " " && n.split("")[5] === "-" && n.split("")[9] === "-") || (n.split("")[0] === "1" && n.split("")[1] === " " && n.split("")[2] === "(" && n.split("")[6] === ")" && n.split("")[7] === " " && n.split("")[11] === "-") || (n.split("")[0] === "1" && n.split("")[1] === "(" && n.split("")[5] === ")" && n.split("")[9] === "-") || (n.split("")[0] === "1" && n.split("")[1] === " " && n.split("")[5] === " " && n.split("")[9] === " ") || n.length === 10 || (n.split("")[0] === "1" && n.split("")[1] === " " && n.split("")[5] === " " && n.split("")[9] === " ") || (n.split("")[3] === "-" && n.split("")[7] === "-") || (n.split("")[0] === "(" && n.split("")[4] === ")" && n.split("")[8] === "-")));
		}
		if (validator(v)) {
			return result.innerText = "Valid US number: " + data.value;
		}
		else {
			return result.innerText = "Invalid US number: " + data.value;
		}
	}
	else {
		alert("Please provide a phone number");
	}
}
checkBtn.addEventListener("click", () => check(data.value));
clearBtn.addEventListener("click", () => clear());
