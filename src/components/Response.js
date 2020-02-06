import "./Response.css";
import React from 'react';

import ResponseNo from "./ResponseNo";

class Response extends React.Component{

    render(){
        return (
            <div className="response">
                <div className="headerWrapper">
                    <div className="viewBtnWrapper">
                        <button>Pretty</button>
                        <button>Raw</button>
                        <button>Render HTML</button>
                    </div>
                    <div className="statusWrapper">
                        
                    </div>
                </div>
                <div className="contentWrapper">
                    <ResponseNo/>
                </div>
            </div>
        );
    }
}

export default Response;