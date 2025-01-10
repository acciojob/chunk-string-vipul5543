function stringChop(str, size) {
  // your code here
 if (size <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  let result = [];
  let index = 0;

  // Loop to chop the string into chunks
  while (index < str.length) {
    result.push(str.substring(index, index + size));
    index += size;
  }

  return result;
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
