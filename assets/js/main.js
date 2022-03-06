
function createTaskButtons(){
    let buttonWrap = document.createElement('div');
    buttonWrap.style.cssText = 
    'display:flex; flex:1; padding:0; !important; align-items:center;'
    let removeButton = document.createElement('button');
    removeButton.addEventListener('click', trigerRemove,true);
    removeButton.addEventListener('mouseenter',enterPaint)
    removeButton.addEventListener('mouseleave',leavePaint)
    removeButton.style.cssText = 
    'flex:1; margin:0; height: 100%'
    removeButton.innerHTML = 'Remove';
    buttonWrap.append(removeButton);
    return buttonWrap;
}
function createTaskText(){
    let textWrap = document.createElement('div');
    textWrap.className = 'textWrap';
    textWrap.style.cssText = 
    'flex:3.1; border: 1px black solid; background: white; border-radius: 10px;'
    let userInput = document.getElementById('input').value;
    textWrap.innerHTML = `<p class = 'taskText'>${userInput}</p>`
    textWrap.firstChild.addEventListener('click', crossOut);
    document.getElementById('input').value = '';
    return textWrap;
}
//////////////////////////////////////////////////////////////////////////
function createTaskWrap(){
    let taskWrap1 = document.createElement('div');
    taskWrap1.style.cssText = 
    'justify-content: center; width: 90%; padding: 0px';
    let taskWrap2 = document.createElement('div');
    taskWrap2.style.cssText = 
    'display:flex; height: 70px; '
    taskWrap1.appendChild(taskWrap2);
    taskWrap2.append(createTaskText(), createTaskButtons());
    return taskWrap1;
}
function createMainContainer(){
    let main = document.createElement('main');
    return main;
}
/////////////////////////////////////////////////////////////////////////
let addTask = function(event){
    event.preventDefault();
    let tasksCompletedMessage = document.getElementById('message')
    if(tasksCompletedMessage){
        tasksCompletedMessage.remove();
    }
    let wrapperNodes = document.getElementById("wrapper").childNodes;
    if(!(document.getElementById('input').value)){
        return;
    }
    if ( wrapperNodes.length < 4){
        let parent = document.getElementById('wrapper')
        parent.appendChild(createMainContainer());
    }
    let main = document.getElementsByTagName('main')[0]
    if( wrapperNodes.length == 4){
        
        main.appendChild(createTaskWrap());
    }
    else{
        main.appendChild(createTaskWrap());
    }
}
let addButton = document.getElementById('button');
addButton.addEventListener('click', addTask);
/////////////////////////////////////////////////////////////////////////
let crossOut = function(event){
    event.target.style.textDecoration == 'line-through' ? 
    event.target.style.textDecoration = 'none' : 
    event.target.style.textDecoration = 'line-through';
}
/////////////////////////////////////////////////////////////////////////
let trigerRemove = function(event){
    event.target.parentElement.parentElement.parentElement.remove();
    let mainChildrenCount = document.getElementsByTagName('main')[0].childElementCount
    if(mainChildrenCount == 0){
        document.getElementsByTagName('main')[0].remove();
        let message = document.createElement('p');
        message.innerText = 'All tasks are completed!'
        message.id = 'message';
        message.style.cssText = 'position:absolute; top: 110%; font-size: 120% '
        document.getElementsByTagName('header')[0].appendChild(message);
    }
}
/////////////////////////////////////////////////////////////////////////
let buttonsArr = document.getElementsByTagName('button');
let enterPaint = function(event){
    event.target.style.background = 'papayawhip'
}
let leavePaint = function(event){
    event.target.style.background = 'rgb(252, 252, 252)';
}
document.getElementById('button').addEventListener('mouseenter',enterPaint);
document.getElementById('button').addEventListener('mouseleave',leavePaint);



