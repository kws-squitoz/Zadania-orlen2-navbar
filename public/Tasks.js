
// toggler navbar
const navbarToggler = document.getElementById('navbarToggler');
const navbarNav = document.getElementById('navbarNav');

navbarToggler.addEventListener('click', function() {
  if (navbarNav.style.display === 'block') {
    navbarNav.style.display = 'none';
  } else {
    navbarNav.style.display = 'block';
  }
});
// 
// Lista zadań do zrobienia na daną zmiane
// let tasks = {
//   day: ['Proszę umyć regał z soczkami i sprawdzić daty oraz planogram', 'Proszę umyć regał nowości,sprawdzić daty oraz planogram', 'Proszę umyć regał z energetykami i sprawdzić daty oraz planogram', 'Proszę umyć impulsy z gumami/batonami i sprawdzić daty oraz planogram', 'Proszę umyć regał z olejami oraz sprawdzić planogram','Proszę umyć regał z akcesorami samochodowymi oraz sprawdzić planogram','Proszę umyć stojak patriotyczny wdrożyć i sprawdzić planogram','Proszę ułożyc magazyn suchy(mleko,sosy) według zasad FIFO','Proszę umyć regał z czekoladami i sprawdzić daty oraz planogram',],
//   day2: ['Proszę umyć regał z Chipsami i sprawdzić daty oraz planogram', 'Proszę umyć regał z Chemią oraz zabawkami i sprawdzić planogram', 'Proszę umyć impulsy verva i sprawdzić daty oraz planogram', 'Proszę umyć impulsy prince polo i sprawdzić daty oraz planogram', 'Proszę umyć regał z ciastkami i sprawdzić daty oraz planogram','Proszę doprowadzić strefe kuchni/szatni do porządku','Prosze doprowadzić kącik gospodarczy do porządku umyć ściany poukładać chemie na półkach,puste butelki po płynach wyrzucić',],
//   night: ['Proszę umyć chłodnie z piwem(3 górne półki),sprawdzić daty oraz planogram', 'Proszę umyć chłodnie z napojami kolorowymi ,sprawdzić daty oraz planogram', 'Proszę umyć chłodnie z nabiałem i wodą,sprawdzić daty oraz planogram', 'Proszę umyć lodówke z energetykami,proszę sprawdzić planogram oraz daty','Proszę sprawdzić regał z alkoholami ułożyć według planogramów i według zasady fifo', 'Proszę ułożyć piwa w korytarzu(pełne zgrzewki obok pełnych zgrzewek,pomieszane obok siebie)','Proszę umyć regał z napojami kolorowymi przy kasie i sprawdzić daty oraz planogram','Proszę umyć regał przy kasie z wodami i sprawdzić daty oraz planogram','Proszę umyć chłodnie z piwem(3 dolne półki),sprawdzić daty oraz planogram','Proszę umyć zamrażalke z lodami ułożyć według planogramu','Proszę o uprzatnięcie magazynu półki z piwami','Proszę umyć chłodnie z energetykami,sprawdzić daty oraz planogram','Proszę o uprzatnięcie magazynu półki z energetykami','Proszę o uprzatnięcie magazynu półki z wodą i ciastkami','Proszę o uprzatnięcie magazynu półka z napojami kolorowymi','Proszę o uprzatnięcie magazynu półka z produktami z krótką datą ważności','Proszę o uprzatnięcie strefy drzwi wejściowych oraz okien za lodówkami przy kasie'],
//   night2: ['Proszę umyć chłodnie przy kasie z zapiekankami pizzą itp', 'Proszę przejść się po sklepie z kolektorem posprawdzać cenówki,sprawdzić czy plakaty dalej obowiązują gdzie nie ma cenówek je dorobić w odpowiednim kolorze', 'Proszę doprowadzić do porządku strefe zakasową(przetrzeć kurze,zrobić porządek w szafkach z zarówkami itp.)oraz przemyć pleksi(jeśli dalej obowiązują)', 'Proszę gruntownie przemyć toalete pracowniczą','Proszę doprowadzić biuro do porządku,zrobić porządek z papierami itp)'],
// };
// let tasks = {
//   day: ['Proszę umyć regał z soczkami i sprawdzić daty oraz planogram', 'Proszę umyć regał nowości,sprawdzić daty oraz planogram',],
//   day2:['3213','3131'],
//   night:['1','2','3',],
//   night2:['z','x','c',],
// }
// let drawnTasks = {
//   day: [],
//   day2: [],
//   night: [],
//   night2: []
// };
// const database = firebase.database();

