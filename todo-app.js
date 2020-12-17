
 class Todolist extends React.Component {
 	constructor(props) {
 		super(props);
 		this.state = {list:props.list};		
 		this.handleAddTask = this.handleAddTask.bind(this);
 	}
 	handleAddTask (task) {
 		this.state.list.push(task);
 		this.setState({list: this.state.list})
 		console.log("handleAddTask called and hence render called again");
 		console.log("tasklist in handleAddTask"+tasklist)
 	}
 	render() {
 		const tasklist = this.state.list;			
 		this.taskElement= this.state.list.map((t)=> <li> <b> {t.name} </b> <i> Start Date </i> {t.startdate} <i> End Date </i> {t.duedate}  </li>);
 		return (
 			<div>		
 				<h1> TODO list </h1>
 				<ol>
 				 {this.taskElement} 
 				 </ol>
 				< TaskNameForm  onAddTask={this.handleAddTask}/> 			 
 			</div>
 			);
 	}
 }

 class TaskNameForm extends React.Component {
 	constructor(props){
 		super(props);
 		this.state = {value:'',date:'' , startdate:''};
 		this.handleChange = this.handleChange.bind(this);
 		this.handleSubmit = this.handleSubmit.bind(this);
 		this.handleDate   = this.handleDate.bind(this);
 		this.handleStartdate = this.handleStartdate.bind(this);
 	}
 	handleSubmit(event) {	
 		event.preventDefault();	
 		const temp = {id:Date.now() , name:this.state.value , startdate:this.state.startdate , duedate:this.state.date};
 		this.props.onAddTask(temp);		
 	}
 	handleChange(event) {
 		this.setState({value:event.target.value});		
 	}
	handleDate(event) {
 		this.setState({date:event.target.value});
 	}
 	handleStartdate(event) {
 		this.setState({startdate:event.target.value});
 	}
 	render() {
 		return (
 			<form onSubmit={this.handleSubmit}>
 				<label > Enter Task : </label>
				<input type='text'   onChange= {this.handleChange} />
 				&nbsp;&nbsp;
 				<label >Start Date : </label>
 				<input type='Date'   onChange= {this.handleStartdate}   />
 				&nbsp;&nbsp;
 				<label > Duedate : </label>
 				<input type='Date'   onChange= {this.handleDate}   />
 				&nbsp;&nbsp;
 				<input type='submit' value='Add Task' onSubmit= {this.handleSubmit} />
 			</form>
 		);
 	}
 }

ReactDOM.render(
 <Todolist list={[]}/>,
 document.getElementById('root')
 );