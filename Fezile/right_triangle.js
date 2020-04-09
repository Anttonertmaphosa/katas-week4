var str = "";

function triangle(num) {

    for (i = 1; i <= num; i++) {
        str = "#";
        for (a = 1; a < i; a++) {
            str += "#";
        }

        console.log(str);
        str = "";

    }
}


triangle(6);