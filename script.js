var timeNote = ["8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"]
var times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

var date = moment().format("LLLL")
var currentTime = moment().hour();
var currentDay = document.querySelector("#currentDay")

currentDay.textContent = date

for(i = 0; i < times.length; i++) {
    var taskTime = times[i]
    var row = document.createElement("div")

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

    var input = document.createElement('textarea')
    input.setAttribute("class", "textarea")
    task.appendChild(input)
 
    document.createElement("button")
    var button = document.createElement("button")
    button.setAttribute("class", "saveBtn")
    save.appendChild(button)
    
    $(".container").append(row)

}

var inputValue = document.querySelector(".textarea")

var saveTask = function() {
    localStorage.setItem(hour, inputValue.value);
}

var saveButton = document.querySelector(".saveBtn")
saveButton.addEventListener("click", saveTask);

for(i = 0; i < times.length; i++) {
    var task = "task" + i
    localStorage.getItem(task, inputValue.value)
}