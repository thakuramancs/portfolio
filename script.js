const autotext = document.querySelector("#autotext");
document.addEventListener("DOMContentLoaded", function() {
    animateText("line1");
    setTimeout(() => animateText("line2"), 1000);
    setTimeout(() => animateText("line3"), 2000);
});

function animateText(id) {
    const text = document.getElementById(id);
    const characters = text.textContent.split("");
    text.textContent = "";
    characters.forEach((char, index) => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.animationDelay = `${index * 100}ms`; /* Delay animation */
        text.appendChild(charSpan);
    });
}
function displayWordCharacterByCharacter(word) {
    let index = 0;
    const wordLength = word.length;
    autotext.innerText = '';
    const intervalID = setInterval(() => {
        if (index === wordLength) {
            clearInterval(intervalID);
        } else {
            autotext.innerText += word[index++];
        }
    }, 100); 
};

(function(){
    const wordlist=["Frontend Developer","Coder","LeetCoder"];
    let currentIndex=0;
    const intervalDuration=2000;
setInterval(() => {
    const word = wordlist[currentIndex];
    displayWordCharacterByCharacter(word);

    currentIndex = (currentIndex + 1) % wordlist.length;
}, intervalDuration);
})();



