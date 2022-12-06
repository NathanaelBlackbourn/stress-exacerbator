// Central functions calls all others
function main {
    call date rendering
    add get todo listener
}

// Showing date on screen
function date rendering {
    get date
    call show date, pass date
}

function show date {
    assign received date to innertext in a div
}

// Getting to dos
function add listener to get todo button {
    add event listener get to dos
}

function get to dos {
    call get input value
    call send api
    send json to html writing function
}

function get input value {
    get input value from field, returns to get todos
    removes input field from dom
}

function send to api {
    return api json
}

function write out to dos {
    take json
    for loop, create html elements call add listener to checkbox
}

function add checkbox listener {
    add listener {
        upon tick, remove element, check if todos ramein, if not add get todos button
    }
}
