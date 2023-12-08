let inputEl = document.getElementById('inpu')


function Solve(value) {
    inputEl.value += value
}

function Clear() {
    inputEl.value = ''
}

function Equal() {
    inputEl.value = eval(inputEl.value)
}

function Back() {
    inputEl.value = inputEl.value.slice(0, -1);
}

