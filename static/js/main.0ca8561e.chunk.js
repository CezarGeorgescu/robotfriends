(this.webpackJsonpmooo=this.webpackJsonpmooo||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var s=n(1),i=n(2),l=n(3),h=n(4),u=function(e){e.robots;throw new Error("NOOO!")},m=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--gren bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"900px"}},e.children)},f=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),n}(a.Component)),b=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(m,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(f,null,r.a.createElement(u,{robots:a})))):r.a.createElement("h1",null,"Loading")}}]),n}(a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.0ca8561e.chunk.js.map