// // Get references to the HTML elements
// const dayButton = document.getElementById('dayButton');
// const dayButton2 = document.getElementById('dayButton2');
// const nightButton = document.getElementById('nightButton');
// const nightButton2 = document.getElementById('nightButton2');
// const dayTaskDiv = document.getElementById('dayTaskDiv');
// const day2TaskDiv = document.getElementById('day2TaskDiv');
// const nightTaskDiv = document.getElementById('nightTaskDiv');
// const night2TaskDiv = document.getElementById('night2TaskDiv');

// // Attach click event listeners to the buttons
// dayButton.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     const drawnTask = drawTask('day');
//     displayTask(dayTaskDiv, 'day', drawnTask);
//   }
// });

// dayButton2.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('day2');
//     displayTask(day2TaskDiv, 'day2');
//   }
// });

// nightButton.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('night');
//     displayTask(nightTaskDiv, 'night');
//   }
// });

// nightButton2.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('night2');
//     displayTask(night2TaskDiv, 'night2');
//   }
// });

// // Get the data from the Realtime Database and update the page
// const dataRef = database.ref("tasks");
// dataRef.on("value", function(snapshot) {
//   // Get the data from the snapshot
//   const data = snapshot.val();
//   // Update the page with the new data
//   tasks.day = data.day;
//   tasks.day2 = data.day2;
//   tasks.night = data.night;
//   tasks.night2 = data.night2;
// });

// function drawTask(timeOfDay) {
//   if (tasks[timeOfDay].length === 0) {
//     alert('Niestety nie ma już wiecej zadań do zrobienia,Wiola wszystko zrobiła już,odpocznij sobie ;)');
//     return;
//   }
//   // Wybieram losowe zadanie z puli zadań
//   // Wybieram losowe zadanie z puli zadań
//   const index = Math.floor(Math.random() * tasks[timeOfDay].length);
//   const task = tasks[timeOfDay][index];
//   // Wybrane zadanie usuwam z puli żeby się nie dublowały zad
//   tasks[timeOfDay] = tasks[timeOfDay].slice(0, index).concat(tasks[timeOfDay].slice(index + 1));
  
//   //Add the task to the Realtime Database
//   const taskRef = dataRef.child(timeOfDay);
//   taskRef.update({
//     remainingTasks: tasks[timeOfDay],
//     drawnTask: task
//   });
//   //update the current task displayed on the webpage
//   displayTask(document.getElementById(timeOfDay + 'TaskDiv'), task);
// }

// function displayTask(div, timeOfDay, task) {
//   // Create a new element to display the task
//   const taskP = document.createElement('p');
//   taskP.innerHTML = task;
//   taskP.style.display = 'inline-block';

//   // Create a new element to display the time
//   const timeP = document.createElement('p');
//   timeP.innerHTML = timeOfDay;
//   timeP.style.display = 'inline-block';

//   // Create a new checkbox
//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.style.display = 'inline-block';

//   // Append the task, time, and checkbox to the div
//   div.appendChild(taskP);
//   div.appendChild(timeP);
//   div.appendChild(checkbox);
// }

// 
// let drawnTasks = {
//   day: [],
//   night: [],
//   day2:[],
//  night2:[],
// }; 

// function drawTask(timeOfDay) {
//   if (tasks[timeOfDay].length === 0) {
//     alert('Niestety nie ma już wiecej zadań do zrobienia,Wiola wszystko zrobiła już,odpocznij sobie ;)');
//     return;
//   }

//   // Wybieram losowe zadanie z puli zadań
//   const index = Math.floor(Math.random() * tasks[timeOfDay].length);

