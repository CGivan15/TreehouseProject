// Function to Change Heading Color
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');

    myButton.addEventListener('click', () => {
        myHeading.style.color = 'blue';
    });


// Navigaion Bar Menu Function
function myMenu(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}

// appear function used for Header and main image
function appear(elm, i, step, speed){
    var x;
    //initial opacity
    i = i || 0;
    //opacity increment
    step = step || 5;
    //time waited between two opacity increments in msec
    speed = speed || 50; 

    x = setInterval(function(){
        //get opacity in decimals
        var opacity = i / 100;
        //set the next opacity step
        i = i + step; 
        if(opacity > 1 || opacity < 0){
            clearInterval(x);
            //if 1-opaque or 0-transparent, stop
            return; 
        }
        //modern browsers
        elm.style.opacity = opacity;
        //older IE
        elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}