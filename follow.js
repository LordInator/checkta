var playing = 0;
var attrib = document.createAttribute("controls");

function biggerPoster(x){
    if(playing == 0){
        x.animate({width: "40%"}, 100);
    }
    if(playing > 0){
        x.setAttributeNode(attrib);
    }
}

function lesserPoster(x){
    x.removeAttribute("controls");
    x.style.width = "35%";
}

function Played(x){
    x.style.width = "35%";
    x.setAttributeNode(attrib);
    playing += 1;
    if(playing%2 == 1){
        x.play();
    }
    if(playing%2 == 0){
        x.pause();
    }
}

// $( "#but" ).click(function() {
//   $( "#box" ).animate({
//     width: "300px", 
//     }, 1500 );
// });