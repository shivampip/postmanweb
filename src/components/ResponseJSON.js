import "./ResponseNo.css";
import React from "react";
import ReactJson from "react-json-view";
import Rjv from "react-json-tree-viewer";
import JSONTree from "react-json-tree";

class ResponseJSON extends React.Component {
	render() {
		const theme = {
			scheme: "shapeshifter",
			author: "wimer hazenberg (http://www.monokai.nl)",
			base00: "#272822",
			base01: "#383830",
			base02: "#49483e",
			base03: "#75715e",
			base04: "#a59f85",
			base05: "#f8f8f2",
			base06: "#f5f4f1",
			base07: "#f9f8f5",
			base08: "#58eeee",
			base09: "#fd971f",
			base0A: "#f4bf75",
			base0B: "#c9fd9e", //value
			base0C: "#26083a",
			base0D: "#ffffff", //key
			base0E: "#ae81ff",
			base0F: "#cc6633"
		};
		return (
			<div className="response-json">
				{/* <ReactJson src={JSON.parse(this.props.response)} /> */}
				{/* <Rjv data={JSON.parse(this.props.response)} /> */}
				{/* <JSONTree data={JSON.parse(this.props.response)} /> */}
				<JSONTree
					data={JSON.parse(this.props.response).data}
					theme={theme}
					invertTheme={true}
					shouldExpandNode={(keyName, data, level) => {
						return true;
					}}
				/>
			</div>
		);
	}
}

export default ResponseJSON;
