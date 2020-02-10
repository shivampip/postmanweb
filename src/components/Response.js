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
		resType: -1,
		oresType: -1,
		oresponse: -1
	};

	componentWillUpdate(prevProps) {
		if (prevProps.response !== this.props.response) {
			console.log("PPRROOPPP UpdateD");
			this.state.resType="auto";
			this.state.oresType="auto";
			this.state.oresponse= this.props.response
			//this.render();
		}
	}

	updateState = () => {
		console.log("Updating State");
		if (this.props.response !== -1) {
			let response = JSON.parse(this.props.response);
			console.log("Here is the status: "+this.state.resType);
			console.log(response.status);
			this.state.statusCode = response.status;
			this.state.oresponse = JSON.stringify(response);
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
			if (this.state.oresponse === -1) {
				this.state.resType = "no";
				this.state.oresType = "no";
				// return <ResponseNo />;
			} else {
				let response = JSON.parse(this.state.oresponse);
				if (this.whatIsIt(response.data) === "Object") {
					console.log("Rendering response as Object");
					this.state.resType = "pretty";
					this.state.oresType = "json";
					this.state.response = JSON.stringify(response.data);
					// return <ResponsePretty response={JSON.stringify(response.data)} />;
				} else if (this.whatIsIt(response.data) === "String") {
					if (this.isHTML(response.data)) {
						console.log("Rendering response as HTML");
						this.state.resType = "html";
						this.state.oresType = "html";
						this.state.response = response.data;
						// return <ResponseHTML response={response.data} />;
					} else {
						console.log("Rendering response as String");
						this.state.resType = "raw";
						this.state.oresType = "raw";
						this.state.response = response.data;
						// return <ResponseRaw response={response.data} />;
					}
				}
			}
		} else {
			if (type === -1) {
				this.state.resType = "no";
			} else {
				// this.state.resType = type;
				this.setState({resType: type});
				//this.render();
			}
		}
	};
	renderResponse = () => {
		if (this.state.resType === "no") {
			console.log("RENDERING as " + this.state.resType);
			return <ResponseNo />;
		} else if (this.state.resType === "raw") {
			console.log("RENDERING as " + this.state.resType);
			return <ResponseRaw response={this.state.response} />;
		} else if (this.state.resType === "pretty") {
			if(this.state.oresType!=="json"){
				this.state.resType= this.state.oresType;
				return this.renderResponse();
			}
			console.log("RENDERING as " + this.state.resType);
			return <ResponsePretty response={this.state.response} />;
		} else if (this.state.resType === "html") {
			console.log("RENDERING as " + this.state.resType);
			return <ResponseHTML response={this.state.response} />;
		} else if (this.state.resType === "json") {
			console.log("RENDERING as " + this.state.resType);
			return <RespnoseJSON response={this.state.oresponse} />;
		}
		console.log("RENDERING as " + this.state.resType);
		return <ResponseNo />;
	};
	render() {
		console.log("Rendering response: "+this.state.resType);

		this.updateState();
		if(this.state.resType==="auto"){
			this.setRespnoseType("auto");
		}
		console.log("BEFORE RENDERNING")
		console.log(this.state.resType);
		//console.log(this.state.response);
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
