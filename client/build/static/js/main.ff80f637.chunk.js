(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,function(e,t,c){e.exports={circle:"Logo_circle__2ACV3",sky:"Logo_sky__3siX9",cloud1:"Logo_cloud1__28Qj1",cloud2:"Logo_cloud2__2lzsh",cloud3:"Logo_cloud3__1HnkX"}},,function(e,t,c){e.exports={TextInput:"Forecast_TextInput__2ur0J",Radio:"Forecast_Radio__1Ejlt",Button:"Forecast_Button__3Y_IL"}},function(e,t,c){e.exports={Wrapper:"Conditions_Wrapper__1WUTs",Small:"Conditions_Small__1VrqO",Loader:"Conditions_Loader__PcSFJ",spin:"Conditions_spin__b05Or"}},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(7),s=c.n(a),r=(c(12),c(13),c(3)),i=c(5),o=c.n(i),l=c(0),j=function(e){return Object(l.jsxs)("div",{className:o.a.Wrapper,children:[e.error&&Object(l.jsx)("small",{className:o.a.Small,children:"Please enter a valid city."}),e.loading&&Object(l.jsx)("div",{className:o.a.Loader,children:"Loading..."}),200===e.responseObj.cod?Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:Object(l.jsx)("strong",{children:e.responseObj.name})}),Object(l.jsxs)("p",{children:["It is currently ",Math.round(e.responseObj.main.temp)," degrees"]}),Object(l.jsx)("p",{children:e.responseObj.weather[0].description})]}):null]})},d=c(4),u=c.n(d),b=function(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],d=i[1],b=Object(n.useState)("imperial"),p=Object(r.a)(b,2),h=p[0],O=p[1],m=Object(n.useState)(!1),x=Object(r.a)(m,2),_=x[0],f=x[1],g=Object(n.useState)(!1),v=Object(r.a)(g,2),C=v[0],N=v[1],y=encodeURIComponent(o),L="http://api.openweathermap.org/data/2.5/weather?units=".concat(h,"&q=").concat(y,"&appid=").concat("e85d65f27c4dba6f1470e1cee950c874");return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Find Current Weather Conditions"}),Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),0===o.length)return f(!0);f(!1),a({}),N(!0),fetch(L).then((function(e){return e.json()})).then((function(e){if(200!==e.cod)throw new Error;a(e),N(!1)})).catch((function(e){f(!0),N(!1),console.log(e.message)}))},children:[Object(l.jsx)("input",{type:"text",placeholder:"Enter City",maxLength:"50",value:o,className:u.a.textInput,onChange:function(e){return d(e.target.value)}}),Object(l.jsxs)("label",{className:u.a.Radio,children:[Object(l.jsx)("input",{type:"radio",name:"units",checked:"imperial"===h,value:"imperial",onChange:function(e){return O(e.target.value)}}),"Fahrenheit"]}),Object(l.jsxs)("label",{className:u.a.Radio,children:[Object(l.jsx)("input",{type:"radio",name:"units",checked:"metric"===h,value:"metric",onChange:function(e){return O(e.target.value)}}),"Celcius"]}),Object(l.jsx)("button",{className:u.a.Button,type:"submit",children:"Get Forecast"})]}),Object(l.jsx)(j,{responseObj:c,error:_,loading:C})]})},p=c(2),h=c.n(p),O=function(){return Object(l.jsxs)("div",{className:h.a.sky,children:[Object(l.jsx)("div",{className:h.a.circle}),Object(l.jsx)("div",{className:h.a.cloud1}),Object(l.jsx)("div",{className:h.a.cloud2}),Object(l.jsx)("div",{className:h.a.cloud3})]})};var m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)(O,{}),Object(l.jsx)("h1",{children:"React Weather App"})]}),Object(l.jsx)("main",{children:Object(l.jsx)(b,{})}),Object(l.jsxs)("footer",{children:["Application Developed By ",Object(l.jsx)("a",{href:"http://www.hirecatalina.com",children:"Catalina Williams"})]})]})};s.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.ff80f637.chunk.js.map