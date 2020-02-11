import "./Request.css";
import React from "react";

class Request extends React.Component {
	state = {
		url: "https://reqres.in/api/users",
		requestType: "post",
		patamTab: "param",
		params: [{ key: "", value: "" }],
		forms: [{ key: "", value: "" }],
		raws: [{ key: "", value: "" }],
		rawData: "",
		headers: [{ key: "", value: "" }]
	};

	makeRequest = () => {
		let url = this.state.url;
		let requestType = this.state.requestType;

		console.clear();
		this.print("REQUEST");
		this.print("URL: " + url);
		this.print("Request Type: " + requestType);

		let params = {};
		this.state.params
			.filter(param => {
				if (param.key === "") {
					return false;
				}
				return true;
			})
			.map(param => {
				params[param.key] = param.value;
			});

		let raws = this.state.raws;

		let forms = {};
		this.state.forms
			.filter(form => {
				if (form.key === "") {
					return false;
				}
				return true;
			})
			.map(form => {
				forms[form.key] = form.value;
			});

		let headers = {};
		this.state.headers
			.filter(header => {
				if (header.key === "") {
					return false;
				}
				return true;
			})
			.map(header => {
				headers[header.key] = header.value;
			});

		let rawData = this.state.rawData;
		this.print("PARAMS");
		this.print(params);
		this.print("RAWS");
		this.print(rawData);
		this.print("FORM DATA");
		this.print(forms);
		this.print("HEADERS");
		this.print(headers);
		this.props.onSend(url, requestType, params, rawData, forms, headers);
	};

	print = msg => {
		console.log(msg);
	};

	setUrl = eve => {
		this.print(eve.target.value);
		this.setState({ url: eve.target.value });
	};

	setRequestType = eve => {
		var value = eve.target.value;
		this.print("Request Type: " + value);
		this.setState({ requestType: value });
	};

	getKey = () => {
		return Math.floor(Math.random() * 1000 + 1);
	};

	handleChange = (ptype, index, key, value) => {
		if (ptype === "param") {
			let params = this.state.params;
			if (key) {
				params[index].key = value;
			} else {
				params[index].value = value;
			}
			this.state.params = params;
			//this.setState({params: params});
		} else if (ptype === "form") {
			let params = this.state.forms;
			if (key) {
				params[index].key = value;
			} else {
				params[index].value = value;
			}
			this.state.forms = params;
			// this.setState({forms: params});
		} else if (ptype === "raw") {
			let params = this.state.raws;
			if (key) {
				params[index].key = value;
			} else {
				params[index].value = value;
			}
			this.state.raws = params;
			// this.setState({raws: params});
		} else if (ptype === "header") {
			let params = this.state.headers;
			if (key) {
				params[index].key = value;
			} else {
				params[index].value = value;
			}
			this.headers = params;
			// this.setState({headers: params});
		}
	};

	removeRow = (ptype, index) => {
		console.log("Removing Row: " + ptype + " , " + index);
		if (ptype === "param") {
			let params = this.state.params;
			params.splice(index, 1);
			this.setState({ params: params });
		} else if (ptype === "form") {
			let params = this.state.forms;
			params.splice(index, 1);
			this.setState({ forms: params });
		} else if (ptype === "raw") {
			let params = this.state.raws;
			params.splice(index, 1);
			this.setState({ raws: params });
		} else if (ptype === "header") {
			let params = this.state.headers;
			params.splice(index, 1);
			this.setState({ headers: params });
		}
	};

	getParams = () => {
		return this.state.params.map((data, index) => {
			let lbtn = "";
			let rbtn = "";
			if (index === 0) {
				lbtn = "topLeftBtn";
				rbtn = "topRightBtn";
			}
			return (
				<div key={this.getKey()} className="paramRow">
					{/* <input type="text" value={key} onChange={(eve)=>{this.handleChange("param", index, true, eve.target.value)}}/> */}
					{/* <input type="text" defaultValue={key} onBlur={(eve)=>console.log("VALUE: "+eve.target.value)} /> */}
					<input
						className={lbtn}
						type="text"
						placeholder="Key"
						defaultValue={data.key}
						onBlur={eve => {
							this.handleChange("param", index, true, eve.target.value);
						}}
					/>
					<input
						// className={rbtn}
						type="text"
						defaultValue={data.value}
						placeholder="Value"
						onBlur={eve => {
							this.handleChange("param", index, false, eve.target.value);
						}}
					/>
					<button
						className={`removeRowB ${rbtn}`}
						onClick={eve => {
							this.removeRow("param", index);
						}}
					>
						X
					</button>
				</div>
			);
		});
	};

