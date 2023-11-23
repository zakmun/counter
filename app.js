const buttonIncrement = document.getElementById('increment');
const buttonDecrement = document.getElementById('decrement');
const resetCounter = document.getElementById('reset');
let counterElement = document.getElementById('counter');
let newCounter = 0;

function increaseCounter() {
    buttonIncrement.addEventListener("click", function() {
        // Convert the current counter value to an integer and then increment
        newCounter = parseInt(counterElement.textContent) + 1;
        counterElement.textContent = newCounter;
    });
}

function decreaseCounter() {
    buttonDecrement.addEventListener("click", function() {
        // Convert the current counter value to an integer and then decrement
        newCounter = parseInt(counterElement.textContent) - 1;
        counterElement.textContent = newCounter;
    });
}

function resetBtn() {
    resetCounter.addEventListener("click", function() {
        newCounter = 0;
        counterElement.textContent = newCounter;
    });
}

// Call the functions to set up the event listeners
increaseCounter();
decreaseCounter();
resetBtn();