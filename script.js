
var todos=[];
var selectedtodo=null;
function main()
{
  var leftdivpane=document.createElement("div");
  var rightdivpane=document.createElement("div");

  leftdivpane.setAttribute("id","leftdiv");

  var leftdiv_heading=document.createElement("h1");
  leftdiv_heading.innerHTML="TASK LIST";
  leftdivpane.appendChild(leftdiv_heading);

  var leftdiv_para=document.createElement("p");
  leftdiv_para.innerHTML="Add tasks to your list by typing to your right and pressing enter. You may then view pending tasks below."
  leftdivpane.appendChild(leftdiv_para);


  rightdivpane.setAttribute("id","rightdiv");
  document.body.appendChild(leftdivpane);
  document.body.appendChild(rightdivpane);

  var input= document.createElement("textarea");
  input.setAttribute("placeholder","Write Your Tasks");
  input.setAttribute("id","input");
  var save=document.createElement("button");
  save.innerHTML="Save";
  save.setAttribute("id","save");
 save.addEventListener("click", function () 
{
  if (selectedtodo == null) 
  {
    if (input.value !== "")
    {
      var container = document.createElement("div");
      container.setAttribute("class", "todolist");


      var taskHeading = document.createElement("p");
      var readButton = document.createElement("button");
      var editButton = document.createElement('button');
      var deleteButton = document.createElement("button");

      readButton.innerHTML = "Read";
      readButton.addEventListener("click", function () 
      {
        var t = readButton.parentNode.children[0];
        t.style.textDecoration = "line-through";
      });

        editButton.innerHTML = "Edit";
        editButton.addEventListener("click", function () 
        {
          var para = editButton.parentNode.children[0].innerHTML;
          input.value = para;
          selectedtodo = editButton.parentNode.children[0];

        });

        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function () 
        {
          var text = container.children[0].innerHTML;
          var index = todos.indexOf(text);
          todos.splice(index, 1);

          localStorage.clear;
          localStorage.setItem("todos", JSON.stringify(todos));

          leftdiv.removeChild(container);

        });


        container.appendChild(taskHeading);
        container.appendChild(readButton);
        container.appendChild(editButton);
        container.appendChild(deleteButton);

        taskHeading.innerHTML = input.value;
        todos.push(input.value);

        localStorage.setItem("todos", JSON.stringify(todos));


        var leftdiv = document.getElementById("leftdiv");
        leftdiv.appendChild(container);

        input.value = "";

    }
  }


     var txt=selectedtodo.innerHTML;
    if(input.value!==selectedtodo.innerHTML)
      selectedtodo.innerHTML=input.value;
    else
      alert("Please update the task");

    console.log(selectedtodo);

    var idx=todos.indexOf(txt);
    todos[idx]=input.value;

    localStorage.clear;
    localStorage.setItem("todos",JSON.stringify(todos));
    input.value="";

  });

  rightdivpane.appendChild(input);
  rightdivpane.appendChild(save);

  input.addEventListener("keyup",eventhandler);

}

function eventhandler(event)
{
 var keycode=event.code;
 var input=document.getElementById("input");

 var text=input.value;

 if(keycode ==="Enter" && text!=="")
 {
   
    event.preventDefault();
    var container = document.createElement("div");
    container.setAttribute("class","todolist");

    var taskHeading = document.createElement("p");
    var readButton = document.createElement("button");
    // var check=document.createElement("INPUT");
    // check.setAttribute("type","checkbox");
    var editButton=document.createElement('button');
    var deleteButton = document.createElement("button");

   readButton.innerHTML="Read";
   readButton.addEventListener("click",function(){
    var t=readButton.parentNode.children[0];
    t.style.textDecoration="line-through";
    
   })

   editButton.innerHTML="Edit";
   editButton.addEventListener("click",function(){
     var para=editButton.parentNode.children[0].innerHTML;
     input.value=para;
     selectedtodo=editButton.parentNode.children[0];
    //  var savebtn=document.getElementById("save");
    //  savebtn.addEventListener("click",function(){
    //    console.log(selectedtodo);
    //  })

   });

   deleteButton.innerHTML="Delete";
   deleteButton.addEventListener("click",function()
   {
    
    var text=container.children[0].innerHTML;
    var index=todos.indexOf(text);
    todos.splice(index,1);

    localStorage.clear;
    localStorage.setItem("todos",JSON.stringify(todos));

    leftdiv.removeChild(container);

   });
   

   container.appendChild(taskHeading);
   container.appendChild(readButton);
   container.appendChild(editButton);
   container.appendChild(deleteButton);
   

   taskHeading.innerHTML=text;
   todos.push(text);

   localStorage.setItem("todos",JSON.stringify(todos));


   var leftdiv=document.getElementById("leftdiv");
   leftdiv.appendChild(container);
   
   input.value="";
   
 } 

}
main();

// console.log(Event)

let storedtodos=localStorage.getItem("todos");

if(storedtodos!==null)
{
  todos=JSON.parse(storedtodos);
}

todos.forEach(function(text)
{
   var leftdiv=document.getElementById("leftdiv");
    var container = document.createElement("div");
    var taskHeading = document.createElement("p");
   var readButton = document.createElement("button");
    // var check=document.createElement("INPUT");
    // check.setAttribute("type","checkbox");
    var editButton=document.createElement('button');
    var deleteButton = document.createElement("button");

   readButton.innerHTML="Read";
   readButton.addEventListener("click",function(){
    var t=readButton.parentNode.children[0];
    t.style.textDecoration="line-through";
    console.log(t);
   })
    editButton.innerHTML="Edit";
   editButton.addEventListener("click",function(){
    var para=editButton.parentNode.children[0].innerHTML;
     input.value=para;
     selectedtodo=editButton.parentNode.children[0];
    //  var savebtn=document.getElementById("save");
    //  savebtn.addEventListener("click",function(){
    //    console.log(selectedtodo);
    //  })

   });

   deleteButton.innerHTML="Delete";
   deleteButton.addEventListener("click",function()
   {
    //  console.log(leftdiv.event.target.parentNode);
    // var text = deleteButton.parentElement.firstChild.innerHTML;
    // var index = todos.indexOf(text);
    // var parent=deleteButton.parentNode;
    // var gparent=parent.parentNode;
    // gparent.removeChild(parent);
     var text=container.children[0].innerHTML;
    var index=todos.indexOf(text);
    todos.splice(index,1);

    localStorage.clear;
    localStorage.setItem("todos",JSON.stringify(todos));

    leftdiv.removeChild(container);
   });

   container.setAttribute("class","todolist");

   container.appendChild(taskHeading);
   container.appendChild(readButton);
   container.appendChild(editButton);
   container.appendChild(deleteButton);
   

   taskHeading.innerHTML=text;


   leftdiv.appendChild(container);

})
