const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
"Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passwordLength = document.getElementById("pass-length")
const passBtn = document.getElementById("pass-btn")
const passwordOneEl = document.getElementById("password-one")
const passwordTwoEl = document.getElementById("password-two")

function getRandomChar(){
    let num = Math.floor(Math.random() * characters.length)
    return characters[num]
}

function genPassword() {
    let pass = ""
    for(let i = 0; i < passwordLength.value; i++) {
        pass += getRandomChar()
    }
    return pass
}

passBtn.addEventListener("click" , function(){
    let generatedPassOne = genPassword()
    let generatedPassTwo = genPassword()
    passwordOneEl.textContent = generatedPassOne
    passwordTwoEl.textContent = generatedPassTwo  
})
    
passwordOneEl.addEventListener("click", function(){
    navigator.clipboard.writeText( passwordOneEl.textContent )
    passwordOneEl.textContent = "Password copied"
})
passwordTwoEl.addEventListener("click", function(){
    navigator.clipboard.writeText( passwordTwoEl.textContent )
    passwordTwoEl.textContent = "Password copied"
})
