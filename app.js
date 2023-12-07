function isItPal(){
    let inputEl = document.querySelector("#number");
    let number = inputEl.value;
    let result = document.querySelector("#result");
    let sonuc = document.querySelector("#sonuc");

    let reverseStr = "";
    for (let i=number.length-1; i>=0; i--){
        reverseStr += number.charAt(i);
    }
    if (reverseStr == number) {
        result.innerHTML = `Entered ${number} is a palindrome.`
        sonuc.innerHTML ="Congratulations!"
    }else{
        result.innerHTML = `Entered ${number} is not a palindrome.`
        sonuc.innerHTML ="Try again!"
    }
    inputEl.value = "";
}