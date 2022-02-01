let rowArray = (m, n, original) => {
	let rowOne = [];
	let rowTwo = [];
	for (let i = 0; i <= n - 1; i++) {
		rowOne = [...rowOne, original[i]];
	}
	for (let i = n; i <= Math.floor(2n - 1); i++) {
		rowTwo = [...rowTwo, original[i]];
	}
	console.log(rowOne, rowTwo);
};

rowArray(1, 3, [1, 2, 3]);
