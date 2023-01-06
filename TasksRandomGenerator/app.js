// Lista zadań do zrobienia na daną zmiane
const tasks = {
  day: ['umyj kibel', 'umyj kibel', 'lodowke umyj', 'nasz kibel', 'kibellos'],
  day2: ['1', '2', '3', '4', '5'],
  night: ['x', 'z', 'c', 'b', 'd'],
  night2: ['sadasd', 'dsadas', 'dasdsa umyj', 'dsadas', 'dasda'],
};
// 
let drawnTasks = {
  day: [],
  night: [],
  day2:[],
  night2:[],
};

function drawTask(timeOfDay) {
  // Sprawdzam czy zostały jescze jakieś taski jeśli nie wysylam komunikat
  if (tasks[timeOfDay].length === 0) {
    alert('Niestety nie ma już wiecej zadań do zrobienia Wiola wszystko zrobiła już,odpocznij sobie ;)');
    return;
  }

  // Wybieram losowe zadanie z puli zadań
  const index = Math.floor(Math.random() * tasks[timeOfDay].length);

  const task = tasks[timeOfDay][index];

  // Wybrane zadanie usuwam z puli żeby się nie dublowały zadania
  tasks[timeOfDay] = tasks[timeOfDay].slice
  
  (0, index).concat(tasks[timeOfDay].slice(index + 1));
  

  // Add the task to the list of drawn tasks
  drawnTasks[timeOfDay].push(task);

  return task;
  
  //   updateTaskList();
// }

// Funkcja po kliknięciu w przycisk losująca
}
const dayButton = document.getElementById('dayButton');
const dayButton2 = document.getElementById('dayButton2');
const nightButton = document.getElementById('nightButton');
const nightButton2 = document.getElementById('nightButton2');

dayButton.addEventListener('click', () => {
  displayTask(dayButton, 'day');
});

dayButton2.addEventListener('click', () => {
  displayTask(dayButton2, 'day2');
});

nightButton.addEventListener('click', () => {
  displayTask(nightButton, 'night');
});

nightButton2.addEventListener('click', () => {
  displayTask(nightButton2, 'night2');
});
const displayTask = (button, timeOfDay) => {
  // get the current date and time
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  const timeString = currentDate.toLocaleTimeString();

  // get a random task from the task table
  const task = drawTask(timeOfDay);

  // create the elements to display the task information
  const taskRow = document.createElement('div');
  taskRow.classList.add('row');

  const dateColumn = document.createElement('div');
  dateColumn.classList.add('col-5');
  dateColumn.innerText = `${dateString} ${timeString}`;

  const taskColumn = document.createElement('div');
  taskColumn.classList.add('col-6');
  taskColumn.innerText = task;
  const checkboxColumn = document.createElement('div');
  checkboxColumn.classList.add('col-1');
  const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
  // CHECKBOX RESETUJE ZADANIE CO MIESIAC
  const resetTask = (timeOfDay, task) => {
  // Add the task back to the tasks table
  tasks[timeOfDay].push(task);

  // Remove the task from the list of temporarily drawn tasks
  const index = drawnTasks[timeOfDay].indexOf(task);
  drawnTasks[timeOfDay] = drawnTasks[timeOfDay].slice(0, index).concat(drawnTasks[timeOfDay].slice(index + 1));
};

checkbox.addEventListener('click', () => {
  setTimeout(() => {
    resetTask(timeOfDay, task);
  }, 15000);  // reset the task after 15 seconds (15000 milliseconds)
});
  checkboxColumn.appendChild(checkbox);

  // append the elements to the task row
  taskRow.appendChild(dateColumn);
  taskRow.appendChild(taskColumn);
  taskRow.appendChild(checkboxColumn);

  // append the task row after the button
  button.after(taskRow);
};
