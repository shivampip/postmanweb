(this.webpackJsonppostmanweb=this.webpackJsonppostmanweb||[]).push([[0],{100:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(86),o=a.n(r),l=a(1),c=a(2),p=a(4),i=a(3),u=a(5),m=(a(98),a(99),function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={url:"https://reqres.in/api/users",requestType:"post",patamTab:"param",params:[{key:"",value:""}],forms:[{key:"",value:""}],raws:[{key:"",value:""}],rawData:"",headers:[{key:"",value:""}]},a.makeRequest=function(){var e=a.state.url,t=a.state.requestType;console.clear(),a.print("REQUEST"),a.print("URL: "+e),a.print("Request Type: "+t);var s={};a.state.params.filter((function(e){return""!==e.key})).map((function(e){s[e.key]=e.value}));a.state.raws;var n={};a.state.forms.filter((function(e){return""!==e.key})).map((function(e){n[e.key]=e.value}));var r={};a.state.headers.filter((function(e){return""!==e.key})).map((function(e){r[e.key]=e.value}));var o=a.state.rawData;a.print("PARAMS"),a.print(s),a.print("RAWS"),a.print(o),a.print("FORM DATA"),a.print(n),a.print("HEADERS"),a.print(r),a.props.onSend(e,t,s,o,n,r)},a.print=function(e){console.log(e)},a.setUrl=function(e){a.print(e.target.value),a.setState({url:e.target.value})},a.setRequestType=function(e){var t=e.target.value;a.print("Request Type: "+t),a.setState({requestType:t})},a.getKey=function(){return Math.floor(1e3*Math.random()+1)},a.handleChange=function(e,t,s,n){if("param"===e){var r=a.state.params;s?r[t].key=n:r[t].value=n,a.state.params=r}else if("form"===e){var o=a.state.forms;s?o[t].key=n:o[t].value=n,a.state.forms=o}else if("raw"===e){var l=a.state.raws;s?l[t].key=n:l[t].value=n,a.state.raws=l}else if("header"===e){var c=a.state.headers;s?c[t].key=n:c[t].value=n,a.headers=c}},a.removeRow=function(e,t){if(console.log("Removing Row: "+e+" , "+t),"param"===e){var s=a.state.params;s.splice(t,1),a.setState({params:s})}else if("form"===e){var n=a.state.forms;n.splice(t,1),a.setState({forms:n})}else if("raw"===e){var r=a.state.raws;r.splice(t,1),a.setState({raws:r})}else if("header"===e){var o=a.state.headers;o.splice(t,1),a.setState({headers:o})}},a.getParams=function(){return a.state.params.map((function(e,t){var s="",r="";return 0===t&&(s="topLeftBtn",r="topRightBtn"),n.a.createElement("div",{key:a.getKey(),className:"paramRow"},n.a.createElement("input",{className:s,type:"text",placeholder:"Key",defaultValue:e.key,onBlur:function(e){a.handleChange("param",t,!0,e.target.value)}}),n.a.createElement("input",{type:"text",defaultValue:e.value,placeholder:"Value",onBlur:function(e){a.handleChange("param",t,!1,e.target.value)}}),n.a.createElement("button",{className:"removeRowB ".concat(r),onClick:function(e){a.removeRow("param",t)}},"X"))}))},a.getForms=function(){return a.state.forms.map((function(e,t){var s="",r="";return 0===t&&(s="topLeftBtn",r="topRightBtn"),n.a.createElement("div",{key:a.getKey(),className:"paramRow"},n.a.createElement("input",{className:s,type:"text",defaultValue:e.key,placeholder:"Key",onBlur:function(e){a.handleChange("form",t,!0,e.target.value)}}),n.a.createElement("input",{type:"text",defaultValue:e.value,placeholder:"Value",onBlur:function(e){a.handleChange("form",t,!1,e.target.value)}}),n.a.createElement("button",{className:"removeRowB ".concat(r),onClick:function(e){a.removeRow("form",t)}},"X"))}))},a.getRaws=function(){return n.a.createElement("div",{className:"rawData"},n.a.createElement("textarea",{placeholder:"Enter raw data here",onBlur:function(e){a.state.rawData=e.target.value}},a.state.rawData))},a.getHeaders=function(){return a.state.headers.map((function(e,t){var s="",r="";return 0===t&&(s="topLeftBtn",r="topRightBtn"),n.a.createElement("div",{key:a.getKey(),className:"paramRow"},n.a.createElement("input",{className:s,type:"text",defaultValue:e.key,placeholder:"Key",onBlur:function(e){a.handleChange("header",t,!0,e.target.value)}}),n.a.createElement("input",{type:"text",defaultValue:e.value,placeholder:"Value",onBlur:function(e){a.handleChange("header",t,!1,e.target.value)}}),n.a.createElement("button",{className:"removeRowB ".concat(r),onClick:function(e){a.removeRow("header",t)}},"X"))}))},a.renderParams=function(){return"param"===a.state.patamTab?n.a.createElement("div",null,a.getParams()):"form"===a.state.patamTab?n.a.createElement("div",null,a.getForms()):"raw"===a.state.patamTab?n.a.createElement("div",null,a.getRaws()):n.a.createElement("div",null,a.getHeaders())},a.addNewRow=function(){if("param"===a.state.patamTab){var e=a.state.params;e.push({key:"",value:""}),a.setState({params:e})}else if("form"===a.state.patamTab){var t=a.state.forms;t.push({key:"",value:""}),a.setState({forms:t})}else if("raw"===a.state.patamTab){var s=a.state.raws;s.push({key:"",value:""}),a.setState({raws:s})}else{var n=a.state.headers;n.push({key:"",value:""}),a.setState({headers:n})}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"request"},n.a.createElement("div",{className:"headerWrapper"},n.a.createElement("select",{value:this.state.requestType,onChange:this.setRequestType},n.a.createElement("option",{value:"get"},"GET"),n.a.createElement("option",{value:"post"},"POST"),n.a.createElement("option",{value:"put"},"PUT")),n.a.createElement("input",{type:"text",placeholder:"Enter URL",value:this.state.url,onChange:this.setUrl}),n.a.createElement("button",{onClick:this.makeRequest},"Send")),n.a.createElement("div",{className:"payloadWrapper"},n.a.createElement("div",{className:"tabWrapper"},n.a.createElement("button",{className:"topBtn ".concat("param"===this.state.patamTab?"tabBtnActive":null),onClick:function(){e.setState({patamTab:"param"})}},"GET Params"),n.a.createElement("button",{className:"form"===this.state.patamTab?"tabBtnActive":null,onClick:function(){e.setState({patamTab:"form"})}},"POST Params"),n.a.createElement("button",{className:"raw"===this.state.patamTab?"tabBtnActive":null,onClick:function(){e.setState({patamTab:"raw"})}},"Raw Data"),n.a.createElement("button",{className:"bottomBtn ".concat("header"===this.state.patamTab?"tabBtnActive":null),onClick:function(){e.setState({patamTab:"header"})}},"Header")),n.a.createElement("div",{className:"paramsWrapper"},this.renderParams(),n.a.createElement("button",{className:"newParaBtn",onClick:this.addNewRow},"New"))))}}]),t}(n.a.Component)),f=(a(100),a(24),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"response-no"},n.a.createElement("div",{className:"no-response-label"},"NO RESPONST YET"))}}]),t}(n.a.Component)),h=(a(101),a(102),a(89)),v=a.n(h),d=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"response-json"},n.a.createElement(v.a,{data:JSON.parse(this.props.response).data,theme:{scheme:"shapeshifter",author:"wimer hazenberg (http://www.monokai.nl)",base00:"#272822",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#58eeee",base09:"#fd971f",base0A:"#f4bf75",base0B:"#c9fd9e",base0C:"#26083a",base0D:"#ffffff",base0E:"#ae81ff",base0F:"#cc6633"},invertTheme:!0,shouldExpandNode:function(e,t,a){return!0}}))}}]),t}(n.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"response-json"},n.a.createElement("pre",null,JSON.stringify(JSON.parse(this.props.response),null,2)))}}]),t}(n.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"response-json"},this.props.response)}}]),t}(n.a.Component),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).iframe=function(){return{__html:a.props.iframe}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{dangerouslySetInnerHTML:this.iframe()}))}}]),t}(n.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(b,{iframe:this.props.response}),",")}}]),t}(n.a.Component),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={statusCode:-1,response:-1,resType:-1,oresType:-1,oresponse:-1,showFormatBtns:!0,showErrorBtn:!1},a.updateState=function(){if(console.log("Updating State"),-1!==a.props.response){var e=JSON.parse(a.props.response);console.log("Here is the status: "+a.state.resType),console.log(e.status),a.state.statusCode=e.status,a.state.oresponse=JSON.stringify(e)}else a.state.statusCode=0},a.whatIsIt=function(e){var t="test".constructor,a=[].constructor,s={}.constructor;return null===e?"null":void 0===e?"undefined":e.constructor===t?"String":e.constructor===a?"Array":e.constructor===s?"Object":"NA"},a.isHTML=function(e){return/<\/?[a-z][\s\S]*>/i.test(e)},a.setRespnoseType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(a.state.showFormatBtns=!0,a.state.showErrorBtn=!1,console.log("Steeing request type: "+e),"auto"===e)if(-1===a.state.oresponse)a.state.resType="no",a.state.oresType="no";else{var t=JSON.parse(a.state.oresponse);"Object"===a.whatIsIt(t.data)?(console.log("Rendering response as Object"),a.state.resType="pretty",a.state.oresType="json",a.state.response=JSON.stringify(t.data)):"String"===a.whatIsIt(t.data)?a.isHTML(t.data)?(console.log("Rendering response as HTML"),a.state.resType="html",a.state.oresType="html",a.state.response=t.data):(console.log("Rendering response as String"),a.state.resType="raw",a.state.oresType="raw",a.state.response=t.data):(console.log("Rendering response as UNIDENTIFIED"),a.state.resType="pretty",a.state.oresType="json",a.state.showFormatBtns=!1,a.state.showErrorBtn=!0,a.state.response=JSON.stringify(t.errData))}else-1===e?a.state.resType="no":a.setState({resType:e})},a.renderResponse=function(){return"no"===a.state.resType?(console.log("RENDERING as "+a.state.resType),n.a.createElement(f,null)):"raw"===a.state.resType?(console.log("RENDERING as "+a.state.resType),n.a.createElement(E,{response:a.state.response})):"pretty"===a.state.resType?"json"!==a.state.oresType?(a.state.resType=a.state.oresType,a.renderResponse()):(console.log("RENDERING as "+a.state.resType),n.a.createElement(y,{response:a.state.response})):"html"===a.state.resType?(console.log("RENDERING as "+a.state.resType),n.a.createElement(g,{response:a.state.response})):"json"===a.state.resType?(console.log("RENDERING as "+a.state.resType),n.a.createElement(d,{response:a.state.oresponse})):(console.log("RENDERING as "+a.state.resType),n.a.createElement(f,null))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillUpdate",value:function(e){e.response!==this.props.response&&(console.log("PPRROOPPP UpdateD"),this.state.resType="auto",this.state.oresType="auto",this.state.oresponse=this.props.response)}},{key:"render",value:function(){var e=this;return console.log("Rendering response: "+this.state.resType),this.updateState(),"auto"===this.state.resType&&this.setRespnoseType("auto"),console.log("BEFORE RENDERNING"),console.log(this.state.resType),n.a.createElement("div",{className:"response"},n.a.createElement("div",{className:"headerWrapper"},this.state.showFormatBtns?n.a.createElement("div",{className:"viewBtnWrapper"},n.a.createElement("button",{className:"pretty"===this.state.resType?"viewBtnActive":null,onClick:function(){return e.setRespnoseType("pretty")}},"Pretty"),n.a.createElement("button",{className:"json"===this.state.resType?"viewBtnActive":null,onClick:function(){return e.setRespnoseType("json")}},"JSON"),n.a.createElement("button",{className:"html"===this.state.resType?"viewBtnActive":null,onClick:function(){return e.setRespnoseType("html")}},"HTML"),n.a.createElement("button",{className:"raw"===this.state.resType?"viewBtnActive":null,onClick:function(){return e.setRespnoseType("raw")}},"Raw")):null,this.state.showErrorBtn?n.a.createElement("div",{className:"viewBtnWrapper"},n.a.createElement("button",{onClick:function(){return e.setRespnoseType("raw")}},"Error")):null,n.a.createElement("div",{className:"statusWrapper"},n.a.createElement("div",null,this.state.statusCode))),n.a.createElement("div",{className:"contentWrapper"},this.renderResponse()))}}]),t}(n.a.Component),N=a(90),R=a.n(N),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).state={response:-1,proWClass:"requestOverlay"},a.makeRequest=function(e,t,s,n,r,o){console.log("SENDING REQUEST"),a.setState({proWClass:"requestOverlayActive"});R()({method:t,url:e,params:s,data:""!==n?n:r,headers:o}).then((function(e){console.log("RESONSE SUCCESS"),console.log(e),a.setState({response:JSON.stringify(e)})})).catch((function(e){if(console.log("RESONSE ERROR"),console.log(e),e.response)a.setState({response:JSON.stringify(e.response)});else{var t=JSON.stringify({errData:e});console.log(t),a.setState({response:t})}})).then((function(){console.log("REQUEST COMPLETED"),a.setState({proWClass:"requestOverlay"})}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"requestWrapper"},n.a.createElement("div",{className:this.state.proWClass},n.a.createElement("p",null,"Sending Request...")),n.a.createElement(m,{onSend:this.makeRequest})),n.a.createElement(T,{response:this.state.response}))}}]),t}(n.a.Component);o.a.render(n.a.createElement(w,null),document.querySelector("#root"))},24:function(e,t,a){},93:function(e,t,a){e.exports=a(232)},98:function(e,t,a){},99:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.8be64a48.chunk.js.map