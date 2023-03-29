let saveEl= document.getElementById("save-el");
let counter= document.getElementById("counter-el")
let count=0

function increment() {
count= count + 1
counter.textContent = count
}

function save() {
let stringSpace =  " "+ count + "-"
saveEl.textContent =  saveEl.textContent + stringSpace
count = 0
counter.textContent = 0

}
// document.body.style.backgroundColor = 'yellow';
