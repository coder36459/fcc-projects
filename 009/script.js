"use strict";
const showCash = document.getElementById("cash");
const showPrice = document.getElementById("price");
const btn = document.getElementById("purchase-btn");
const result = document.getElementById("change-due");
const showCID = document.getElementById("cid");
const unit = [
	["ONE HUNDRED", 100],
	["TWENTY", 20],
	["TEN", 10],
	["FIVE", 5],
	["ONE", 1],
	["QUARTER", 0.25],
	["DIME", 0.1],
	["NICKEL", 0.05],
	["PENNY", 0.01]
];
const round = (n) => {
	return Math.round(n * 100) / 100;
}
const reverseArray = (a) => {
	let ra = [];
	for (const i in a) {
		ra.unshift([a[i][0], a[i][1]]);
	}
	return ra;
}
const sumInDrawer = (d) => {
	let sid = 0;
	for (const i in d) {
		sid += d[i][1];
	}
	return round(sid);
}
const showDrawer = (a) => {
	let d = "";
	for (const i in a) {
		d += " " + a[i][0] + ": $" + a[i][1];
	}
	return d;
}
const showInput = (cash, price, cid) => {
	showCash.value = cash;
	showPrice.value = price;
	result.innerText = showDrawer(cid);
	showCID.innerText = "The amount of cash in the cash drawer: $" + sumInDrawer(cid);
}
const purchase = (c, p, cid) => {
	const cash = Number(c);
	const price = Number(p);
	let changeDue = "";
	const status = (due, cid, change) => {
		if (due > cid || due != 0) {
			result.innerText = "Status: INSUFFICIENT_FUNDS";
		}
		else if (due === cid) {
			result.innerText = "Status: CLOSED" + change;
		}
		else {
			result.innerText = "Status: OPEN" + change;
		}
	}
	if (price > cash) {
		alert("Customer does not have enough money to purchase the item");
	}
	else if (price === cash) {
		result.innerText= "No change due - customer paid with exact cash";
	}
	else {
		let due = round(cash - price);
		let cido = reverseArray(cid);
		for (const i in unit) {
			let divDue = Math.floor(due / unit[i][1]);
			let divDrawer = Math.floor(cido[i][1] / unit[i][1]);
			if (due % unit[i][1] != due) {
				if (divDue <= divDrawer) {
					changeDue += " " + unit[i][0] + ": $" + divDue * unit[i][1];
					cido[i][1] = round(cido[i][1] - (divDue * unit[i][1]));
					due = round(due - (divDue * unit[i][1]));
				}
				else if (divDue > divDrawer) {
					if (cido[i][1] != 0 ) {
						changeDue += " " + unit[i][0] + ": $" + cido[i][1];
					}
					due = round(due - cido[i][1]);
					cido[i][1] = 0;
				}
			}
		}
		status(due, sumInDrawer(cido), changeDue);
		showCID.innerText = "The amount of cash in the cash drawer: $" + sumInDrawer(cido);
	}
}
const clear = () => {
	return [result.innerText = "", showCID.innerText = ""];
}
let price = 3.26;
let cid = [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90],
	["FIVE", 55],
	["TEN", 20],
	["TWENTY", 60],
	["ONE HUNDRED", 100]
];
showInput(100, price, reverseArray(cid));
btn.addEventListener("click", () => {
	clear();
	if (Number(showPrice.value) === 3.26) {
		purchase(showCash.value, price, cid);
	}
	else {
		purchase(showCash.value, showPrice.value, cid);
	}
});
