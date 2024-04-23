let countEl = document.getElementById("count-el")
let count = 0
let saveNum = 0
function increment() {
    count = count + 1 
    countEl.innerText = count
    console.log(count)
}
function save() {
    saveNum = count
    console.log(saveNum)
}