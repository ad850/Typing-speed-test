

const text = document.querySelector(".text");
const bone = document.getElementById("bone")
const ans = document.querySelector(".ans");
const typeWords = document.querySelector(".center");

let startTime;
let endTime;

let arr = ["it is a long established fact that a reader will be distracted by the readable content of",
    " Various versions have evolved over the years, sometimes by accident, sometimes on purpose .",
    "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."];

bone.addEventListener("click", function () {
    console.log(this)

    if (this.innerText == 'Start!') {

        typeWords.disabled = false;

        startgame();
    } else if (this.innerHTML == 'Done') {

        typeWords.disabled = true;

        bone.innerHTML = "Start!"
        endgame()
    }

})
const startgame = () => {
    text.innerHTML = arr[Math.floor(Math.random() * arr.length)]

    let time = new Date().getTime();

    startTime = time;

    bone.innerHTML = "Done";

}
const endgame = () => {

    let time = new Date().getTime();

    endTime = time;

    let totaltime = ((endTime - startTime) / 1000);

    console.log(totaltime);

    let totalstr = typeWords.value;

    let wordcount = wordcounter(totalstr);

    let speed = Math.round((wordcount / totaltime) * 60);


    let finalmessage = `you typed total ${speed}  word per minutes`;

    finalmessage += compareWords(text.innerText, totalstr)

    text.innerHTML = finalmessage;

}
const compareWords = (str1, str2) => {

    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;

    words1.forEach((val, ind) => {

        if (val == words2[ind]) {

            count++;
        }

    })

    let errorwords = (words1.length - count);

    return (` ${count} correct out of ${words1.length} words and total number of error are ${errorwords}`)
}

const wordcounter = (str) => {

    let response = str.split(" ").length;

    return response;
}




