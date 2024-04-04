const container = document.getElementById("container");

const moveamt= 10;
let x=0;
let y=0;
document.addEventListener("keyup",event=>{
    container.textContent="😀";
    container.style.backgroundColor="lightblue";
})
document.addEventListener("keydown",event=>{
    container.textContent="😁";
    container.style.backgroundColor="tomato";
})
document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault()
        switch(event.key){
            case "ArrowUp":
                y-=moveamt;
                break;
            case "ArrowDown":
                y+=moveamt;
                break;
            case "ArrowLeft":
                x-=moveamt;
                break;
            case "ArrowRight":
                x+=moveamt;
                break;
        }
        container.style.top=`${y}px`;
        container.style.left=`${x}px`;
    }
})
