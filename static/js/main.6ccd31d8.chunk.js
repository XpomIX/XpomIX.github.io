(this.webpackJsonpforegor=this.webpackJsonpforegor||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),i=n.n(c),s=n(4),a=n.n(s);n(14);var l=function(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("div",{className:"header-title",children:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a \u043c\u043e\u043b\u043e\u0434\u0451\u0436\u043d\u043e\u0433\u043e \u0441\u043b\u0435\u043d\u0433\u0430 \u0415\u0433\u043e\u0440\u0430 \u0418\u043e\u043f\u043f\u044b"})})},o=(n(15),n(2)),u=n(5),d=n(6),j=n(8),h=n(7),b=[{title:"qq",description:"\u043f\u0440\u0438\u0432\u0435\u0442"},{title:"bb",description:"\u043f\u043e\u043a\u0430"},{title:"GG",description:"\u0425\u043e\u0440\u043e\u0448\u0430\u044f \u0438\u0433\u0440\u0430"},{title:"GH",description:"\u0425\u043e\u0440\u043e\u0448\u0430\u044f \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0430"},{title:"\u043a\u0443",description:"\u043f\u0440\u0438\u0432\u0435\u0442"},{title:"\u043a\u0443",description:"\u043f\u0440\u0438\u0432\u0435\u0442"}],O=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).renderItem=function(){var t=b.find((function(t){return t.title===i.state.current}));return console.dir(t),Object(r.jsxs)("div",{style:{minHeight:"300px"},children:[Object(r.jsx)("button",{onClick:function(){return i.setState(Object(o.a)({},"current",""))},children:"\u041d\u0430\u0437\u0430\u0434"}),Object(r.jsxs)("div",{style:{padding:"10px"},children:[Object(r.jsx)("h3",{children:t.title}),Object(r.jsx)("p",{children:t.description})]})]})},i.renderList=function(){var t=i.state.search.replace(/\s+$/g,""),e=""===i.state.search?b:b.filter((function(e){return-1!==e.title.indexOf(t)}));return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)("input",{onChange:function(t){var e=t.target;return i.setState(Object(o.a)({},"search",e.value))},name:"search",value:i.state.search||"",placeholder:"\u0427\u0442\u043e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043d\u0430\u0439\u0442\u0438?"}),e.length>0?e.map((function(t){return Object(r.jsx)("div",{className:"slangItem",onClick:function(e){e.target;return i.setState(Object(o.a)({},"current",t.title))},children:t.title})})):Object(r.jsx)("h3",{children:"\u041f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."})]})},i.state={search:"",current:""},i}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"content",children:""===this.state.current?this.renderList():this.renderItem()})}}]),n}(i.a.Component);var f=function(){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(O,{})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),i(t),s(t)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.6ccd31d8.chunk.js.map