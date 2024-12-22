// Get elements
const item = document.querySelector("#item")
const toDoBox = document.querySelector("to-Do-Box")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
       addToDo(this.value);
       this.value =""
    }
    }
)
const addToDo =(item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `
       ${item}
       <i class="fas fa-times"></i>

    `;
    toDoBox.appendChild(listItem)

}
