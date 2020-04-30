

// this code for clicking

for (i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll("button")[i].addEventListener("click", function(){
var buttonInnerHTML= this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}

// this code for keyboard press

document.addEventListener("keypress", function(){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){

switch (key) {
  case "h":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "e":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
      case "y":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "j":
          var tom = new Audio("sounds/tom-2.mp3");
          tom.play();
          break;
          case "a":
            var tom= new Audio("sounds/tom-1.mp3");
            tom.play();
            break;
            case "c":
              var tom4 = new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;
              case "k":
                var kcrash = new Audio("sounds/crash.mp3");
                kcrash.play();
                break;
  default: console.log(buttonInnerHTML);

}
}

function buttonAnimation(currentKey){
  var activeButton= document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);
}
