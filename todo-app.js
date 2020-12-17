// function tick() {
// 	console.log(name)
// 	const element = (
// 		<div>
			
// 			<h1> Hello {name} </h1>
// 			<h2> Today is {new Date().toLocaleTimeString()} </h2>


// 		</div>
// 		);
// 				ReactDOM.render(
// 		element,document.getElementById('root'));

// }
// setInterval(tick,1000);


// function Welcome(props) {
// 	return <h1> Hello , {props.name} </h1>;
// }

// function App() {
// 	return (
// 	<div>
// 	<Welcome name= 'Sharan' />
// 	<Welcome name= 'Vamshi' />
// 	</div>
// 	);
// }

// ReactDOM.render(
// <App/>,
// document.getElementById('root')
// );


function Task (props) {

	return <li> {props.name}  {props.duedate.toLocaleTimeString()} </li>
}



 class Todolist extends React.Component {
 	constructor(props) {
 		super(props);
 		this.state = {list:props.list};
 		
 		this.handleAddTask = this.handleAddTask.bind(this);
 	}

 	handleAddTask (tasklist) {
 		this.setState({list: tasklist})
 		console.log("handleAddTask called and hence render called again");
 		console.log("tasklist in handleAddTask"+tasklist)
 	}






 	render() {
 		const tasklist = this.state.list;
 		// console.log("tasklist",this.taskElement)
 		this.taskElement= this.state.list.map((t)=> <Task key={t.id} name= {t.name} duedate={t.duedate}/>);
 		return (
 			<div>		
 				<h1> TODO list </h1>
 				<ol>
 				 {this.taskElement}
 				 </ol>
 				< TaskNameForm tasklist={tasklist} onAddTask={this.handleAddTask}/>
 			 // When  onAddTask event is raised handleAddTask is invoked
 			</div>
 			);
 	}

 }


 class TaskNameForm extends React.Component {
 	constructor(props){
 		super(props);
 		this.state = {value:''};
 		this.handleChange = this.handleChange.bind(this);
 		this.handleSubmit = this.handleSubmit.bind(this);
 	}

 	handleSubmit(event) {

 		const temp = this.props.tasklist;
 		event.preventDefault();	
 		temp.push({id:Date.now() , name:this.state.value , duedate:new Date()});
 		this.props.onAddTask(temp);		
 	}

 	handleChange(event) {
 		this.setState({value:event.target.value});
 	
 		
 	}

 	render() {
 		return (
 			<form onSubmit={this.handleSubmit}>
 				<input type='text'   onChange= {this.handleChange} />
 				<input type='submit' value='Add Task' onSubmit= {this.handleSubmit} />
 			</form>
 		);

 	}
 }




ReactDOM.render(
 <Todolist list={[]}/>,
 document.getElementById('root')
 );


//
// class Clock extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {date: props.date};
// 	}

// 	componentDidMount() {
// 		this.taskid = setInterval(()=> this.setState({date: new Date()}),1000);
// 	}
// 	componentWillUnmount() {
// 		clearInterval(this.taskid);
// 	}
// 	render()
// 	{
// 		return(
// 			<div>
// 				<h1> This time is {this.state.date.toLocaleTimeString()} </h1>

// 				</div>
// 			);
// 	}
// }
// ReactDOM.render(
// 	<Clock date= {new Date()} />
// 	,document.getElementById('root')
// 	);