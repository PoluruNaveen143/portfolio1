const inputbox = document.getElementById("inputbox");
const lists = document.getElementById("lists");
function Task(){
    if(inputbox === ""){
        alert("Enter somthing");
    }
    else{
        let li = document.createElement("li");
        li.innerhtml=input.value;
        lists.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value="";
    savedata();
}
lists.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("cheked");
    savedata();

    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    savedata();

    }
},false);
function savedata(){
    localStorage.setItem("data",lists.innerHTML);
}
function showTask(){
    lists.innerHTML=localStorage.getItem("data");
}
showTask();