//this code sets up an interval timer that scrolls through a set of 3 radio buttons, selecting one button at a time every 5 seconds. It is essentially a slideshow of images. 

//set variable called counter
var counter = 1;

setInterval(function () {
    //the counter increases everytime the function is ran
    document.getElementById('radio' + counter).checked = true;
    counter++;

    //if the counter is greater than 3 then it resets to 1 
    if (counter > 3) {
        counter = 1;
    }

// 5000 milliseconds means that it executes the function every 5 seconds
}, 5000);