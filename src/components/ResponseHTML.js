import React from "react";

class HComponent extends React.Component{
    iframe= ()=> {
      return {
        __html: this.props.iframe
      }
    }
  
    render() {
      return (
        <div>
          <div dangerouslySetInnerHTML={ this.iframe() } />
        </div>
      );
    }
  
}


class ResponseHTML extends React.Component{

    render(){
        return (
        <div>          
            <HComponent iframe={this.props.response} />,         
          </div>
        );
    }
}

export default ResponseHTML;