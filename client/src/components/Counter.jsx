//rcc

import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	componentDidMount() {
		console.log("componentDidMount");
	}

	render() {
		return (
			<div className="card text-center">
				<div className="card-header bg-primary text-white">
					Click The Counter
				</div>
				<div className="card-body">
					<p className="card-text">Click Count: {this.state.count}</p>
					<button className="btn btn-primary" onClick={this.handleIncrement}>
						Increment
					</button>
				</div>
			</div>
		);
	}
}

export default Counter;
