
let formData = {
    input: [{ top: 2.2, left: 45.8, }, { top: 6.8, left: 45.8 }, { top: 11.3, left: 45.8 }, { top: 15.7, left: 45.8 }, { top: 20.3, left: 45.8 }, { top: 24.8, left: 45.8 }, { top: 56.7, left: 45.8 }, { top: 61.2, left: 46.3, width: 20, height: 15 }, 
    {top: 20, left: 20, type: "checkbox"}],
    styling: { width: 10, height: 3 }
}


function create_input(top, left, width, height, type) {
    //create an input element 
    let input = document.createElement("input");
    let fixedImage = document.querySelector(".fixedimage");
    fixedImage.appendChild(input);
    //set the styling of each input field
    input.style.position = "absolute";
    input.style.top = `${top}%`;
    input.style.left = `${left}%`;
    input.style.width = `${width}%`;
    input.style.height = `${height}%`;
    input.type = `${type}`;
}



function create_form(formData) {

    for (i = 0; i < formData.input.length; i++) {

        let top = formData.input[i].top;
        let left = formData.input[i].left;
        let width = formData.input[i].width || formData.styling.width;
        let height = formData.input[i].height || formData.styling.height;
        let type = formData.input[i].type || "text";
        create_input(top, left, width, height, type);

    }
}

create_form(formData);