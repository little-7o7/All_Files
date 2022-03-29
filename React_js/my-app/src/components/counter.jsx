import React, { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0)

    function add() {
		setCount(count + 1);
	}

	function get() {
		setCount(count - 1);
	}

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={add}>Add</button>
			<button onClick={get}>Get</button>
        </div>
    )
}

export default Counter;