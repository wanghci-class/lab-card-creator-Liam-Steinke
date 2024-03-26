let prev = document.getElementById("prev")
let to = document.getElementById("To")
let from = document.getElementById("From")
let title = document.getElementById("Title")
let subtitle = document.getElementById("Subtitle")
let message = document.getElementById("Message")
prev.addEventListener('click', () => {
    let cardT = document.getElementsByClassName("title-text")
    cardT[0].textContent = title.value
    let cardS = document.getElementsByClassName("subtitle-text")
    cardS[0].textContent = subtitle.value
    let cardTo = document.getElementsByClassName("to-text")
    cardTo[0].textContent = to.value
    let cardM = document.getElementsByClassName("message-text")
    cardM[0].textContent = message.value
    let cardF = document.getElementsByClassName("from-text")
    cardF[0].textContent = from.value
})
let save = document.getElementById("save")
save.addEventListener('click', () => {
    let arr = JSON.parse(localStorage.getItem('cards'))
    if (arr == null){
        arr = []
    }
    var dict = {to: to.value, from: from.value, title: title.value, subtitle: subtitle.value, message: message.value}
    arr.push(dict)
    localStorage.setItem('cards',JSON.stringify(arr))
})