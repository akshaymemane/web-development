let taskList=[];

function addTask(){
    let newTask = document.getElementById("title").value;
    taskList.push(newTask);
    renderHtml();
    document.getElementById("title").value = "";
}

function renderHtml(){
    let htmlStr = "";
    taskList.forEach((t,index)=>{
        htmlStr += `<div class="task"><p>`+t+`</p>
        <input class="delete-btn" type="button" value="x" onclick="deleteTask(`+index+`)">
        </div>`
    });
    document.getElementById("task-list").innerHTML = htmlStr;
}

function deleteTask(index){
    taskList.splice(index,1);
    renderHtml();
}