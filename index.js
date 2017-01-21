/*Build HTML input box, bind to variable, build todo component
when button clicked, add words in input box to todos

Vue.component('todo-item', {
	props:['todo'],
	template:'<div v:bind:style="todoStyleObject">{{todo.text}}<button v-bind:style="divStyleObject"></button></div>',
	data(){
		return{
			divStyleObject:{
				height:'1.5em',
				width:'1.5em',
				borderRadius:'100%',
				border:'none',
				marginLeft:'1em'
			}
		}
		
	}
})
 */

var app = new Vue({
	el:"#app",
	data:{
		todos:[
		],
		todoText:""
	},
	methods:{
		toggleCompleted:function(todo){
			todo.completed = !todo.completed;
		},
		addTodo(){
			if(this.todoText){
				const todo = this.todoText.trim();
				this.todos.push({text:todo, completed:false});	
				this.todoText="";	
			}
		}
	}
 })