const todoUl = document.getElementById('todoUl')
const taskbarTxt = document.getElementById('taskbarTxt')
const priorityTxt = document.getElementById('priorityTxt')
const dateTxt = document.getElementById('dateTxt')
const submitBtn = document.getElementById('submitBtn')

//adding fuctionality to submit button to post to UL
submitBtn.addEventListener("click",function () {
	const tasks = document.getElementById("taskname")
	
	fetch("http://localhost:3000/todo", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			title: taskbarTxt.value,
			date: dateTxt.value,
			priority: priorityTxt.value
		})
	}).then(response => response.json())
		.then(result => displayAllTasks())
})
//funtion to display all objects from server into a json format 
function displayAllTasks() {
	fetch('http://localhost:3000/todo')
	.then(response => response.json())
	.then(tasks => {
		
		const taskItems = tasks.map((task) => {
			return `<li>${taskbarTxt.value} -${dateTxt.value}- ${priorityTxt.value}</li>`
		})
		
		todoUl.innerHTML = taskItems.join("")
	})
}

displayAllTasks()