//   const task = tasks[timeOfDay][index];

//   // Wybrane zadanie usuwam z puli żeby się nie dublowały zadania slice usuwa
//   tasks[timeOfDay] = tasks[timeOfDay].slice
  
//   (0, index).concat(tasks[timeOfDay].slice(index + 1));
//   var db = firebase.database();


//   // Add the task to the list of drawn tasks
//   drawnTasks[timeOfDay].push(task);  
//   var taskRef = db.ref("tasks").push();
//   taskRef.set({
//     task: task,
//     // created_at: firebase.database.ServerValue.TIMESTAMP
//   });

//   return task;
  
//   //   updateTaskList();
// // }

// // Funkcja po kliknięciu w przycisk losująca
// }
// const dayButton = document.getElementById('dayButton');
// const dayButton2 = document.getElementById('dayButton2');
// const nightButton = document.getElementById('nightButton');
// const nightButton2 = document.getElementById('nightButton2');
// const dayTaskTable = document.getElementById('dayTaskTable');
// const day2TaskTable = document.getElementById('day2TaskTable');
// const nightTaskTable = document.getElementById('nightTaskTable');
// const night2TaskTable = document.getElementById('night2TaskTable');

// dayButton.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     displayTask(dayButton, 'day');
//     dayTaskTable.style.display = 'block';
//     day2TaskTable.style.display = 'none';
//     nightTaskTable.style.display = 'none';
//     night2TaskTable.style.display = 'none';
//   }
// });

// dayButton2.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     displayTask(dayButton2, 'day2');
//     dayTaskTable.style.display = 'none';
//     day2TaskTable.style.display = 'block';
//     nightTaskTable.style.display = 'none';
//     night2TaskTable.style.display = 'none';
//   }
// });

// nightButton.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     displayTask(nightButton, 'night');
//     dayTaskTable.style.display = 'none';
//     day2TaskTable.style.display = 'none';
//     nightTaskTable.style.display = 'block';
//     night2TaskTable.style.display = 'none';
//   }
// });

// nightButton2.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     displayTask(nightButton2, 'night2');
//     dayTaskTable.style.display = 'none';
//     day2TaskTable.style.display = 'none';
//     nightTaskTable.style.display = 'none';
//     night2TaskTable.style.display = 'block';
//   }
// });


// const displayTask = (button, timeOfDay) => {
//   // get the current date and time
//   const currentDate = new Date();
//   const dateString = currentDate.toLocaleDateString();
//   const timeString = currentDate.toLocaleTimeString();

//   // get a random task from the task table
//   const task = drawTask(timeOfDay);

//   // create the elements to display the task information
//   const taskRow = document.createElement('div');
//   taskRow.classList.add('row');

//   const dateColumn = document.createElement('div');
//   dateColumn.classList.add('col-3');
//   dateColumn.innerText = `${dateString} ${timeString}`;

//   const taskColumn = document.createElement('div');
//   taskColumn.classList.add('col-6');
//   taskColumn.innerText = task;
//   const checkboxColumn = document.createElement('div');
//   checkboxColumn.classList.add('col-1');
//   const checkbox = document.createElement('input');
// checkbox.type = 'checkbox';
//   // CHECKBOX RESETUJE ZADANIE CO MIESIAC
//   const resetTask = (timeOfDay, task) => {
//   // Add the task back to the tasks table   
//   tasks[timeOfDay].push(task);

//   // Remove the task from the list of temporarily drawn tasks
//   const index = drawnTasks[timeOfDay].indexOf(task);
//   drawnTasks[timeOfDay] = drawnTasks[timeOfDay].slice(0, index).concat(drawnTasks[timeOfDay].slice(index + 1));
// };

// checkbox.addEventListener('click', () => {
//   setTimeout(() => {
//     resetTask(timeOfDay, task);
//   }, 15000);  // reset the task after 15 seconds (15000 milliseconds)
// });
//   checkboxColumn.appendChild(checkbox);

//   // append the elements to the task row
//   taskRow.appendChild(dateColumn);
//   taskRow.appendChild(taskColumn);
//   taskRow.appendChild(checkboxColumn);

