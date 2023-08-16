//your code here
let input=document.getElementById('newTodoInput')
let btn=document.getElementById('addTodoBtn')
let ol=document.getElementById('todoList')
btn.addEventListener('click',()=>{
	if(input.value){
		let li=document.createElement('li');
		li.innerHTML=input.value
		ol.appendChild(li)
		input.value=''
	}
})

