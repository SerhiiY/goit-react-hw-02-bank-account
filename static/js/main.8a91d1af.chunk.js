(window["webpackJsonpgoit-react-hw-01-components"]=window["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(e,t,n){e.exports={controls:"style_controls__3Smer",toast:"style_toast__1RoVn"}},16:function(e,t,n){e.exports={balance:"style_balance__3xt3t"}},17:function(e,t,n){e.exports={TransactionHistory:"style_TransactionHistory__1ZKzE"}},18:function(e,t,n){},22:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),o=n.n(r),l=n(19),i=n(9),s=n(10),u=n(20),m=n(11),p=n(2),b=n(21),d=n(12),f=n.n(d),h=n(3),E=n(13),w=n.n(E),y=function(e){var t=e.onDeposit,n=e.onWithdraw,a={amount:0,balance:e.balance},r=function(e){return h.b.error(e)},o=function(e){var c=e.target,o=a.amount;if(!o||o<=0)return r("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");if("withdraw"===c.name){if(a.balance<o)return r("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");n(+o.replace(/^0+/,""))}"deposit"===c.name&&t(+o.replace(/^0+/,"")),c.parentNode.querySelector('[name="amount"]').value=""};return c.a.createElement("section",{className:w.a.controls},c.a.createElement("input",{type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",name:"amount",onChange:function(e){var t=e.target;a[t.name]=t.value}}),c.a.createElement("button",{type:"button",name:"deposit",onClick:o},"Deposit"),c.a.createElement("button",{type:"button",name:"withdraw",onClick:o},"Withdraw"))};y.defaultProps={balance:0};var v=y,x=n(16),_=n.n(x),j=function(e){var t=e.balance,n=e.income,a=e.expences;return c.a.createElement("section",{className:_.a.balance},c.a.createElement("span",null,"\u2b06",n,"$"),c.a.createElement("span",null,"\u2b07",a,"$"),c.a.createElement("span",null,"Balance: ",t,"$"))};j.defaultProps={balance:0,expences:0,income:0};var k=j,O=n(17),g=n.n(O),T=function(e){var t=e.items.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount,"$"),c.a.createElement("td",null,e.date))}));return c.a.createElement("table",{className:g.a.TransactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,t))};T.defaultProps={items:[]};var D=T,W=(n(39),n(18)),C=n.n(W),S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={transactions:[],balance:0},e.onDeposit=e.onDeposit.bind(Object(p.a)(e)),e.onWithdraw=e.onWithdraw.bind(Object(p.a)(e)),e.newTransaction=e.newTransaction.bind(Object(p.a)(e)),e.calcIncome=e.calcIncome.bind(Object(p.a)(e)),e.calcExpences=e.calcExpences.bind(Object(p.a)(e)),e}return Object(b.a)(t,e),Object(s.a)(t,[{key:"onDeposit",value:function(e){this.newTransaction(e,"deposit"),this.setState((function(t){return{balance:t.balance+ +e}})),h.b.success("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430!")}},{key:"onWithdraw",value:function(e){this.newTransaction(e,"withdrawal"),this.setState((function(t){return{balance:t.balance-+e}})),h.b.success("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430!")}},{key:"newTransaction",value:function(e,t){var n=new Date,a={id:f.a.generate(),type:t,amount:e,date:n.toLocaleString()};this.setState((function(e){return{transactions:[].concat(Object(l.a)(e.transactions),[a])}}))}},{key:"calcIncome",value:function(){return this.state.transactions.filter((function(e){return"deposit"===e.type})).reduce((function(e,t){return e+ +t.amount}),0)}},{key:"calcExpences",value:function(){return this.state.transactions.filter((function(e){return"withdrawal"===e.type})).reduce((function(e,t){return e+ +t.amount}),0)}},{key:"render",value:function(){var e=this.calcIncome(),t=this.calcExpences(),n=this.state,a=n.balance,r=n.transactions;return c.a.createElement("div",{className:C.a.dashboard},c.a.createElement(v,{onDeposit:this.onDeposit,onWithdraw:this.onWithdraw,balance:a}),c.a.createElement(k,{balance:a,income:e,expences:t}),c.a.createElement(D,{items:r}),c.a.createElement(h.a,{position:"bottom-right",autoClose:3e3}))}}]),t}(a.Component),I=function(){return c.a.createElement(S,null)};n(40);o.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8a91d1af.chunk.js.map