//   // append the task row after the button
//   button.after(taskRow);
// };

// Create a reference to the database service
// const database = firebase.database();

// // Get references to the HTML elements
// const dayButton = document.getElementById('dayButton');
// const dayButton2 = document.getElementById('dayButton2');
// const nightButton = document.getElementById('nightButton');
// const nightButton2 = document.getElementById('nightButton2');
// const dayTaskTable = document.getElementById('dayTaskTable');
// const day2TaskTable = document.getElementById('day2TaskTable');
// const nightTaskTable = document.getElementById('nightTaskTable');
// const night2TaskTable = document.getElementById('night2TaskTable');

// // Attach click event listeners to the buttons
// dayButton.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('day');
//     displayTask(dayTaskTable, 'day');
//   }
// });

// dayButton2.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('day2');
//     displayTask(day2TaskTable, 'day2');
//   }
// });

// nightButton.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('night');
//     displayTask(nightTaskTable, 'night');
//   }
// });

// nightButton2.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('night2');
//     displayTask(night2TaskTable, 'night2');
//   }
// });

// // Get the data from the Realtime Database and update the page
// const dataRef = database.ref("tasks");
// dataRef.on("value", function(snapshot) {
//   // Get the data from the snapshot
//   const data = snapshot.val();
//   // Update the page with the new data
//   dayTaskTable.innerHTML = data.day;
//   day2TaskTable.innerHTML = data.day2;
//   nightTaskTable.innerHTML = data.night;
//   night2TaskTable.innerHTML = data.night2;
// });

// function drawTask(timeOfDay) {
//   if (tasks[timeOfDay].length === 0) {
//     alert('Niestety nie ma już wiecej zadań do zrobienia,Wiola wszystko zrobiła już,odpocznij sobie ;)');
//     return;
//   }
//   // Wybieram losowe zadanie z puli zadań
//   const index = Math.floor(Math.random() * tasks[timeOfDay].length);
//   const task = tasks[timeOfDay][index];
//   // Wybrane zadanie usuwam z puli żeby się nie dublowały zad
//   tasks[timeOfDay] = tasks[timeOfDay].slice(0, index).concat(tasks[timeOfDay].slice(index + 1));

//   // Add the task to the Realtime Database
//   const taskRef = database.ref("tasks/" + timeOfDay).push();
//   taskRef.set(task);
// }
// const database = firebase.database();

// // Get references to the HTML elements
// const dayButton = document.getElementById('dayButton');
// const dayButton2 = document.getElementById('dayButton2');
// const nightButton = document.getElementById('nightButton');
// const nightButton2 = document.getElementById('nightButton2');
// const dayTaskDiv = document.getElementById('dayTaskDiv');
// const day2TaskDiv = document.getElementById('day2TaskDiv');
// const nightTaskDiv = document.getElementById('nightTaskDiv');
// const night2TaskDiv = document.getElementById('night2TaskDiv');

// // Attach click event listeners to the buttons
// dayButton.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('day');
//     displayTask(dayTaskDiv, 'day');
//   }
// });

// dayButton2.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('day2');
//     displayTask(day2TaskDiv, 'day2');
//   }
// });

// nightButton.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('night');
//     displayTask(nightTaskDiv, 'night');
//   }
// });

// nightButton2.addEventListener('click', () => {
//   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
//     drawTask('night2');
//     displayTask(night2TaskDiv, 'night2');
//   }
// });

// // Get the data from the Realtime Database and update the page
// const dataRef = database.ref("tasks");
// dataRef.on("value", function(snapshot) {
//   // Get the data from the snapshot
//   const data = snapshot.val();
//   // Update the page with the new data
//   if(data.day) {
//     tasks.day = data.day;
//   }
//   if(data.day2) {
//     tasks.day2 = data.day2;
//   }
//   if(data.night) {
//     tasks.night = data.night;
//   }
//   if(data.night2) {
//     tasks.night2 = data.night2;
//   }
// });

