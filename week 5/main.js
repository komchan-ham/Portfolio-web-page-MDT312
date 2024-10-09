window.onload = function() {
    document.getElementById('top').innerText = 'เขียนข้อความ';
};

var postCounter = 1;

function postFunction() {
    var message = document.getElementById("message").value;
    
    if (postCounter === 1) {
        document.getElementById("topic").innerText = message;
        document.getElementById('message').value = "";
    } else if (postCounter === 2) {
        document.getElementById("reply1").innerText = message;
        document.getElementById('message').value = "";
    } else if (postCounter === 3) {
        document.getElementById("reply2").innerText = message;
        document.getElementById('message').value = "";
    } else {
        alert("You can only post a topic and two replies.");
    }
    
    postCounter++;
}

function clearFunction() {
    document.getElementById('message').value = "";
    document.getElementById('topic').innerText = "";
    document.getElementById('reply1').innerText = "";
    document.getElementById('reply2').innerText = "";
    postCounter = 1;
}
