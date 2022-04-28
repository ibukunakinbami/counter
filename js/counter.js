let counterTemplate = document.body.style;
counterTemplate.background = "radial-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5))";
counterTemplate.minHeight = '100vh';
counterTemplate.backgroundRepeat = "no-repeat";
counterTemplate.color = "#fff";


// let result = document.getElementById("output")
// console.log(result)

//Using getElementById 

let count = 0;

//Increase Button
document.getElementById("increase").onclick = function increase(){
    count += 1;
    document.getElementById("output").innerHTML = count;
}

//Decrease Button
document.getElementById("decrease").onclick = function decrease(){
    count -= 1;
    document.getElementById("output").innerHTML = count;
}

//Reset Button
document.getElementById("reset").onclick = function reset(){
    count = 0;
    document.getElementById("output").innerHTML = count;
}