// function drawTask(timeOfDay) {
//   if (tasks[timeOfDay].length === 0) {
//     alert('Niestety nie ma już wiecej zadań do zrobienia,Wiola wszystko zrobiła już,odpocznij sobie ;)');
//     return;
//   }
//   // Wybieram losowe zadanie z puli zadań
//   const index = Math.floor(Math.random() * tasks[timeOfDay].length);
//   const task = tasks[timeOfDay][index];
//   // Wybrane zadanie usuwam z puli
//   tasks[timeOfDay] = tasks[timeOfDay].slice(0, index).concat(tasks[timeOfDay].slice(index + 1));
  
//   //Add the task to the Realtime Database
//   const taskRef = dataRef.child(timeOfDay);
//   taskRef.update({
//     remainingTasks: tasks[timeOfDay],
//     drawnTask: task
//   });
//   //update the current task displayed on the webpage
//   displayTask(document.getElementById(timeOfDay + 'TaskDiv'), task);
// }

// function displayTask(div, task) {
//   div.innerHTML = task;
// }


// // const database = firebase.database();

// // // Get references to the HTML elements
// // const dayButton = document.getElementById('dayButton');
// // const dayButton2 = document.getElementById('dayButton2');
// // const nightButton = document.getElementById('nightButton');
// // const nightButton2 = document.getElementById('nightButton2');
// // const dayTaskTable = document.getElementById('dayTaskTable');
// // const day2TaskTable = document.getElementById('day2TaskTable');
// // const nightTaskTable = document.getElementById('nightTaskTable');
// // const night2TaskTable = document.getElementById('night2TaskTable');

// // // Attach click event listeners to the buttons
// // dayButton.addEventListener('click', () => {
// //   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
// //     drawTask('day');
// //     displayTask(dayTaskTable, 'day');
// //   }
// // });

// // dayButton2.addEventListener('click', () => {
// //   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
// //     drawTask('day2');
// //     displayTask(day2TaskTable, 'day2');
// //   }
// // });

// // nightButton.addEventListener('click', () => {
// //   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
// //     drawTask('night');
// //     displayTask(nightTaskTable, 'night');
// //   }
// // });

// // nightButton2.addEventListener('click', () => {
// //   if (confirm('Czy na pewno chcesz wylosować zadanie?')) {
// //     drawTask('night2');
// //     displayTask(night2TaskTable, 'night2');
// //   }
// // });

// // // Get the data from the Realtime Database and update the page
// // const dataRef = database.ref("tasks");
// // dataRef.on("value", function(snapshot) {
// //   // Get the data from the snapshot
// //   const data = snapshot.val();
// //   // Update the page with the new data
// //   if(data.day) {
// //     tasks.day = data.day;
// //     dayTaskTable.innerHTML = data.day.drawnTask;
// //   }
// //   if(data.day2) {
// //     tasks.day2 = data.day2;
// //     day2TaskTable.innerHTML = data.day2.drawnTask;
// //   }
// //   if(data.night) {
// //     tasks.night = data.night;
// //     nightTaskTable.innerHTML = data.night.drawnTask;
// //   }
// //   if(data.night2) {
// //     tasks.night2 = data.night2;
// //     night2TaskTable.innerHTML = data.night2.drawnTask;
// //   }
// // });

// // function drawTask(timeOfDay) {
// //   if (tasks[timeOfDay].length === 0) {
// //     alert('Niestety nie ma już wiecej zadań do zrobienia,Wiola wszystko zrobiła już,odpocznij sobie ;)');
// //     return;
// //   }
// //   // Wybieram losowe zadanie z puli zadań
// //   const index = Math.floor(Math.random() * tasks[timeOfDay].length);
// //   const task = tasks[timeOfDay][index];
// //   // Wybrane zadanie usuwam z puli żeby się nie dublowały zad
// //   tasks[timeOfDay] = tasks[timeOfDay].slice(0, index).concat(tasks[timeOfDay].slice(index + 1));
  
// //   // Add the task to the Realtime Database
// //   const taskRef = dataRef.child(timeOfDay);
// //   taskRef.update({
// //     remainingTasks: tasks[timeOfDay],
// //     drawnTask: task
// //   });
// // }

// // /