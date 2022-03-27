import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.add = this.add.bind(this)
        this.get = this.get.bind(this)
    }

    add() {
		// setCount(count + 1);
        this.setState({count: this.state.count + 1})
	}

	get() {
		// setCount(count - 1);
        this.setState({count: this.state.count - 1})
	}


    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.get}>Get</button>
            </div>
        )
    }
}

export default ClassCounter;