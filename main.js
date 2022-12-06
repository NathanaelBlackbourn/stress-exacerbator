window.addEventListener('DOMContentLoaded', run);

function run() {
    displayDate();
    addGetterListener();
}

/** Calls functions responsible for getting and displaying the day's date. */
async function displayDate() {
    const day = getDay();
    const date = getDate();
    renderDate(day, date);
}

/** Gets the date as number from date object. */
function getDay() {
    const day = new Date().toLocaleDateString('en-us', { weekday:"long"});
    return day;
}

/** Creates a date string from date object methods. */
function getDate() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const dateString = date + '/' + month + '/' + year;
    return dateString;
}

/**
 * Renders day and date to html elements.
 * @param {number} day
 * @param {string} date
 */
function renderDate(day, date) {
    document.getElementById('day').innerText = day;
    document.getElementById('date').innerText = date;
}

/** Adds API calling function as listener to get tasks button */
function addGetterListener() {
    document.getElementById('stress-me').addEventListener('click', () => {
        const numberTasks = getNumber();
        displayTasks(numberTasks);
        document.getElementById('getter').classList.add('hidden');
    })
}

/** Gets value from the input element */
function getNumber() {
    const quantity = document.getElementById('quantity').value;
    return quantity;
}

/** Calls API which returns given number tasks */
async function displayTasks(numberTasks) {
    let todoList = []
    for (let i = 0; i < numberTasks; i++) {
        let r = await fetch('https://jsonplaceholder.typicode.com/todos/' + (i + 1))
        .then(response => response.json())
        .then(json => console.log(json));
        todoList.push(r);
    }
    console.log(todoList);
}