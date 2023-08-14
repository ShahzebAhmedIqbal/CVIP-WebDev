function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  const timeInput = document.getElementById('timeInput');
  const timeValue = timeInput.value;

  if (timeValue === '') {
    return;
  }

  const taskList = document.getElementById('taskContainer');
  const listItem = document.createElement('li');
  listItem.className='list';

  const taskElement = document.createElement('strong');
  taskElement.textContent = taskText;

  
  listItem.appendChild(taskElement);

  
  listItem.appendChild(document.createElement('br'));

  
  const timeTextNode = document.createTextNode(`Time: ${timeValue}`);
  listItem.appendChild(timeTextNode);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Done';
  deleteButton.className = 'delete-button';
  deleteButton.onclick = function() {
    listItem.remove();
  };

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = '';
  timeInput.value = '';
}