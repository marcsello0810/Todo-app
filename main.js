function addTask() {
    var li = document.createElement("li");
    var input = document.getElementById("todoinput").value;
    var t = document.createTextNode(input);
    li.appendChild(t)
    if (input === '') {
        alert("you must write something.")
    } else  {
        document.getElementById("todoul").appendChild(li);
        taskcounter++;
        console.log(taskcounter);
    }

    document.getElementById("todoinput").value = "Write another task...";
    console.log(document.getElementById("todoinput").value)
    createClosebutton();
    createCheckedbutton();
    
}

function addTaskWithEnter() {
    var input = document.getElementById("todoinput");
    input.addEventListener("keyup", function(event){
        if (event.key === "Enter") {
            event.preventDefault
            document.getElementById("addbtn").click();
            
            
        }
    })
}

function createClosebutton() {
    var mynodelist = document.getElementsByTagName("LI");
    var i;
    for (let i = taskcounter; i < mynodelist.length; i++) {
        var span = document.createElement("closebutton");
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        mynodelist[i].appendChild(span);
    }
    var close = document.getElementsByClassName("close");
    var i;
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        
    }
}


function createCheckedbutton() {
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
        }
    }, false);
}
var taskcounter = -1;

addTaskWithEnter();

