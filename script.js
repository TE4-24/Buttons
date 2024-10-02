// script.js

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let action = this.getAttribute("data-action");
      sendAction(action);
    });
  });
});

// Simulate sending an action
function sendAction(action) {
  console.log(`Action sent: ${action}`);

  // Example: Send action to server using AJAX
  fetch("controller.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: action }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Server response:", data))
    .catch((error) => console.error("Error:", error));
}
