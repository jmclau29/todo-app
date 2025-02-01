export function initialDOMLoad() {
    let containerDiv = document.querySelector(".container");
    const projectNav = document.createElement('nav');
    projectNav.setAttribute('id','navbar');
    containerDiv.appendChild(projectNav);
    

    const projectDisplay = document.createElement('div');
    containerDiv.appendChild(projectDisplay);
    projectDisplay.setAttribute('id','display');
}

