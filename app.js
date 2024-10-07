const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c",
    "d", "e", "f"];

const colorCodeEl = document.getElementById("color-code");
const clickBtn = document.getElementById("click");



// function getRandomColor() {
//     let colorCode = "#";
//     for(let i=0; i<6; i++) {
//         let randomIndex = Math.floor(Math.random() * 16);
//         colorCode += arr[randomIndex]
//     }
//     document.body.style.backgroundColor = colorCode;   
//     colorCodeEl.textContent = colorCode;
//     colorCodeEl.style.color = colorCode;
// }


// clickBtn.addEventListener("click", getRandomColor);
clickBtn.addEventListener("click", function() {
    let colorCode = "#";
    for(let i=0; i<6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        colorCode += arr[randomIndex]
    }
    document.body.style.backgroundColor = colorCode;   
    colorCodeEl.textContent = colorCode;
    colorCodeEl.style.color = colorCode;
});