// ============================================================
// RANDOM BACKGROUND COLOR CHANGER
// uses setInterval to change background color every 2 seconds
// uses event delegation on body to handle start/stop buttons
// ============================================================

let intevid = null; // stores interval ID — null means not running
let body = document.querySelector('body');
const start = document.querySelector('#start');

// generates random RGB color and its complementary color
// and changes background + button color every 2 seconds
function colrgen(){

    // prevent multiple intervals stacking if start clicked multiple times
    if(intevid) return;

    console.log("started changing color");

    intevid = setInterval(() => {

        // generate random RGB values between 0 and 255
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        // main color for background
        const color = `rgb(${r},${g},${b})`;

        // complementary color = 255 minus each channel
        // gives visually contrasting color for button
        const color2 = `rgb(${255-r},${255-g},${255-b})`;

        // apply colors
        body.style.backgroundColor = color;
        start.style.backgroundColor = color2;

    }, 2000)
}

// stops the color changing interval
function stopchange(){
    clearInterval(intevid); // stop the interval using saved ID
    intevid = null;         // reset to null so start works again
    body.style.backgroundColor = ""; // reset to default background
    start.style.backgroundColor = "black"; // reset button color
    console.log("stopped change");
}

// EVENT DELEGATION — one listener on body handles both buttons
// better than adding separate listeners to each button
body.addEventListener('click', (e) => {
    if(e.target.id === 'start')
        colrgen();
    else if(e.target.id === 'stop')
        stopchange();
})