
let dummyArray = [{top:35, left:75}, {top:45, left:35}, {top:15, left:85}, {top:45, left:65}];
function create_input(top, left){

    //create an input element 
    let input = document.createElement("input");
    let fixedImage = document.querySelector(".fixedimage");
    fixedImage.appendChild(input);
    //set the styling each input field
    input.style.position = "absolute";
    input.style.top = `${top}%`;
    input.style.left = `${left}%`;

}

for (i = 0; i < dummyArray.length; i++) {
    
    create_input(dummyArray[i].top, dummyArray[i].left);
    
}