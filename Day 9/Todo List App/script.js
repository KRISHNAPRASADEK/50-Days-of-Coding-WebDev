// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
  let userData = inputBox.value; //getting user entered value
  if (userData.trim() != 0) {
    // if user values aren't only spaces
    addBtn.classList.add("active"); //active the add button
  } else {
    addBtn.classList.remove("active"); //unactive the add button
  }
};

showTasks(); //calling showtsaks function

// if user click on the add button
addBtn.onclick = () => {
  let userData = inputBox.value; //getting user entered value

  let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage

  if (getLocalStorage == null) {
    //if localstorage is null
    listArr = []; //creating blank array
  } else {
    listArr = JSON.parse(getLocalStorage); //transforming json string to js objec
  }
  listArr.push(userData); //adding user data
  localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into json string
  showTasks(); //calling showtsaks function
};

//to add task lis inside li
function showTasks() {
  let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage

  if (getLocalStorage == null) {
    //if localstorage is null
    listArr = []; //creating blank array
  } else {
    listArr = JSON.parse(getLocalStorage); //transforming json string to js objec
  }

  const pendingNum = document.querySelector(".pendingNum");
  pendingNum.textContent = listArr.length; //passing the length value in pendingnum

  if (listArr.length > 0) {
    //if array lenth grater than 0
    deleteAllBtn.classList.add("active"); //active the clearall btn
  } else {
    deleteAllBtn.classList.remove("active"); //unactive the clearall btn
  }

  let newLiTag = ``;

  listArr.forEach((element, index) => {
    newLiTag += `<li>${element} <span onclick ="deleteTask(${index})"; ><i class="fas fa-trash"></i></span>
        </li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task is added leave input field blank
}

//delete a task function
function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1); //remove particular index li

  //after removing li ,again update local storage
  localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into json string
  showTasks(); //calling showtsaks function
}

//delete all tasks function
deleteAllBtn.onclick = () => {
  listArr = []; //empty an array
  //after removing all tasks li ,again update local storage
  localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js object into json string
  showTasks(); //calling showtsaks function
};
