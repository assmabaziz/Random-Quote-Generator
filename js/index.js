const nextQuote = document.getElementById("nextQuote");
const autoGenerate = document.getElementById("autoGenerate");
const stopGenerate = document.getElementById("stopGenerate");
const quote = document.getElementById("quote");
const authorQuote = document.getElementById("authorQuote");
const quoteIndex = document.getElementById("quoteIndex");
const autoGenerateActive = document.getElementById("autoGenerateActive");
let myInterval;
async function getData() {
  const response = await fetch("quotes.json");
  const data = await response.json();
  return data;
}
async function getQuote() {
  const finalData = await getData();
  const randomIndex = Math.floor(Math.random() * finalData.length);
  quote.innerHTML = finalData[randomIndex].text;
  authorQuote.innerHTML = finalData[randomIndex].author;
}
nextQuote.addEventListener("click", async function () {
  const finalData = await getData();
  const randomIndex = Math.floor(Math.random() * finalData.length);
  quote.innerHTML = finalData[randomIndex].text;
  authorQuote.innerHTML = finalData[randomIndex].author;
  quoteIndex.innerHTML = randomIndex + 1;
});
autoGenerate.addEventListener("click", function () {
  myInterval = setInterval(async function () {
    const finalData = await getData();
    const randomIndex = Math.floor(Math.random() * finalData.length);
    quote.innerHTML = finalData[randomIndex].text;
    authorQuote.innerHTML = finalData[randomIndex].author;
    quoteIndex.innerHTML = randomIndex ;
    autoGenerateActive.innerHTML = "Mode auto active"
  }, 5000);
});
stopGenerate.addEventListener("click", function () {
  clearInterval(myInterval);
  autoGenerateActive.innerHTML = ""
});

