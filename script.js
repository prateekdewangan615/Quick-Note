document.querySelector('#push').onclick =function(){
    if(document.querySelector('#newtask input').value.length==0){
        alert("Kindly, Enter the Task Name!!!");
    }
    else{
        document.querySelector('#tasks').innerHTML+=`
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">Delete</button>
        </div>
        `;
    }
    var currenttasks = document.querySelectorAll(".delete");
    for(var i=0;i<currenttasks.length;i++){
        currenttasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}