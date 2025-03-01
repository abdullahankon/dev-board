const completeButtons = document.querySelectorAll(".btncmplt"); 
const taskAssigned = document.getElementById("counter");
const totalTasks = document.getElementById("tTask");
const history = document.getElementById("history-container");
const clrBtn= document.getElementById("clr-btn");

let taskCount = 6; 
let completedCount = 23; 

completeButtons.forEach(button => {
  button.addEventListener("click", function() {
    this.disabled = true;
    alert("Board Updated Successfully");

    taskCount--;
    completedCount++;

    taskAssigned.textContent = taskCount;
    totalTasks.textContent = completedCount;

    const taskTitle = this.closest(".rounded-lg").querySelector("h1").textContent;
    const completionTime = new Date().toLocaleTimeString();
    const newEntry = document.createElement("p");
    newEntry.textContent = `You have Complete The Task ${taskTitle} at ${completionTime}`;
    newEntry.classList.add("log-design");
    history.appendChild(newEntry);

    if (taskCount === 0) {
      alert("Congratulation you have compleated all tasks.");
    }
  });
});

clrBtn.addEventListener("click", function() {
    history.innerHTML = "";
  });

  const currentDateElement = document.getElementById("today-date");

  function formatDate(date) {
    const os = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', os);
  }
  
  function displayDate() {
    const today = new Date();
    const formattedDate = formatDate(today);
    currentDateElement.textContent = formattedDate;
  }
  
  displayDate();