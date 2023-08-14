function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      return;
    }
  
    const dateTimeInput = document.getElementById('dateTimeInput');
    const dateTimeValue = dateTimeInput.value;
  
    if (dateTimeValue === '') {
      return;
    }
    
    const selectedDateTime = new Date(dateTimeValue);
    
    const currentDate = new Date();
  
    if (selectedDateTime <= currentDate) {
      alert("Please select future date and time.");
      return;
    }
  
    const taskList = document.getElementById('taskContainer');
    const listItem = document.createElement('li');
    listItem.className='list';

    const taskElement = document.createElement('strong');
    taskElement.textContent = taskText;
  
    listItem.appendChild(taskElement);
  
    listItem.appendChild(document.createElement('br'));
  
    const dateTextNode = document.createTextNode(selectedDateTime.toLocaleString());
    listItem.appendChild(dateTextNode);
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Done';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
      listItem.remove();
    };
  
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  
    taskInput.value = '';
    dateTimeInput.value = '';
  }