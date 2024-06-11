import { useState } from "react";

function Greeting() {
	const [userName, setUserName] = useState("Stranger");
	const greeting = "";

	const handleGreeting = (event) => {
		event.preventDefault();

		greeting = "Hello " + { userName };
	};

	return (
		<div>
			<input
				type="text"
				value={userName}
				placeholder="What's your name"
				onChange={(event) => setUserName(event.target.value)}
			/>
			<button onClick={(event) => handleGreeting(event)}>Submit</button>
			<h1>{greeting}</h1>
		</div>
	);
}

export default Greeting;
