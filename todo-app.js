function tick() {
	console.log(name)
	const element = (
		<div>
			
			<h1> Hello {name} </h1>
			<h2> Today is {new Date().toLocaleTimeString()} </h2>


		</div>
		);
				ReactDOM.render(
		element,document.getElementById('root'));

}
setInterval(tick,1000);



