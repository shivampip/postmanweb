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

	

	whatIsIt=(object)=> {
		var stringConstructor = "test".constructor;
		var arrayConstructor = [].constructor;
		var objectConstructor = ({}).constructor;
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
	}

	isHTML=(str)=>{
		return /<\/?[a-z][\s\S]*>/i.test(str)
	}

	renderResponse = () => {
		if (this.state.response === -1) {
			return <ResponseNo />;
		} else {
			let response= JSON.parse(this.state.response);
			if(this.whatIsIt(response.data)==="Object"){
				console.log("Rendering response as Object");
				return <ResponsePretty response={JSON.stringify(response.data)}/>;
			}else if(this.whatIsIt(response.data)==="String"){
				if(this.isHTML(response.data)){
					console.log("Rendering response as HTML");
					return <ResponseHTML response={response.data}/>
				}else{
					console.log("Rendering response as String");
					return <ResponseRaw response={response.data}/>
				}
			}
		}
	};
	render() {
		this.updateState();
		return (
			<div className="response">
				<div className="headerWrapper">
					<div className="viewBtnWrapper">
						<button>Pretty</button>
						<button>JSON</button>
						<button>HTML</button>
						<button>Raw</button>
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
