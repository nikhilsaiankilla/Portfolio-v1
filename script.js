function loco() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
loco();

// declaritions
let navBar = document.querySelector(".nav-links");

function animations() {
  var tl = gsap.timeline();

  tl.from(".logo ,.nav-links li a, .resume-btn", {
    y: -100,
    duration: 0.5,
    opacity: 0,
    // delay: 0.5,
    stagger: 0.3,
  });

  tl.from(".hero-section h5,.hero-section h2", {
    x: 700,
    duration: 0.5,
    stagger: 0.4,
    opacity: 0,
  });
  tl.from(".hero-section .hero-img", {
    y: 700,
    opacity: 0,
    duration: 1.5,
  });
}
animations();

// handling nav sliding
function navHandler() {
  let hamburger = document.querySelector("#hamburger i");
  if (navBar.classList.contains("hide")) {
    navBar.classList.remove("hide");
    hamburger.classList.remove("ri-bar-chart-horizontal-line");
    hamburger.classList.add("ri-close-line");
  } else {
    navBar.classList.add("hide");
    hamburger.classList.add("ri-bar-chart-horizontal-line");
    hamburger.classList.remove("ri-close-line");
  }
}

// handling nav on click on link
function navLinkHandlerOnClick() {
  let navBar = document.querySelector(".nav-links");
  let navLinks = document.querySelectorAll(".nav-links li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      let navBar = document.querySelector(".nav-links");
      navBar.classList.add("hide");
    });
  });
}
navLinkHandlerOnClick();

function heroImgResponseAnimation() {
  let heroSection = document.getElementById("hero-section");
  heroSection.addEventListener("mousemove", (dets) => {
    gsap.to(".hero-img", {
      x: 1 - dets.x * 0.03,
      y: 1 - dets.y * 0.03,
    });
  });
  let rightChallenge = document.querySelector(".right-challenges");
  rightChallenge.addEventListener("mousemove", (dets) => {
    gsap.to(".challenges-img", {
      x: 1 - dets.x * 0.03,
      y: 1 - dets.y * 0.03,
    });
  });
}
heroImgResponseAnimation();