	getForms = () => {
		return this.state.forms.map((data, index) => {
			let lbtn = "";
			let rbtn = "";
			if (index === 0) {
				lbtn = "topLeftBtn";
				rbtn = "topRightBtn";
			}
			return (
				<div key={this.getKey()} className="paramRow">
					<input
						className={lbtn}
						type="text"
						defaultValue={data.key}
						placeholder="Key"
						onBlur={eve => {
							this.handleChange("form", index, true, eve.target.value);
						}}
					/>
					<input
						// className={rbtn}
						type="text"
						defaultValue={data.value}
						placeholder="Value"
						onBlur={eve => {
							this.handleChange("form", index, false, eve.target.value);
						}}
					/>
					<button
						className={`removeRowB ${rbtn}`}
						onClick={eve => {
							this.removeRow("form", index);
						}}
					>
						X
					</button>
				</div>
			);
		});
	};

	getRaws = () => {
		return (
			<div className="rawData">
				<textarea
					placeholder="Enter raw data here"
					onBlur={eve => {
						this.state.rawData = eve.target.value;
					}}
				>
					{this.state.rawData}
				</textarea>
			</div>
		);
	};

	getHeaders = () => {
		return this.state.headers.map((data, index) => {
			let lbtn = "";
			let rbtn = "";
			if (index === 0) {
				lbtn = "topLeftBtn";
				rbtn = "topRightBtn";
			}
			return (
				<div key={this.getKey()} className="paramRow">
					<input
						className={lbtn}
						type="text"
						defaultValue={data.key}
						placeholder="Key"
						onBlur={eve => {
							this.handleChange("header", index, true, eve.target.value);
						}}
					/>
					<input
						// className={rbtn}
						type="text"
						defaultValue={data.value}
						placeholder="Value"
						onBlur={eve => {
							this.handleChange("header", index, false, eve.target.value);
						}}
					/>
					<button
						className={`removeRowB ${rbtn}`}
						onClick={eve => {
							this.removeRow("header", index);
						}}
					>
						X
					</button>
				</div>
			);
		});
	};

	renderParams = () => {
		if (this.state.patamTab === "param") {
			return <div>{this.getParams()}</div>;
		} else if (this.state.patamTab === "form") {
			return <div>{this.getForms()}</div>;
		} else if (this.state.patamTab === "raw") {
			return <div>{this.getRaws()}</div>;
		} else {
			return <div>{this.getHeaders()}</div>;
		}
	};

	addNewRow = () => {
		if (this.state.patamTab === "param") {
			let params = this.state.params;
			params.push({ key: "", value: "" });
			this.setState({ params: params });
		} else if (this.state.patamTab === "form") {
			let params = this.state.forms;
			params.push({ key: "", value: "" });
			this.setState({ forms: params });
		} else if (this.state.patamTab === "raw") {
			let params = this.state.raws;
			params.push({ key: "", value: "" });
			this.setState({ raws: params });
		} else {
			let params = this.state.headers;
			params.push({ key: "", value: "" });
			this.setState({ headers: params });
		}
	};

	render() {
		return (
			<div className="request">
				<div className="headerWrapper">
					<select value={this.state.requestType} onChange={this.setRequestType}>
						<option value="get">GET</option>
						<option value="post">POST</option>
						<option value="put">PUT</option>
					</select>
					<input
						type="text"
						placeholder="Enter URL"
						value={this.state.url}
						onChange={this.setUrl}
					/>
					<button onClick={this.makeRequest}>Send</button>
				</div>
				<div className="payloadWrapper">
					<div className="tabWrapper">
						<button
							className={`topBtn ${
								this.state.patamTab === "param" ? "tabBtnActive" : null
							}`}
							onClick={() => {
								this.setState({ patamTab: "param" });
							}}
						>
							GET Params
						</button>
						<button
							className={this.state.patamTab === "form" ? "tabBtnActive" : null}
							onClick={() => {
								this.setState({ patamTab: "form" });
							}}
						>
							POST Params
						</button>
						<button
							className={this.state.patamTab === "raw" ? "tabBtnActive" : null}
							onClick={() => {
								this.setState({ patamTab: "raw" });
							}}
						>
							Raw Data
						</button>
						<button
							className={`bottomBtn ${
								this.state.patamTab === "header" ? "tabBtnActive" : null
							}`}
							onClick={() => {
								this.setState({ patamTab: "header" });
							}}
						>
							Header
						</button>
					</div>
					<div className="paramsWrapper">
						{this.renderParams()}
						<button className="newParaBtn" onClick={this.addNewRow}>
							New
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Request;
