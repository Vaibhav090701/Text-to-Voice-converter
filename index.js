let convert=document.querySelector('.convert')
let textarea=document.querySelector('.textarea')
let speech=new SpeechSynthesisUtterance();// to convert text to speech


convert.addEventListener("click",()=>{
    speech.text=textarea.value;
    speech.pitch=1;
    speech.lang="en-US";
    speech.volume=1;
    speech.rate=1;
    speechSynthesis.speak(speech);

});