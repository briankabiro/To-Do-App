/*Build HTML input box, bind to variable, build todo component
when button clicked, add words in input box to todos
 */
Vue.component('todo-item', {
	props:['todo'],
	template:'<div v:bind:style="todoStyleObject">{{todo.text}}<button v-bind:style="divStyleObject"></button></div>',
	data(){
		return{
			divStyleObject:{
				height:'1.5em',
				width:'1.5em',
				backgroundColor:this.background,
				borderRadius:'100%',
				border:'none',
				marginLeft:'1em'
			}
		}
		
	}
})

var app = new Vue({
	el:"#app",
	data:{
		todos:[

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