const { RGBADepthPacking } = require("three");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getColorStr(r, g, b){
    return "rgb("+ r +","+ g +","+ b +")";
}

  
function resizeSh(){
    let inpt = document.getElementById("sz");
    let val = inpt.value;
    let shape = document.getElementById("shape");
    let grid = document.getElementById("grid");
    if(isNaN(parseInt(val)) || parseInt(val)<10000 || parseInt(val)>99999){
        alert("Enter a 5 digit number");
    }
    else{
        let side = 0;

        for(let i=0; i<val.length; ++i){
            side += parseInt(val[i]);
        }
        shape.style.borderRadius = (side/5)+"px";
        shape.style.width=side+"px";
        shape.style.height=side+"px";

        let gside = (screen.width-30-(2*side)) / side;
        console.log(gside,"yeye");

        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }

        for(let i=0; i<side; ++i){

            let line = document.createElement("div");
            line.classList.add("inner");

            for(let j=0; j<side; ++j){
                let ele = document.createElement("div");
                ele.classList.add("iin");
                ele.style.width=gside+"px";
                ele.style.height=gside+"px";
                let r = getRandomInt(0,256);
                let g = getRandomInt(0,256);
                let b = getRandomInt(0,256);
                ele.style.backgroundColor=getColorStr(r,g,b);
                line.appendChild(ele);
            }
            grid.appendChild(line);
        }
    }
}