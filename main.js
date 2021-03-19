function addTask() {
    var li = document.createElement("li");
    var input = document.getElementById("todoinput").value;
    var t = document.createTextNode(input);
    li.appendChild(t)
    if (input === '') {
        alert("you must write something.")
    } else  {
        document.getElementById("todoul").appendChild(li);
    }

    document.getElementById("todoinput").value = "";
}

function addTaskWithEnter() {
    var input = document.getElementById("todoinput");
    input.addEventListener("keyup", function(event){
        if (event.key === "Enter") {
            event.preventDefault
            document.getElementById("addbtn").click();
            createClosebutton();
            clickClosebutton();
        }
    })
}

function createClosebutton() {
    var mynodelist = document.getElementsByTagName("LI");
    var i;
    for (let i = 0; i < mynodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        mynodelist[i].appendChild(span);
    }
}

function clickClosebutton() {
    var close = document.getElementsByClassName("close");
    var i;
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        
    }
}
addTaskWithEnter();
createClosebutton();
clickClosebutton();