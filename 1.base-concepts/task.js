"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d === 0) {
		return arr = [-b / (2 * a)];
	}

	if (d > 0) {
		return arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	} else {
		return arr = [];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = (percent / 100) / 12;
	let S = amount - contribution;
	let n = countMonths;

	const monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
	const totalPayment = monthlyPayment * n;

	return Math.round(totalPayment * 100) / 100;
}