//hover text for dot menu
const profileLabel = document.querySelector("#profile-label");
document.getElementById("profile-dot").onmouseover = document.getElementById("profile-dot").onmouseout = displayProfText;

const projectLabel = document.querySelector("#project-label");
document.getElementById("project-dot").onmouseover = document.getElementById("project-dot").onmouseout = displayProjText;

const workLabel = document.querySelector("#work-label");
document.getElementById("work-dot").onmouseover = document.getElementById("work-dot").onmouseout = displayWorkText;

const skillsLabel = document.querySelector("#skills-label");
document.getElementById("skills-dot").onmouseover = document.getElementById("skills-dot").onmouseout = displaySkillsText;

function displayProfText(dot){
  if (event.type == "mouseout") {
    profileLabel.innerHTML = "<p></p>";
  }
  else{
    profileLabel.innerHTML = "<p>Profile</p>";
  }
}

function displayProjText(dot){
  if (event.type == "mouseout") {
    projectLabel.innerHTML = "<p></p>";
  }
  else{
    projectLabel.innerHTML = "<p><br>Current Projects</p>";
  }
}

function displayWorkText(dot){
  if (event.type == "mouseout") {
    workLabel.innerHTML = "<p></p>";
  }
  else{
    workLabel.innerHTML = "<p><br><br>Work Experience</p>";
  }
}

function displaySkillsText(dot){
  if (event.type == "mouseout") {
    skillsLabel.innerHTML = "<p></p>";
  }
  else{
    skillsLabel.innerHTML = "<p><br><br><br>Skills, Education, & Recommendations</p>";
  }
}
