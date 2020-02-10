import "./App.css";
import React from "react";
import Request from "./Request";
import Response from "./Response";
import axios from "axios";

class App extends React.Component {
	state = {
		response: -1
	};

	makeRequest = (url, requestType, params, raws, forms, headers) => {
		// console.clear();
		console.log("SENDING REQUEST");
		const proxyurl = "https://cors-anywhere.herokuapp.com/";
		axios({
			method: requestType,
			url: url,
			// url: proxyurl + url,
			params: params,
			// data: JSON.stringify({
			// 	title: "Shivam",
			// 	body: "Wow, It's working",
			// 	userId: 11
			// }),
			data: forms,
			headers: headers
		})
			.then(response => {
				console.log("SUCCESS");
				console.log("RESPONSE");
				console.log(response);
				this.setState({ response: JSON.stringify(response) });
			})
			.catch(err => {
				console.log("ERROR");
				console.log("RESPONSE");
				console.log(err);
				console.log("Error logged");
				if (err.response) {
					this.setState({ response: JSON.stringify(err.response) });
				}else{
					let errRes= JSON.stringify({"errData": err});
					console.log(errRes);
					this.setState({response: errRes});
				}
			})
			.then(function() {
				console.log("REQUEST COMPLETED");
			});
	};

	render() {
		return (
			<div className="app">
				<Request onSend={this.makeRequest} />
				<Response response={this.state.response} />
			</div>
		);
	}
}

export default App;
