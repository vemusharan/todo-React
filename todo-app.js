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

class Todolist extends React.Component {
	render() {
		return (
			<div>
				<h1> TODO list </h1>
				<label for="startdate">Enter Task:</label>
				<input type="text" name="taskname" id="taskid" />
					<br/>
				<label for="startdate">Start Date:</label>
					<input type="date" />
					<br/>
				<label for="enddate">End Date:</label>
				<input type="date" />
				<br/>
				<button onclick="printText()"> Add Task </button>	
				{new Date().toLocaleTimeString()}

			
			</div>
			);
	}

}
ReactDOM.render(
<Todolist />,
document.getElementById('root')
);