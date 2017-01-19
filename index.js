/*Build HTML input box, bind to variable, build todo component
when button clicked, add words in input box to todos
 */
Vue.component('todo-item', {
	props:['todo'],
	template:'<div>{{todo.text}}</div>'
})

var app = new Vue({
	el:"#app",
	data:{
		todos:[
			{text: "John Mbad" },
			{text: "Perter Hosi" },
			{text: "Salazar Snape" }
		],
		todoText:""
	},
	ready(){

	},
	methods:{
		addTodo(){
			if(this.todoText){
				this.todos.push({text:this.todoText});	
				this.todoText="";	
			}
		}
	}
 })