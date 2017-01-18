/*Build HTML input box, bind to variable, build todo component
when button clicked, add words in input box to todos
 */

Vue.component('todo-item',{
	template:'<li>{{ todo.text }}</li>',
	props:['todo']	
})


 var vm = new Vue({
	el:"#app",
	data:{
		todos:[
			{text:"John Mbad"},
			{text:"Perter Hosi"},
			{text:"Salazar Snape"}
		],
		anotherTodo:""
	},
	methods:{
		addTodo(){
			this.todos.push({text:this.todoText});
			this.todoText=""
		}
	}
 })