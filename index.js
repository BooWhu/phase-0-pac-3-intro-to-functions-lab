var uppercase, lowercase
function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    uppercase = string.toUpperCase()
    string = uppercase;
    console.log(uppercase);
}function logWhisper(string){
    lowercase = string.toLowerCase()
    string = uppercase;
    console.log(lowercase);
}
function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase() === string){
      return "I can\'t hear you!";
    }
    if (string.toUpperCase() === string){
      return "YES INDEED!";
    }
    if (string === "Let's have dinner together!"){
      return "I would love to!";
    }
}