

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    const taskInput = document.getElementById('new-task-description');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      taskInput.value = ''; // Clear the input field
    }
  });
});
