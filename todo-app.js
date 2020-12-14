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
	return <li> {props.name}  {new Date().toLocaleTimeString()} </li>
}


function addTask2 () {
	console.log("function working");
}

 class Todolist extends React.Component {
 	constructor(props) {
 		super(props);
 		this.taskElement= this.props.list.map((t)=> <Task name= {t.name}/>);
 	}

 	addTask () {
 		console.log("add task clicked");
 	}






 	render() {
 		
 		
 	

 	




 		return (
 			<div>
 			<button onClick = {addTask2}> Add task </button>
 				<h1> TODO list </h1>
 				<ol>
 				 {this.taskElement}
 				 </ol>
 						
 			</div>
 			);
 	}

 }

const tasks = [{name:"React Video-2"},{name:"Final React Video"},{name:"Dinner"},{name:"IDL Assignment"}]
ReactDOM.render(
 <Todolist list={tasks}/>,
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