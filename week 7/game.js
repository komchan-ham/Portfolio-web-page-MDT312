window.onload = pageLoad;

function pageLoad() {
    // Attach the startGame function to the start button
    document.getElementById("start").onclick = startGame;
}

function startGame() {
    alert("Ready");
    clearScreen();  // Clear any existing boxes before starting
    addBox();       // Add new boxes
    timeStart();    // Start the timer
}

function timeStart() {
    var TIMER_TICK = 1000; // 1 second per tick
    var min = 0.5; // 0.5 minute = 30 seconds
    var second = min * 20;
    var x = document.getElementById('clock');
    var timer = setInterval(timeCount, TIMER_TICK); // Start the timer with setInterval

    function timeCount() {
        var allbox = document.querySelectorAll("#layer div");
        if (second > 0) {
            second--;
            x.innerHTML = second + " seconds"; // Update the clock display

            // Check if there are no boxes left and time is still remaining
            if (allbox.length == 0 && second > 0) {
                alert("You win!");
                clearInterval(timer);
                clearScreen();
            }
        } else {
            // If the time is up and there are still boxes left
            if (allbox.length > 0) {
                alert("Game over!");
                clearScreen();
            }
            clearInterval(timer); // Stop the timer
        }
    }
}

function addBox() {
    var numbox = document.getElementById("numbox").value; // Number of boxes from input
    var gameLayer = document.getElementById("layer"); // Game layer where boxes will be added
    var colorDrop = document.getElementById("color").value; // Box color from input

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop; // Add the square class and color class
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px"; // Random horizontal position
        tempbox.style.top = Math.random() * (500 - 25) + "px";  // Random vertical position
        
        // Add the box to the game layer
        gameLayer.appendChild(tempbox);
        bindBox(tempbox); // Bind the click event to the box
    }
}

function bindBox(box) {
    // Remove the box when clicked
    box.onclick = function() {
        box.remove();
    };
}

function clearScreen() {
    var allbox = document.querySelectorAll("#layer div");

    // Remove all existing boxes
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].remove();
    }
}
