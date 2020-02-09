import "./Response.css";
import React from "react";

import ResponseNo from "./ResponseNo";
import RespnoseJSON from "./ResponseJSON";
import ResponsePretty from "./ResponsePretty";
import ResponseRaw from "./ResponseRaw";
import ResponseHTML from "./ResponseHTML";

class Response extends React.Component {
	state = {
		statusCode: -1,
		response: -1,
		resType: -1
	};

	static getDerivedStateFromProps(props, current_state) {
		if (current_state.response !== props.response) {
			return {
				resType: "auto",
				response: props.response
			};
		}
		return null;
	}

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

	whatIsIt = object => {
		var stringConstructor = "test".constructor;
		var arrayConstructor = [].constructor;
		var objectConstructor = {}.constructor;
		if (object === null) {
			return "null";
		}
		if (object === undefined) {
			return "undefined";
		}
		if (object.constructor === stringConstructor) {
			return "String";
		}
		if (object.constructor === arrayConstructor) {
			return "Array";
		}
		if (object.constructor === objectConstructor) {
			return "Object";
		}
		{
			return "NA";
		}
	};

	isHTML = str => {
		return /<\/?[a-z][\s\S]*>/i.test(str);
	};

	setRespnoseType = (type = -1) => {
		console.log("Steeing request type: " + type);
		if (type === "auto") {
			if (this.state.response === -1) {
				this.resType = "no";
				// return <ResponseNo />;
			} else {
				let response = JSON.parse(this.state.response);
				if (this.whatIsIt(response.data) === "Object") {
					console.log("Rendering response as Object");
					this.resType = "pretty";
					this.response = JSON.stringify(response.data);
					// return <ResponsePretty response={JSON.stringify(response.data)} />;
				} else if (this.whatIsIt(response.data) === "String") {
					if (this.isHTML(response.data)) {
						console.log("Rendering response as HTML");
						this.resType = "html";
						this.response = response.data;
						// return <ResponseHTML response={response.data} />;
					} else {
						console.log("Rendering response as String");
						this.resType = "raw";
						this.response = response.data;
						// return <ResponseRaw response={response.data} />;
					}
				}
			}
		} else {
			if (type === -1) {
				this.resType = "no";
			} else {
				this.resType = type;
				this.render();
			}
		}
	};
	renderResponse = () => {
		console.log("RENDERING as " + this.state.resType);
		if (this.state.resType === "no") {
			return <ResponseNo />;
		} else if (this.state.resType === "raw") {
			return <ResponseRaw response={this.status.response} />;
		} else if (this.state.resType === "pretty") {
			return <ResponsePretty response={this.state.response} />;
		} else if (this.state.resType === "html") {
			return <ResponseHTML response={this.state.response} />;
		} else if (this.state.resType === "json") {
			return <RespnoseJSON response={this.state.response} />;
		}
		return <ResponseNo />;
	};
	render() {
		console.log("Rendering response");
		this.updateState();
		if (this.state.resType === "auto") {
			this.setRespnoseType("auto");
			console.log("Now resType: " + this.state.resType);
		}
		return (
			<div className="response">
				<div className="headerWrapper">
					<div className="viewBtnWrapper">
						<button onClick={() => this.setRespnoseType("pretty")}>
							Pretty
						</button>
						<button onClick={() => this.setRespnoseType("json")}>JSON</button>
						<button onClick={() => this.setRespnoseType("html")}>HTML</button>
						<button onClick={() => this.setRespnoseType("raw")}>Raw</button>
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
