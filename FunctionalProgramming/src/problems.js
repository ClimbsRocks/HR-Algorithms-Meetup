/*
  Greetings, algorithmics!  Today, your task is to practice functional programming with some basic exercises.
*/


/* --------------------- */
/* BASIC BUILDING BLOCKS */
/* --------------------- */

var map = function(input, iterator) {
	var results = [];
	for(var i = 0; i < input.length; i++) {
		results.push(iterator(input[i],i,input))
	}
	return results;
};

var filter = function(input, iterator) {
	var results = [];
	for (var i = 0; i < input.length; i++) {
		if(iterator(input[i],i,input)) results.push(input[i]);
	}
	return results;
};

var reduce = function(input, iterator, initialValue) {
	var memo = initialValue;
	for(var i = 0; i < input.length; i++) {
		memo = iterator(memo,input[i],i,input);
	}
	return memo;
};

/* ---------------- */
/* APPLIED PROBLEMS */
/* ---------------- */

// Find the sum of the numbers in the input. 
var sumOfArray = function(input) {
	return reduce(input, function(previous,current) {return previous + current;},0);
};

// Return only the numbers that are the same as their position in the input.
// That is, [0, 2, 1, 3] returns [0, 3]
var positionMatch = function(input) {
	return filter(input,function(current,index,arr) {return current === index;});
};

// Given a list of names, find the number of unique first names in the list.
// (hint: string.split(" ") will turn the string into an array.  the first element is the first name.)
var uniqueFirstNames = function(input) {
	var firstNames = map(input,function(current,index,arr) {return current.split(" ")[0];});
	return filter(input,function(current,index,arr) {return firstNames.indexOf(current.split(" ")[0]) === index;}).length;
};

// Return only the numbers in the input that are palindromes (i.e. 4884 or 1234321)
var palindromeNumbers = function(input) {
	return filter(input,function(current,index,arr) {return current.toString().split("").reverse().join("") === current.toString();});
};

// Given a list of strings, return an array that indexes the list by length.
// That is, result = indexByLength(["you", "are", "me"])
// result[2] is ["me"]; result[3] is ["you", "are"]
// var indexByLength = function(input) {
// 	var lengths = map(input, function(current,index,input) {return current.length;});
// 	var uniqueLengths = filter(lengths,function(current,index,arr) {return arr.indexOf(current) === index;}).sort(function(a,b) {return a-b;});
// 	return map(uniqueLengths,function(current,index,arr) {
// 		return reduce(input,function(previous2,current2,index2,arr2) {
// 			current2.length === current ? return previous.push(current) : return previous},[]);
// 	})
// };
//var testArr1 = ['cat','dog','mouse','apples','hi','coding is great'];


// given a list of objects with properties `name` (a string), `age` (a number),
// and `children` (an array), return the names of everyone who is over 65 
// or has at least two children.
var olderOrWithChildren = function(input) {
	var correctPeople = filter(input,function(current,index,arr) {
		return current.age > 65 || current.children.length >=2;
	});
	return map(correctPeople,function(current,index,arr) {return current.name;});
};



/* -------------------------- */
/* MORE SPECIALIZED FUNCTIONS */
/* -------------------------- */

// Given an iterator that returns true or false, return true
// if every input element passes the test and false if at least one fails.
var every = function(input, iterator) {
	return reduce(input, function(previous,current,index,arr) {return previous && iterator(current);},true);
};

// Given an iterator that returns true or false, return true
// if at least one input element passes the test and false if all of them fail.

var some = function(input, iterator) {
	return reduce(input, function(previous,current,index,arr) {return previous|| iterator(current);},false);
};

// Returns an array with duplicate elements in the input removed.
var unique = function(input) {
	return filter(input,function(current,index,arr) {return arr.indexOf(current) == index;});
};

// un-nests an array.  that is, flatten([[1, 2], [3], [[4]]])
// becomes [1, 2, 3, 4]
var flatten = function(input) {

};

// returns true if the input contains the target, and false if not.
var contains = function(input, target) {
	return reduce(input,function(previous,current,index,arr) {return arr.indexOf(target) !== -1 || previous;},false);
};




