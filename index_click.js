var noOfButtons = document.querySelectorAll('.drum').length;
for(var i =0; i<noOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHtml = this.innerHTML;
        buttonAnimation(buttonInnerHtml);
       switch (buttonInnerHtml) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            case "a":
            var crash = new Audio("sounds/kick-bass.mp3");
            crash.play();
            break;
            case "s":
            var crash = new Audio("sounds/snare.mp3");
            crash.play();
            break;
            case "d":
            var crash = new Audio("sounds/tom-1.mp3");
            crash.play();
            break;
            case "j":
            var crash = new Audio("sounds/tom-2.mp3");
            crash.play();
            break;
            case "k":
            var crash = new Audio("sounds/tom-3.mp3");
            crash.play();
            break;
            case "l":
            var crash = new Audio("sounds/tom-4.mp3");
            crash.play();
            break;
       
        default:
            break;
       }
    }
    
    
)};
function buttonAnimation(currentKey){
        var activeButton=document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function (){
            activeButton.classList.remove("pressed")
        },100);
}
