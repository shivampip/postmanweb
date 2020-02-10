import "./ResponseNo.css";
import React from "react";

class ResponseRaw extends React.Component {
	render() {
		return (
			<div className="response-json">
				{this.props.response}
			</div>
		);
	}
}

export default ResponseRaw;
