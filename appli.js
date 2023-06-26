/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
/*const text = document.querySelector(".second-text");

const textloand = () =>{
    setTimeout(() => {
        text.textContent = "Power-point ";
    },0);
    setTimeout(() => {
        text.textContent = "Word";
    },4000);

    setTimeout(() => {
        text.textContent = "Excel";
    },8000);

    return
}
textloand();
setInterval(textloand,120000)*/
const text= document.querySelector(".second-text");
function textLoad(liste) {
        let index = 0;

        setInterval(()=>{
            if(index >= liste.length){
                index = 0;
            }

            text.textContent = liste[index];
            index++;

        }, 3000); 
    }
    const liste = ['Excel', 'Word', 'Power-point'];
    textLoad(liste);




