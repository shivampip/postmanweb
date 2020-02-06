import "./App.css";
import React from 'react';
import Request from './Request';
import Response from "./Response";

class App extends React.Component{

    render(){
        return <div className="app"><Request/><Response/></div>
    }
}


export default App;