import "./ResponseNo.css";
import React from "react";

class ResponseRaw extends React.Component {
	render() {
		return (
			<div className="response-json">
				<pre>{this.props.response}</pre>
			</div>
		);
	}
}

export default ResponseRaw;