function cursorAnimations() {
  let cursor = document.getElementById("cursor");
  cursor.style.display = "none";
  document.addEventListener("mouseenter", (dets) => {
    cursor.style.display = "flex";
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  document.addEventListener("mouseleave", (dets) => {
    cursor.style.display = "none";
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });
}
cursorAnimations();

function loadingScreenAnimation() {
  window.addEventListener("load", () => {
    let loader = document.getElementById("loader-screen");

    loader.classList.add("hide-loader");
  });
}
loadingScreenAnimation();

// storing skills data dynamically
let skillsData = [
  {
    id: 0,
    skillImg: "./Assests/Images/Logos/html.png",
    skillName: "html",
  },
  {
    id: 1,
    skillImg: "./Assests/Images/Logos/css3.png",
    skillName: "css3",
  },
  {
    id: 2,
    skillImg: "./Assests/Images/Logos/javascript.png",
    skillName: "javascript",
  },
  {
    id: 3,
    skillImg: "./Assests/Images/Logos/git.png",
    skillName: "git",
  },
  {
    id: 4,
    skillImg: "./Assests/Images/Logos/github.png",
    skillName: "github",
  },
  {
    id: 5,
    skillImg: "./Assests/Images/Logos/react.png",
    skillName: "react",
  },
  {
    id: 6,
    skillImg: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    skillName: "gsap",
  },
];

// storing projects data dynamically
let projectsData = [
  {
    id: 0,
    projectImg: "./Assests/Images/dev-2.png",
    projectName: "Project Name",
    projectDesc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
      mollitia aspernatur repellendus optio praesentium excepturi. Aut
      modi nihil laudantium rem?`,
    projectLiveLink: "https://github.com/nikhilsaiankilla",
    projectGithubLink: "https://github.com/nikhilsaiankilla",
  },
  {
    id: 1,
    projectImg: "./Assests/Images/dev-3.png",
    projectName: "Project Name",
    projectDesc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
      mollitia aspernatur repellendus optio praesentium excepturi. Aut
      modi nihil laudantium rem?`,
    projectLiveLink: "https://github.com/nikhilsaiankilla",
    projectGithubLink: "https://github.com/nikhilsaiankilla",
  },
  {
    id: 2,
    projectImg: "./Assests/Images/dev-1.png",
    projectName: "Project Name",
    projectDesc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
      mollitia aspernatur repellendus optio praesentium excepturi. Aut
      modi nihil laudantium rem?`,
    projectLiveLink: "https://github.com/nikhilsaiankilla",
    projectGithubLink: "https://github.com/nikhilsaiankilla",
  },
];

let skillsContainer = document.querySelector(".skills-container");

// showing skills dynalically
skillsData.forEach((skill) => {
  let skillbox = document.createElement("div");
  skillbox.classList.add("skill");

  let skillImgContainer = document.createElement("div");
  skillImgContainer.classList.add("skill-img-container");

  let skillImg = document.createElement("img");
  skillImg.src = skill.skillImg;

  skillImgContainer.appendChild(skillImg);

  skillbox.appendChild(skillImgContainer);

  let skillText = document.createElement("h5");
  skillText.innerText = skill.skillName;

  skillbox.appendChild(skillText);

  skillsContainer.appendChild(skillbox);
});

let projectsContainer = document.querySelector(".projects-container");

// showing the projects dynalically
projectsData.forEach((project) => {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project");

  let projectDetailsCard = document.createElement("div");
  projectDetailsCard.classList.add("project-details");

  let projectTitle = document.createElement("h2");
  projectTitle.classList.add("project-name");
  projectTitle.innerText = project.projectName;

  let projectDesc = document.createElement("p");
  projectDesc.innerText = project.projectDesc;

  projectDetailsCard.appendChild(projectTitle);

  projectDetailsCard.appendChild(projectDesc);

  let buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("btns-div");

  let liveLink = document.createElement("a");
  liveLink.classList.add("live-btn");
  liveLink.href = project.projectLiveLink;
  liveLink.target = "_blank";

  liveLink.innerHTML = `<i class="ri-share-box-fill"></i>`;

  let githubLink = document.createElement("a");
  githubLink.classList.add("git-btn");
  githubLink.href = project.projectLiveLink;
  githubLink.target = "_blank";

  githubLink.innerHTML = `<i class="ri-github-fill"></i>`;

  buttonsDiv.appendChild(liveLink);
  buttonsDiv.appendChild(githubLink);

  projectDetailsCard.appendChild(buttonsDiv);

  projectCard.appendChild(projectDetailsCard);

  let projectImageCard = document.createElement("div");
  projectImageCard.classList.add("project-img");

  let projectImg = document.createElement("img");

  projectImg.src = project.projectImg;

  projectImageCard.appendChild(projectImg);

  projectCard.appendChild(projectImageCard);

  projectsContainer.appendChild(projectCard);
});

let feedback = document.querySelector(".feedback");
let submitBtn = document.querySelector(".send-btn");

// handles the username
function userNameHandler() {
  let userName = document.getElementById("user-name").value;
  if (userName.length == 0) {
    return false;
  }
  return true;
}

// handles the user email
function userEmailHandler() {
  let userEmail = document.getElementById("user-email").value;
  if (userEmail.length == 0) {
    return false;
  }
  if (!userEmail.includes("@")) {
    return false;
  }
  return true;
}

// handles the user message
function userMessageHandler(message) {
  let userMessage = document.getElementById("user-message").value;
  if (userMessage.length == 0) {
    return false;
  }
  return true;
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx891t2zPkwOfhPhk9nOC_-UmR6ovGXg_IpMXszmsdjKWZ3eVC3evf9CWUgFhqrkpH-mw/exec";
const form = document.forms["submit-to-google-sheet"];

// exexutes on form submit

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!userNameHandler() || !userEmailHandler() || !userMessageHandler()) {
    feedback.style.color = "#FF5733";
    feedback.innerHTML = "Oops! You skipped the form, but I'm on the case. Enter details, and we'll connect soon!";

    setTimeout(() => {
      feedback.innerHTML = " ";
    }, 6000);
  } else {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        feedback.style.color = "#7CFC00";
        feedback.innerHTML = "Got it! Your message has safely landed in our digital realm. I\'ll reach out soon.";

        setTimeout(() => {
          feedback.innerHTML = " ";
        }, 6000);
      })
      .catch((error) => {
        feedback.style.color = "#FF5733";
        feedback.innerHTML = "Message got lost in cyberspace. Double-check details, it'll find its way.";

        setTimeout(() => {
          feedback.innerHTML = " ";
        }, 6000);
      });
  }
});

// scroll to top button added
let scroller = document.getElementById("scroller");
window.addEventListener("scroll", () => {
  let position = document.documentElement.scrollTop;
  if (Math.round(position) > 250) {
    scroller.style.display = "flex";
    console.log("show scroller");
  } else {
    scroller.style.display = "none";
  }
});

scroller.addEventListener("click", () => {
  console.log("click");
  document.documentElement.scrollTop = 0;
});

function navigateToContact(){
  let contactSection = document.getElementById("contact-section")
  contactSection.scrollIntoView()
}