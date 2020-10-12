// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    let toDo = document.getElementById ("todo-list")
 
    for (i = 0; i < arrayOfTodos.length; i++) {
        let newListElement = document.createElement ("li")
        newListElement.innerHTML = arrayOfTodos[i].title
        toDo.appendChild (newListElement);
        if (arrayOfTodos[i].completed == false) {
            newListElement.classList.add("incomplete");
        } else {
            newListElement.classList.add("complete");
        }
    }
  };

const findID = () => {
  let toDos = document.getElementById('todo-list');
  document.getElementById("todo-list").innerHTML = "";
  toDos.innerHTML = "";
  const myID = document.getElementById('user-id').value;
  console.log(myID);
  const arrayFilter = arrayOfTodos.filter(array => array.userId == myID);
  for (let i = 0; i < arrayFilter.length; i++) {
    let addLI = document.createElement('li');
    addLI.innerHTML = arrayFilter[i].title;
    toDos.appendChild(addLI);
    console.log(arrayFilter[i].completed);
    
    if (arrayOfTodos[i].completed == false) {
      addLI.classList.add('incomplete');
      addLI.setAttribute("id", i);
    } else {
        addLI.classList.add('complete');
    } 
  }
};

const filterComplete = () => {
  const x = document.querySelectorAll('.incomplete');
  const y = document.querySelectorAll('.complete');
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "inline-block";
  }
  
}




const filterIncomplete = () => {
  const x = document.querySelectorAll('.complete');
  const y = document.querySelectorAll('.incomplete');


  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "inline-block";
  }
}
