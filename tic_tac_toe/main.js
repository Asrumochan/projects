let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turnx =true;

const winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log('box was clicked')
        if(turnx){
            box.innerText="X";
            turnx=false;
        }
        else{
            box.innerText="O";
            turnx=true;
        }
        box.disabled=true;
    })
});
