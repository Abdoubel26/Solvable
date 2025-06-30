// ===========================
// DOM References
// ===========================
const appContent = document.getElementById("appContent");
const wrapper = document.querySelector(".zoom-wrapper");
const content = document.querySelector(".app-content");

let scale = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let lastX = 0;
let lastY = 0;

// ===========================
// App Initialization
// ===========================
document.querySelector(".getStartedBtn").addEventListener("click", () => {
  document.querySelector(".greeting").style.display = "none";
  appContent.style.display = "block";
  addBranch(appContent);
});

// ===========================
// Tree Input Logic
// ===========================


function closeModal() {
  document.getElementById('1clarification').style.display = 'none';
  document.getElementById('2clarification').style.display = 'none';
  document.getElementById('3clarification').style.display = 'none';
}
function addBranch(parent, prefillGoal = null) {
  const branch = document.createElement("div");
  branch.className = "branch";
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

  // Add the goal input group
  const goalGroup = createInputGroup("The Goal", "Enter the goal:", prefillGoal);
  if (prefillGoal) {
    goalGroup.input.value = prefillGoal;
    goalGroup.input.disabled = true;
    const question = createLabel("Your goal now is:");
    container.appendChild(question);
  } else {
    const question = createLabel("What do you want to achieve?");
    container.appendChild(question);
  }
  container.appendChild(goalGroup.group);

  if (prefillGoal) {
    addProblemInput(container, branch);
  } else {
    goalGroup.input.focus();
    goalGroup.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.value.trim()) {
        e.target.disabled = true;
        addProblemInput(container, branch);
        document.getElementById('1clarification').style.display = 'flex';
        }
      });
    }
  }
let clarificationShown = false;

function addProblemInput(container, branch) {
  const question = createLabel("What's preventing you from doing this?");
  const problemGroup = createInputGroup("The Problem", "Enter the problem:");
  container.appendChild(question);
  container.appendChild(problemGroup.group);

  problemGroup.input.focus();
  problemGroup.input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      if (!clarificationShown) {
        document.getElementById('2clarification').style.display = 'flex';
        clarificationShown = true;
      }
      e.target.disabled = true;
      addSolutionInput(container, branch);
    }
    // If input is empty, do nothing
  });
}

let clarificationShown2 = false;

function addSolutionInput(container, branch) {
  const question = createLabel("How might you overcome this?");
  const solutionGroup = createInputGroup("The Solution", "Enter the solution:");
  container.appendChild(question);
  container.appendChild(solutionGroup.group);

  solutionGroup.input.focus();
  solutionGroup.input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      if (!clarificationShown2) {
        document.getElementById('3clarification').style.display = 'flex';
        clarificationShown2 = true;
      }
      e.target.disabled = true;
      addBranch(branch, e.target.value.trim());
    }
  });
}

function createLabel(text) {
  const labelDiv = document.createElement("div");
  labelDiv.className = "question";
  labelDiv.innerHTML = `<label>${text}</label>`;
  return labelDiv;
}

function createInputGroup(labelText, placeholder, prefill = null) {
  const group = document.createElement("div");
  group.className = "input-group";

  const label = document.createElement("label");
  label.textContent = labelText;

  const input = document.createElement("input");
  input.placeholder = placeholder;
  if (prefill) {
    input.value = prefill;
    input.disabled = true;
  }
  group.appendChild(label);
  group.appendChild(input);
  return { group, input };
}





