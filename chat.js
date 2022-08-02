function main() {
    var know = {
        "Who are you": "Hello, Prajakta here",
        "How are you": "Fine :)",
        "Tell me something about FLP product": "Forever Living is the highest quality aloe vera products and is recognized as the world's leading multi level marketing company.",
        "Do you know a joke" : "Yes, I know",
        "Tell me one joke" : "What is a room with no walls?  A mushroom",
        "ok" : "Thank you so much",
        "Bye" : "Okay! Will meet soon"
    };
    var bot = document.getElementById('bot').value;
    document.getElementById('box').innerHTML = bot + "<br>";
    if(bot in know){
        document.getElementById('box').innerHTML = know[bot] + "<br>";
    }
    else{
        document.getElementById('box').innerHTML = "sorry,I didn't understand <br>"
    }
}