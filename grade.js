function grade(){
    var g = prompt("what is your grade you pokemon");
    if(g >= 100){
        console.log(alert("You got that A1(A+) grade"))
    } 
    else if(g < 100 && g > 90){
        console.log(alert("You got that A grade"))
    } 
    else if(g < 90 && g > 80){
        console.log(alert("You got that B grade"))
    } 
    else if(g < 80 && g > 70){
        console.log(alert("You got that C grade"))
    } 
    else if(g < 70 && g >= 65 ){
        console.log(alert("You got that D grade"))
    } 
    else if(g < 65){
        console.log(alert("You got that F grade"))
    } 
}

grade();