
export function initialDOMLoad() {
    let containerDiv = document.querySelector(".container");
    const projectNav = document.createElement('div');
    projectNav.classList.add('navbar'); 
    
    containerDiv.appendChild(projectNav);

    const projectDisplay = document.createElement('div');
    containerDiv.appendChild(projectDisplay);
    projectDisplay.classList.add('display');

    
}
