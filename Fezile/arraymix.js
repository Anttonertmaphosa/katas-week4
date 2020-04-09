function f(arr = [], arr2 = []) {
    var pr = "";
    var i = 0;
    var b = 0;
    var arrOutput = [];

    //Combining the two arrays with this while loop to output array. i tracks the array index.
    while (i < (arr.length) || i < arr2.length) {
        if (i < (arr.length)) {
            arrOutput.push(arr[i]);
        }
        if (i < arr2.length) {
            arrOutput.push(arr2[i]);
        }
        i++
    }
    var comRemover = 0;
    //b tracks the index of our array. pr holds the values to be printed from arrOutput.
    for (b = 0; b < arrOutput.length; b++) {
        pr += arrOutput[b];

        if (comRemover < arrOutput.length - 1) {
            pr += ", ";
            comRemover++;
        } //If statement add comma between numbers except the last number

    }

    console.log(pr);
}
f([11, 22, 33], [1, 2, 3]);