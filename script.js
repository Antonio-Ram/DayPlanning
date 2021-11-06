var timeNote = ["8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"]
var times = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

//Using Moment.js for current date and time
var currentTime = moment().format('LLLL');
var currentDay = document.querySelector("#currentDay")

//Put date on the screen
currentDay.textContent = currentTime

for(i = 0; i < times.length; i++) {
    var taskTime = times[i]
    //document.createElement("div")
    var row = document.createElement("div")

    // Everything is showing past
    if(currentTime < taskTime){
        row.setAttribute("class", "row future")
    }
    else if(currentTime > taskTime) {
        row.setAttribute("class", "row past")
    } 
    else {
        row.setAttribute("class", "row present")
    }

    document.createElement("div")
    var time = document.createElement("div")
    time.setAttribute("class", "col-1 hour")
    time.innerHTML = timeNote[i]
    row.appendChild(time)
    document.createElement("div")
    var task = document.createElement("div")
    task.setAttribute("class", "col-10")
    row.appendChild(task)
    var save = document.createElement("div")
    save.setAttribute("class", "col-1 saveBtn")
    row.appendChild(save)

    // Created an input element to create task 
    // What CSS property will allow me to stretch this accross the task div
    document.createElement('input')
    var input = document.createElement('input')
    input.setAttribute("class", "textarea")
    task.appendChild(input)

    // Created button within the save div but now it need to be bigger
    // Needs to save the information 
    document.createElement("button")
    var button = document.createElement("button")
    button.setAttribute("class", "saveBtn")
    save.appendChild(button)
    
    $(".container").append(row)

}
save.addEventListener("click", saveTask);
console.log();


//When do I save to local storage? When the save button is clicked
var saveTask = function() {
    localStorage.setItem("task", input);
}
