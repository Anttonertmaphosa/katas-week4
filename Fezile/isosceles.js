function isosceles(num) {
    for (i = 0; i < num; i++) {
        var str = '';
        //Rows and pyramid design
        for (x = 1; x < num - i; x++) {
            str = str + ' ';
        }
        //Prints #s in right-handed triangle
        for (k = 1; k <= (2 * i + 1); k++) {
            str = str + '#';
        }
        console.log(str);
    }
}

isosceles(5);