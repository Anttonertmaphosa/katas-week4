function frame(arr = []) {
    var longest = "";
    longest = arr[0];
    var topbot = 0;
    var strTB = "";
    var tb = 0;

    //finds the longest word in our array and holds and on longest. i tracks the index of the array.
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {

            longest = arr[i];
        }
    }

    //topbot holds the number of stars we need for the top and botomn of our frame. tp is a copy.
    topbot = longest.length + 3;
    tb = topbot;

    // strTB is a string holing the stars that are acumilated.
    while (tb >= 0) {
        strTB += "*";
        tb--;
    }
    //print top border.
    console.log(strTB);

    var count_space = 0;
    var spc = "";

    //counts the number of spaces we put after the current word (topbot-length of (word at index [a]))
    // a tracks the index of our array, 

    for (a = 0; a < arr.length; a++) {
        count_space = topbot - arr[a].length;
        //while helps us acumilate spaces into var spc 
        while (count_space > 2) {
            spc += " ";
            count_space--;
        }

        console.log("* " + arr[a] + spc + "*");

        spc = "";
    }

    //star at the bottomn of our frame. strTB we got from the top border of our frame.
    console.log(strTB);



}

frame(["Write", "good", "code", "every", "day"]);