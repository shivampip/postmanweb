import "./Response.css";
import React from "react";

import ResponseNo from "./ResponseNo";
import RespnoseJSON from "./ResponseJSON";

class Response extends React.Component {
	state = {
		statusCode: -1,
		response: -1
	};

	updateState = () => {
		console.log("Updating State");
		if (this.props.response !== -1) {
			let response = JSON.parse(this.props.response);
			console.log("Here is the status");
			console.log(response.status);
			this.state.statusCode = response.status;
			this.state.response = JSON.stringify(response);
		}
	};

	renderResponse = () => {
		if (this.state.response === -1) {
			return <ResponseNo />;
		} else {
			return <RespnoseJSON response={this.state.response} />;
		}
	};
	render() {
		this.updateState();
		return (
			<div className="response">
				<div className="headerWrapper">
					<div className="viewBtnWrapper">
						<button>Pretty</button>
						<button>Raw</button>
						<button>Render HTML</button>
					</div>
					<div className="statusWrapper">
						<div>{this.state.statusCode}</div>
					</div>
				</div>
				<div className="contentWrapper">
					{/* <ResponseNo /> */}
					{this.renderResponse()}
				</div>
			</div>
		);
	}
}

export default Response;
