import "./ResponseNo.css";
import React from "react";

class ResponsePretty extends React.Component {
	render() {
		return (
			<div className="response-json">
				<pre>{JSON.stringify(JSON.parse(this.props.response), null, 2)}</pre>
			</div>
		);
	}
}

export default ResponsePretty;
