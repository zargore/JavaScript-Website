/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Function for Variables Example 1 Answer
function varAnswer1() {
    let x = 25;
    let y = 100;
    let z = x + y;
    document.getElementById("demo").innerHTML =
        "The value of z is: " + z;
}

// Function for Variables Example 2 Answer
function varAnswer2() {
    let price1 = 200;
    let price2 = 300;
    let total = price1 + price2;
    document.getElementById("demo1").innerHTML =
        "The total is: " + total;
}

//Function for Data Types Example 1 Answer
function dataTypesAnswer() {
    let x = "Volvo" + 16;
    document.getElementById("demo2").innerHTML =
        "The output will be: " + x;
}

// Function for Conditions Example 1 Answer
function conditionAnswer() {
    let hour = new Date().getHours();
    let greeting;
    if (hour < 18) {
        greeting = "Good Day!";
    } else {
        greeting = "Good Evening!"
    }
    document.getElementById("demo3").innerHTML = greeting;
}

    // Function for Functions Example 1 Answer
    function myFunction(p1, p2) {
        return p1 * p2;
    }
    document.getElementById("demo4").innerHTML =
        "The output of p1 * p2 = " + myFunction(4, 3);
