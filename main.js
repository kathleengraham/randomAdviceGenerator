"use strict";

fetch('https://api.adviceslip.com/advice')
.then((response) => {
    console.log('Response: ', response);

    return response.json();
})
.then(data => {
    const tweetURL = "https://twitter.com/intent/tweet?text=";
    const adviceText = data.slip.advice;
    const adviceElement = document.getElementById("advice");
    const tweetButton = document.getElementById("tweet-button");

    adviceElement.innerText = adviceText;
    tweetButton.attributes.href.value = tweetURL + encodeURIComponent(`Today's advice from Kat's Random Advice Generator: "${adviceText}"`);

    console.log('API JSON Data: ', data);
    console.log('Advice: ', adviceText)
});

console.log("Hello!");