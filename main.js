const PROJECTS = ["01 - JavaScript Drum Kit", "02 - JS and CSS Clock",
    "03 - CSS Variables", "04 - Array Cardio Day 1",
    "05 - Flex Panel Gallery", "06 - Type Ahead",
    "07 - Array Cardio Day 2", "08 - Fun with HTML5 Canvas",
    "09 - Dev Tools Domination", "10 - Hold Shift and Check Checkboxes",
    "11 - Custom Video Player", "12 - Key Sequence Detection",
    "13 - Slide in on Scroll", "14 - JavaScript References VS Copying",
    "15 - LocalStorage", "16 - Mouse Move Shadow",
    "17 - Sort Without Articles", "18 - Adding Up Times with Reduce",
    "19 - Webcam Fun", "20 - Speech Detection",
    "21 - Geolocation", "22 - Follow Along Link Highlighter",
    "23 - Speech Synthesis", "24 - Sticky Nav",
    "25 - Event Capture, Propagation, Bubbling and Once", "26 - Stripe Follow Along Nav",
    "27 - Click and Drag", "28 - Video Speed Controller",
    "29 - Countdown Timer", "30 - Whack A Mole",
];


window.onload = () => {
    loadProjects();
};

function loadProjects() {
    let projects = PROJECTS,
        projectsContainer = document.getElementById('projects'),
        html = '';

    projects.forEach((project) => {
        html += `<div onmouseenter="cardMouseEnter(event)" onmousemove="cardMouseMove(event)" onmouseleave="cardMouseLeave(event)" class="card-wrap">`;

        html += `<div class="card" >`;
        let backgroundImageUrl = `images/${project}.png`;
        html += `<div class="card-bg" style="background-image: url('${backgroundImageUrl}');"></div>`;
        html += `<div class="card-info">`;
        html += `<h1>${project}</h1>`;

        html += `<div class="card-info-buttons">`;
        
        html += `<a href="${project}/index.html" target="_blank" class="card-info-button">See it</a>`;
        html += `</div>`;
        html += `</div>`;
        html += `</div>`;
        html += `</div>`;
    });
    projectsContainer.innerHTML = html;
}

let project_cardWrap, project_card, project_cardBg, project_cardBgImg;
let prCard_width, prCard_height, prCard_mouseX, prCard_mouseY = 0;
let prCard_mouseLeaveDelay = null;

function cardMouseEnter(e) {
    project_cardWrap = e.target;
    project_card = project_cardWrap.children[0];
    project_cardBg = project_card.children[0];
    project_cardBgImg = project_cardBg.style.backgroundImage;
    // clearTimeout(prCard_mouseLeaveDelay);
}

function cardMouseMove(e) {
    prCard_width = project_cardWrap.offsetWidth;
    prCard_height = project_cardWrap.offsetHeight;

    prCard_mouseX = e.pageX - project_cardWrap.offsetLeft - prCard_width / 2;
    prCard_mouseY = e.pageY - project_cardWrap.offsetTop - prCard_height / 2;
    setStyles();
}

function cardMouseLeave(e) {

    prCard_mouseLeaveDelay = setTimeout(() => {
        e.target.children[0].setAttribute("style", 'transform: rotateY(0deg) rotateX(0deg);');
        e.target.children[0].children[0].setAttribute("style", `background-image: ${e.target.children[0].children[0].style.backgroundImage};transform: translateX(0px) translateY(0px);`);
    }, 700);
}

function setStyles() {
    rotX = (prCard_mouseX / prCard_width) * 30;
    rotY = (prCard_mouseY / prCard_height) * -30;
    let styleCard = `transform: rotateY(${rotX}deg) rotateX(${rotY}deg);`;
    project_card.setAttribute("style", styleCard);

    traX = (prCard_mouseX / prCard_width) * -40;
    traY = (prCard_mouseY / prCard_height) * -40;
    let styleCardBg = `background-image: ${project_cardBgImg};transform: translateX(${traX}px) translateY(${traY}px);`;
    project_cardBg.setAttribute("style", styleCardBg);
}