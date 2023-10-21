loco();
animations();
navLinkHandlerOnClick();
heroImgResponseAnimation();
cursorAnimations();
loadingScreenAnimation();

// Declaritions
let navBar = document.querySelector(".nav-links");
let skillsContainer = document.querySelector(".skills-container");
let projectsContainer = document.querySelector(".projects-container");
let challengeContainer = document.getElementById("challenges-container");
let feedback = document.querySelector(".feedback");
let submitBtn = document.querySelector(".send-btn");
let scroller = document.getElementById("scroller");
let challengePage = document.getElementById('challenges-page')
let challengeCloseBtn = document.getElementById('challenges-close')
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx891t2zPkwOfhPhk9nOC_-UmR6ovGXg_IpMXszmsdjKWZ3eVC3evf9CWUgFhqrkpH-mw/exec";
const form = document.forms["submit-to-google-sheet"];

// Function Declaration Section
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
// Handling Nav Sliding
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
// Handling Nav On Click On Link
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
function loadingScreenAnimation() {
  window.addEventListener("load", () => {
    let loader = document.getElementById("loader-screen");

    loader.classList.add("hide-loader");
  });
}
// Handles The Username
function userNameHandler() {
  let userName = document.getElementById("user-name").value;
  if (userName.length == 0) {
    return false;
  }
  return true;
}
// Handles The User Email
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
// Handles The User Message
function userMessageHandler(message) {
  let userMessage = document.getElementById("user-message").value;
  if (userMessage.length == 0) {
    return false;
  }
  return true;
}
// Navigates To Specific Section
function navigateToContact() {
  let contactSection = document.getElementById("contact-section");
  contactSection.scrollIntoView();
}
function challengeActivater(){
  console.log("clicked")
  challengePage.style.display = "block"
}


// Function Calling Section

// Executes On Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!userNameHandler() || !userEmailHandler() || !userMessageHandler()) {
    feedback.style.color = "#FF5733";
    feedback.innerHTML =
      "Oops! You skipped the form, but I'm on the case. Enter details, and we'll connect soon!";

    setTimeout(() => {
      feedback.innerHTML = " ";
    }, 6000);
  } else {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        feedback.style.color = "#7CFC00";
        feedback.innerHTML =
          "Got it! Your message has safely landed in our digital realm. I'll reach out soon.";

        setTimeout(() => {
          feedback.innerHTML = " ";
        }, 6000);
      })
      .catch((error) => {
        feedback.style.color = "#FF5733";
        feedback.innerHTML =
          "Message got lost in cyberspace. Double-check details, it'll find its way.";

        setTimeout(() => {
          feedback.innerHTML = " ";
        }, 6000);
      });
  }
});

// Storing Skills Data Dynamically
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
// Storing Projects Data Dynamically
let projectsData = [
  {
    id: 0,
    projectImg: "./Assests/Images/ProjectImages/portfolio.png",
    projectName: "my portfolio",
    projectLiveLink: "https://nikhilsaiportfolio.netlify.app/",
    projectGithubLink: "https://github.com/nikhilsaiankilla/Portfolio-v1",
  },
  {
    id: 1,
    projectImg: "./Assests/Images/ProjectImages/twogood.png",
    projectName: "two good website",
    projectLiveLink: "https://twogood.netlify.app/",
    projectGithubLink: "https://github.com/nikhilsaiankilla/twogoodproject",
  },
  {
    id: 2,
    projectImg: "./Assests/Images/ProjectImages/shoestore.png",
    projectName: "Nike Shoe store",
    projectLiveLink: "https://shoestoreclone.netlify.app/",
    projectGithubLink: "https://github.com/nikhilsaiankilla/Nike-Ecommerce-Website",
  },
  {
    id: 3,
    projectImg: "./Assests/Images/ProjectImages/mirinda.png",
    projectName: "mirianda clone",
    projectLiveLink: "https://mirandaclonebynikhil.netlify.app/",
    projectGithubLink: "https://github.com/nikhilsaiankilla/miranda-clone",
  },
  {
    id: 4,
    projectImg: "./Assests/Images/ProjectImages/project4.png",
    projectName: "DUO",
    projectLiveLink: "https://github.com/nikhilsaiankilla",
    projectGithubLink: "https://github.com/nikhilsaiankilla",
  },
];

let challengesData = [
  {
    id: 0,
    challengeImg:
      "https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/12/enterprise-img.jpeg",
    challengeName: "Project Name",
    challengeLiveLink: "https://github.com/nikhilsaiankilla",
    challengeGithubLink: "https://github.com/nikhilsaiankilla",
  },
];

// Showing Skills Dynalically
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
// Showing The Projects Dynalically
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
  githubLink.href = project.projectGithubLink;
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
//Showing Challenges Dynamically
challengesData.forEach((challenge) => {
  let challengeCard = document.createElement("div");
  challengeCard.classList.add("challenge");

  let challengeImgContainer = document.createElement("div");
  challengeImgContainer.classList.add("challenge-img");

  let challengeImg = document.createElement("img");
  challengeImg.src = challenge.challengeImg;

  challengeImgContainer.appendChild(challengeImg);
  challengeCard.appendChild(challengeImgContainer)

  let challengeDetailsContiner = document.createElement("div");
  challengeDetailsContiner.classList.add("challenge-details");

  let challengeTitle = document.createElement("h2");
  challengeTitle.innerHTML = challenge.challengeName;

  challengeDetailsContiner.appendChild(challengeTitle);

  let buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("btns-div");

  let liveLink = document.createElement("a");
  liveLink.classList.add("live-btn");
  liveLink.href = challenge.challengeGithubLink;
  liveLink.target = "_blank";

  liveLink.innerHTML = `<i class="ri-share-box-fill"></i>`;

  let githubLink = document.createElement("a");
  githubLink.classList.add("git-btn");
  githubLink.href = challenge.challengeLiveLink;
  githubLink.target = "_blank";

  githubLink.innerHTML = `<i class="ri-github-fill"></i>`;

  buttonsDiv.appendChild(liveLink);
  buttonsDiv.appendChild(githubLink);

  challengeDetailsContiner.appendChild(buttonsDiv);
  challengeCard.appendChild(challengeDetailsContiner);

  challengeContainer.appendChild(challengeCard);
});
// Events
// scroll to top button added
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
challengeCloseBtn.addEventListener("click",()=>{
  challengePage.style.display = "none"
})
