import React, { useState } from "react";

function App() {
	const [likes, setLikes] = useState(0);
	const [value, setValue] = useState("Text in input");

	function add() {
		setLikes(likes + 1);
	}

	function get() {
		setLikes(likes - 1);
	}

	return (
		<div className="App">
			<h1>{likes}</h1>
			<h1>{value}</h1>
			<input
				type="text"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>
			<br></br>
			<button onClick={add}>Add</button>
			<button onClick={get}>Get</button>
		</div>
	);
}

export default App;
