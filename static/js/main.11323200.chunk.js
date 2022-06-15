(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,function(t,e,c){t.exports={item:"CartItem_item__ARC-8",details:"CartItem_details__3qkXU",quantity:"CartItem_quantity__1GhbU",price:"CartItem_price__2OKQz",itemprice:"CartItem_itemprice__1k3Z0"}},,,,function(t,e,c){t.exports={notification:"Notification_notification__1Hda6",error:"Notification_error__3oHQq",success:"Notification_success__2BwY-"}},,,,function(t,e,c){t.exports={button:"CartButton_button__3kcIq",badge:"CartButton_badge__1IJxd"}},,,function(t,e,c){t.exports={card:"Card_card__22ioA"}},function(t,e,c){t.exports={cart:"Cart_cart__2WDf9"}},function(t,e,c){t.exports={header:"MainHeader_header__PHARy"}},function(t,e,c){t.exports={form:"ProductsForm_form__2l4mZ"}},,,,,function(t,e,c){},,,,,,,function(t,e,c){"use strict";c.r(e);var i=c(8),n=c.n(i),r=(c(26),c(1)),a=c(2),s=c(18),o=c.n(s),u=c(0),d=function(t){return Object(u.jsx)("section",{className:"".concat(o.a.card," ").concat(t.className?t.className:""),children:t.children})},l=c(19),j=c.n(l),b=c(7),f=c.n(b),h=function(t){var e=t.item,c=e.title,i=e.price,n=e.description;return Object(u.jsxs)("li",{className:f.a.item,children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:c}),Object(u.jsx)("div",{className:f.a.price,children:Object(u.jsxs)("span",{className:f.a.itemprice,children:["($",i,"/item)"]})})]}),Object(u.jsx)("div",{className:f.a.details,children:Object(u.jsx)("p",{children:n})})]})},m=function(t){var e=Object(a.c)((function(t){return t.cart.fetchedItems}));return console.log(e),Object(u.jsxs)(d,{className:j.a.cart,children:[Object(u.jsx)("h2",{children:"Your Shopping Cart"}),Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)(h,{item:{id:t.id,title:t.title,price:t.price,description:t.description}},t.itemId)}))})]})},O="https://cart-911dc-default-rtdb.firebaseio.com/",p=c(3),x=Object(p.b)({name:"cart",initialState:{fetchedItems:[]},reducers:{getDataFromServer:function(t,e){var c=e.payload,i=[];for(var n in c)i.push({id:c[n].id,title:c[n].title,price:c[n].price,description:c[n].description});t.fetchedItems=i}}}),_=x.actions,g=x,v=Object(p.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}},hideNotification:function(t){t.notification=null}}}),N=v.actions,C=v,I=function(){return function(t){fetch("".concat(O,"/cart.json")).then((function(t){return t.json()})).then((function(e){t(_.getDataFromServer(e))}))}},S=c(15),y=c.n(S),w=function(t){var e=Object(a.c)((function(t){return t.cart.fetchedItems})),c=Object(a.b)();return Object(u.jsxs)("button",{className:y.a.button,onClick:function(){c(N.toggle()),c(I())},children:[Object(u.jsx)("span",{children:"My Cart"}),Object(u.jsx)("span",{className:y.a.badge,children:e.length})]})},k=c(20),q=c.n(k),A=function(t){return Object(u.jsxs)("header",{className:q.a.header,children:[Object(u.jsx)("h1",{children:"ReduxCart"}),Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(w,{})})})})]})},D=function(t){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(A,{}),Object(u.jsx)("main",{children:t.children})]})},E=c(11),F=c.n(E),B=function(t){var e="";"error"===t.status&&(e=F.a.error),"success"===t.status&&(e=F.a.success);var c="".concat(F.a.notification," ").concat(e);return Object(u.jsxs)("section",{className:c,children:[Object(u.jsx)("h2",{children:t.title}),Object(u.jsx)("p",{children:t.message})]})},H=c(10),J=c(4),P=c(6),T=c(21),V=c.n(T),M=function(){var t=Object(a.b)(),e=Object(r.useState)({title:"",price:"",description:""}),c=Object(P.a)(e,2),i=c[0],n=c[1],s=function(t){var e=t.target.value;n(Object(J.a)(Object(J.a)({},i),{},Object(H.a)({id:Math.random().toString()},t.target.name,e)))},o=""!==i.title.trim()&&""!==i.price.trim()&&""!==i.description.trim();return Object(u.jsxs)("form",{className:V.a.form,onSubmit:function(e){var c;e.preventDefault(),t((c=i,function(t){t(N.showNotification({status:"pending",title:"Sending...",message:"Sending data o cart !"})),fetch("".concat(O,"/cart.json"),{method:"POST",body:JSON.stringify(c)}).then((function(e){if(!e.ok)throw new Error("Sending cart data failed");return t(N.showNotification({status:"success",title:"Success !",message:"Sent cart data successfully !"})),e.json()})).catch((function(e){t(N.showNotification({status:"error",title:"Error !",message:"Sending cart data failed !"}))}))})),t(I()),n({title:"",price:"",description:""})},children:[Object(u.jsx)("h2",{children:"Add product"}),Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{type:"text",name:"title",value:i.title,onChange:s}),Object(u.jsx)("label",{children:"Price"}),Object(u.jsx)("input",{type:"number",name:"price",value:i.price,onChange:s}),Object(u.jsx)("label",{children:"Description"}),Object(u.jsx)("textarea",{type:"text",name:"description",value:i.description,onChange:s}),Object(u.jsx)("button",{disabled:!o,children:"Add"})]})},R=!0;var Q=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.ui.cartIsVisible})),c=Object(a.c)((function(t){return t.ui.notification})),i=Object(a.c)((function(t){return t.cart}));return Object(r.useEffect)((function(){var e;return c&&(e=setTimeout((function(){t(N.hideNotification())}),3e3)),function(){clearTimeout(e)}}),[c,t]),Object(r.useEffect)((function(){R&&(R=!1)}),[i]),Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)(B,{status:c.status,title:c.title,message:c.message}),Object(u.jsxs)(D,{children:[Object(u.jsx)(M,{}),e&&Object(u.jsx)(m,{})]})]})},U=Object(p.a)({reducer:{ui:C.reducer,cart:g.reducer}});n.a.render(Object(u.jsx)(a.a,{store:U,children:Object(u.jsx)(Q,{})}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.11323200.chunk.js.map