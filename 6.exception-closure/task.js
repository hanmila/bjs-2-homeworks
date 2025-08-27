function parseCount(n) {
	if (Number.isNaN(Number.parseFloat(n))) {
		throw Error("Невалидное значение");
	}
	return parseFloat(n);
}

function validateCount(r) {
	try {
		return parseCount(r);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
			throw Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(S.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует"
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}