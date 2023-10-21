import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogLists from "./HogLists";
function App() {
	const [hogsList, setHogsList] = useState(hogs)


	return (
		<div className="App">
			<Nav />
			<HogLists hogsList={hogsList} setHogsList={setHogsList} />
		</div>
	);
}


export default App;
