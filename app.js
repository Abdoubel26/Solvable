// app.js

const appContent = document.getElementById("appContent");

function addBranch(parent, prefillGoal = null) {
  const branch = document.createElement("div");
  branch.className = "branch";

  // Flag the root container
  if (parent.id === "appContent" || parent.classList.contains("root")) {
    branch.classList.add("root");
  }

  const box = document.createElement("div");
  box.className = "branch-box";

  parent.appendChild(branch);
  branch.appendChild(box);

  const container = document.createElement("div");
  container.className = "input-group-container";
  box.appendChild(container);

  // Goal input
  const inputGroup = document.createElement("div");
  inputGroup.className = "question";
  inputGroup.innerHTML = `
    <label>what do you want to achieve?</label>
  
  `;
  container.appendChild(inputGroup);

  const goalGroup = document.createElement("div");
  goalGroup.className = "input-group";
  goalGroup.innerHTML = `
    <label>The Goal</label>
    <input
      placeholder="Enter the goal:"
      ${prefillGoal ? `value="${prefillGoal}" disabled` : ""}
    />`;
  container.appendChild(goalGroup);

  if (prefillGoal) {
    addProblemInput(container, branch);
  } else {
    goalGroup.querySelector("input").addEventListener("keydown", e => {
      if (e.key === "Enter" && e.target.value.trim()) {
        e.target.disabled = true;
        addProblemInput(container, branch);
      }
    });
  }
}



function addProblemInput(container, branch) {

  const inputGroup = document.createElement("div");
  inputGroup.className = "question";
  inputGroup.innerHTML = `
    <label>what's preventing you from doing this?</label>

  `;
  container.appendChild(inputGroup); 

  const problemGroup = document.createElement("div");
  problemGroup.className = "input-group";
  problemGroup.innerHTML = `
    <label>The Problem</label>
    <input placeholder="Enter the problem:" />`;
  container.appendChild(problemGroup);

  problemGroup.querySelector("input").addEventListener("keydown", e => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.target.disabled = true;
      addSolutionInput(container, branch);
    }
  });
}

function addSolutionInput(container, branch) {
  const inputGroup = document.createElement("div");
  inputGroup.className = "question";
  inputGroup.innerHTML = `
    <label>How might you overcome this?</label>
  
  `;
  container.appendChild(inputGroup);
  const solutionGroup = document.createElement("div");
  solutionGroup.className = "input-group";
  solutionGroup.innerHTML = `
    <label>The Solution</label>
    <input placeholder="Enter the solution:" />`;
  container.appendChild(solutionGroup);

  solutionGroup.querySelector("input").addEventListener("keydown", e => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.target.disabled = true;
      addBranch(branch, e.target.value.trim());
    }
  });
}

document.querySelector(".getStartedBtn").addEventListener("click", () => {
  document.querySelector(".greeting").style.display = "none";
  appContent.style.display = "block";
  addBranch(appContent);
});


