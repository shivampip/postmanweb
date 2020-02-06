import "./Request.css";
import React from 'react';

class Request extends React.Component{
    state= {
        url: "", 
        requestType: "get", 
        patamTab: "param",
        params: [{'key': 'fname', 'value': "Shivam"}, {'key': 'lname', 'value': 'Agrawal'}],
        forms: [{'key': 'fname', 'value': "f1"}, {'key': 'lname', 'value': 'f2'}],
        raws: [{'key': 'fname', 'value': "r1"}, {'key': 'lname', 'value': 'r2'}], 
        headers: [{'key': 'Authorization', 'value': "KEY 3434634523"}]
    }

    
    makeRequest= ()=>{
        let url= this.state.url;
        let requestType= this.state.requestType;
        this.print("Making request on: "+url);
    }

    print= (msg)=>{
        console.log(msg);
    }

    setUrl= (eve)=>{
        this.print(eve.target.value);
        this.setState({url: eve.target.value});
    }

    setRequestType= (eve)=>{
        var value = eve.target.value;
        this.print("Request Type: "+value);
        this.setState({requestType: value});
    }

    getKey=()=>{
        return Math.floor(Math.random() * 1000+1);
    }

    handleChange= (ptype, index, key, value)=>{
        if(ptype==="param"){
            let params= this.state.params;
            if(key){
                params[index].key= value;
            }else{
                params[index].value= value;
            }            
            this.setState({params: params});
        }else if(ptype==="form"){
            let params= this.state.forms;
            if(key){
                params[index].key= value;
            }else{
                params[index].value= value;
            }            
            this.setState({forms: params});
        }else if(ptype==="raw"){
            let params= this.state.raws;
            if(key){
                params[index].key= value;
            }else{
                params[index].value= value;
            }            
            this.setState({raws: params});
        }else if(ptype==="header"){
            let params= this.state.headers;
            if(key){
                params[index].key= value;
            }else{
                params[index].value= value;
            }            
            this.setState({headers: params});
        }
    }

    getParams=()=>{
        return this.state.params.map((data, index)=>{
            return (
                <div key={this.getKey()} className="paramRow">
                    {/* <input type="text" value={key} onChange={(eve)=>{this.handleChange("param", index, true, eve.target.value)}}/> */}
                    {/* <input type="text" defaultValue={key} onBlur={(eve)=>console.log("VALUE: "+eve.target.value)} /> */}
                    <input type="text" defaultValue={data.key} onBlur={(eve)=>{this.handleChange("param", index, true, eve.target.value)}} />
                    <input type="text" defaultValue={data.value} onBlur={(eve)=>{this.handleChange("param", index, false, eve.target.value)}} />
                </div>
            );
        });
    }

    getForms=()=>{
        return this.state.forms.map((data, index)=>{
            return (
                <div key={this.getKey()} className="paramRow">
                <input type="text" defaultValue={data.key} onBlur={(eve)=>{this.handleChange("form", index, true, eve.target.value)}} />
                <input type="text" defaultValue={data.value} onBlur={(eve)=>{this.handleChange("form", index, false, eve.target.value)}} />
                </div>
            );
        });
    }

    getRaws=()=>{
        return this.state.raws.map((data, index)=>{
            return (
                <div key={this.getKey()} className="paramRow">
                <input type="text" defaultValue={data.key} onBlur={(eve)=>{this.handleChange("raw", index, true, eve.target.value)}} />
                <input type="text" defaultValue={data.value} onBlur={(eve)=>{this.handleChange("raw", index, false, eve.target.value)}} />
                </div>
            );
        });
    }

    getHeaders=()=>{
        return this.state.headers.map((data, index)=>{
            return (
                <div key={this.getKey()} className="paramRow">
                <input type="text" defaultValue={data.key} onBlur={(eve)=>{this.handleChange("header", index, true, eve.target.value)}} />
                <input type="text" defaultValue={data.value} onBlur={(eve)=>{this.handleChange("header", index, false, eve.target.value)}} />
                </div>
            );
        });
    }

    renderParams= ()=>{
        if(this.state.patamTab==="param"){
            return <div>{this.getParams()}</div>;
        }else if(this.state.patamTab==="form"){
            return <div>{this.getForms()}</div>
        }else if(this.state.patamTab==="raw"){
            return <div>{this.getRaws()}</div>
        }else{
            return <div>{this.getHeaders()}</div>
        }
    }

    addNewRow= ()=>{
        if(this.state.patamTab==="param"){
            let params= this.state.params;
            params.push({"key": "", "value": ""});
            this.setState({params: params});
        }else if(this.state.patamTab==="form"){
            let params= this.state.forms;
            params.push({"key": "", "value": ""});
            this.setState({forms: params});
        }else if(this.state.patamTab==="raw"){
            let params= this.state.raws;
            params.push({"key": "", "value": ""});
            this.setState({raws: params});
        }else{
            let params= this.state.headers;
            params.push({"key": "", "value": ""});
            this.setState({headers: params});
        }
    }

    render(){
        return (
        <div className="request">
            <div className="headerWrapper">
                <select value={this.state.requestType} onChange={this.setRequestType}>
                    <option value="get">GET</option>
                    <option value="post">POST</option>
                    <option value="put">PUT</option>
                </select>
                <input type="text" placeholder="Enter URL" value={this.state.url} onChange={this.setUrl}/>
                <button onClick={this.makeRequest}>Send</button>
            </div>
            <div className="payloadWrapper">
                <div className="tabWrapper">
                    <button onClick={()=>{this.setState({patamTab: "param"})}}>Params</button>
                    <button onClick={()=>{this.setState({patamTab: "form"})}}>Form Data</button>
                    <button onClick={()=>{this.setState({patamTab: "raw"})}}>Raw Data</button>
                    <button onClick={()=>{this.setState({patamTab: "header"})}}>Header</button>
                </div>
                <div className="paramsWrapper">
                    {this.renderParams()}
                    <button onClick={this.addNewRow}>New</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Request;