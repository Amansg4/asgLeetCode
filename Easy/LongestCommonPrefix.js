let longestCommonPrefix = (arrOfStrings) => {
	let stringsCount = arrOfStrings.length;

	//edge cases
	if (stringsCount == 0) return "";
	if (stringsCount == 1) return arrOfStrings[0];

	/* sort the array of strings to isolate strings that differ the most.*/
	arrOfStrings.sort();

	/* find the minimum length from first and last string, establishing it as [end], the highest count towards possible characters matching  */
	let end = Math.min(
		arrOfStrings[0].length,
		arrOfStrings[stringsCount - 1].length
	);

	/* find the common prefix between the first and
		last string */
	let i = 0;
	while (i < end && arrOfStrings[0][i] === arrOfStrings[stringsCount - 1][i])
		i++;
	/* And for each iteration concatenating matching characters into a string and storing it in variable as [prefix].  */
	let prefix = arrOfStrings[0].substring(0, i);
	if (!prefix) {
		console.log("No common prefix found");
		return false;
	} else {
		console.log(prefix);
		return prefix;
	}
};

/* Driver Function to test other function */
longestCommonPrefix(["slcuymf", "slut", "sly", "slippy"]);

//Divide and Counquer Method

// Javascript program to find longest common prefix of
// given array of words.

function longestCommonPrefix2(a) {
	let size = a.length;

	/* if size is 0, return empty string */
	if (size == 0) return "";

	if (size == 1) return a[0];

	/* sort the array of strings */
	a.sort();

	/* find the minimum length from first and last string */
	let end = Math.min(a[0].length, a[size - 1].length);

	/* find the common prefix between the first and
	   last string */
	let i = 0;
	while (i < end && a[0][i] == a[size - 1][i]) i++;

	let pre = a[0].substring(0, i);
	return pre;
}
