function cardGenerator() {
    const userName = prompt("What's your name?");
    if(userName) {
        document.getElementById("name").innerHTML = userName;

        const num1 = Math.floor(Math.random(0)*11)*99 + 1099;
        document.getElementById("num1").innerHTML = num1;

        const num2 = Math.floor(Math.random(0)*22)*99 + 2099;
        document.getElementById("num2").innerHTML = num2;

        const num3 = Math.floor(Math.random(0)*33)*99 + 3099;
        document.getElementById("num3").innerHTML = num3;

        const num4 = Math.floor(Math.random(0)*44)*99 + 4099;
        document.getElementById("num4").innerHTML = num4;
    }
    else {
        alert("Please enter your name and try again.");
    }
}