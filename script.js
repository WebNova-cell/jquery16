$(document).ready(function() {
  // Add task
  $("#addTask").click(function() {
    let taskText = $("#taskInput").val().trim();
    if (taskText !== "") {
      $("#taskList").append(`
        <li>
          <span class="task">${taskText}</span>
          <button class="toggle">✔</button>
          <button class="remove">✖</button>
        </li>
      `);
      $("#taskInput").val("");
    }
  });

  // Toggle completion
  $("#taskList").on("click", ".toggle", function() {
    $(this).siblings(".task").toggleClass("completed");
  });

  // Remove task
  $("#taskList").on("click", ".remove", function() {
    $(this).parent().remove();
  });
});