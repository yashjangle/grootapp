var btntranslate = document.querySelector(".btn")
var textInput = document.querySelector(".text-input")
var textOutput = document.querySelector(".output-input")

var serverURL = "https://api.funtranslations.com/translate/groot.json";
function getTranslationURL(input) {
    return `${serverURL}?text=${input}`
    //    return serverURL + "?" + "text=" + input
}


function errorhandler() {
    textOutput.innerText = `There might be some issues with the server. Please try again in sometime.`;
    textOutput.style.color = "red";
}

btntranslate.addEventListener("click", function clickhandler() {

    var inputText = textInput.value

    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {

            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        })
        .catch(() => errorhandler())
})
