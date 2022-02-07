(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3sZvl",summary:"CartItem_summary__3s1yd",price:"CartItem_price__3IT8e",amount:"CartItem_amount__y2nSz",actions:"CartItem_actions__1Myle"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1KAcE",total:"Cart_total__3lH7t",actions:"Cart_actions__m79si","button--alt":"Cart_button--alt__32zTI",button:"Cart_button__3zdbb"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__WucIn",icon:"HeaderCartButton_icon__1859y",badge:"HeaderCartButton_badge__17kUE",bump:"HeaderCartButton_bump__36KDc"}},,function(e,t,n){e.exports={meal:"MealItem_meal__17xh1",description:"MealItem_description__2MhEg",price:"MealItem_price__RD9IG"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2cleb",modal:"Modal_modal__34smn","slide-down":"Modal_slide-down__1UIBM"}},,function(e,t,n){e.exports={header:"Header_header__UxeYh","main-image":"Header_main-image__1m_1w"}},,,function(e,t,n){e.exports={summary:"MealsSummary_summary__2o7CI"}},,function(e,t,n){e.exports={card:"Card_card__2sT8o"}},function(e,t,n){e.exports={input:"Input_input__3pzrp"}},function(e,t,n){e.exports={form:"MealItemForm_form__2mtdd"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2vFY2","meals-appear":"AvailableMeals_meals-appear__1n1Io"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),r=(n(26),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(8),m=n.n(d),j=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(u).items,d=s.reduce((function(e,t){return e+t.amount}),0),j="".concat(m.a.button," ").concat(a?m.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(o.jsx)("span",{className:m.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:m.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",x=n(13),p=n.n(x),O=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:p.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(j,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:p.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},f=n(16),h=n.n(f),_=function(){return Object(o.jsxs)("section",{className:h.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(14),C=n.n(v),I=n(17),N=n(18),g=n.n(N),A=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},y=n(3),M=n(19),w=n.n(M),k=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:w.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(y.a)({ref:t},e.input))]})})),H=n(20),E=n.n(H),D=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(k,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},F=n(10),R=n.n(F),S=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price);return Object(o.jsxs)("li",{className:R.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:R.a.description,children:e.description}),Object(o.jsx)("div",{className:R.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(D,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=n(21),B=n.n(T),z=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1];Object(i.useEffect)((function(){var e=function(){var e=Object(I.a)(C.a.mark((function e(){var t,c,r,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-180-post-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(i in c=e.sent,r=[],c)r.push({id:i,name:c[i].name,description:c[i].description,price:c[i].price});a(r),console.log(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var c=n.map((function(e){return Object(o.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:B.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:c})})})},P=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(z,{})]})},Y=n(11),U=n.n(Y),V=function(e){return Object(o.jsx)("div",{className:U.a.backdrop,onClick:e.onClose})},$=function(e){return Object(o.jsx)("div",{className:U.a.modal,children:Object(o.jsx)("div",{className:U.a.content,children:e.children})})},J=document.getElementById("overlays"),K=function(e){return Object(o.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(o.jsx)(V,{onClose:e.onClose}),J),c.a.createPortal(Object(o.jsx)($,{children:e.children}),J)]})},q=n(4),G=n.n(q),W=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:G.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:G.a.summary,children:[Object(o.jsx)("span",{className:G.a.price,children:t}),Object(o.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=n(5),L=n.n(Z),Q=function(e){var t=Object(i.useContext)(u),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},r=function(e){t.addItem(e)},s=Object(o.jsx)("ul",{className:L.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:r.bind(null,e)},e.id)}))});return Object(o.jsxs)(K,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:L.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:L.a.actions,children:[Object(o.jsx)("button",{className:L.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:L.a.button,children:"Order"})]})]})},X=n(15),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(y.a)(Object(y.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(X.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(y.a)(Object(y.a)({},l),{},{amount:l.amount-1});(s=Object(X.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return ee},ne=function(e){var t=Object(i.useReducer)(te,ee),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ne,{children:[n&&Object(o.jsx)(Q,{onClose:function(){a(!1)}}),Object(o.jsx)(O,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(P,{})})]})};c.a.render(Object(o.jsx)(ae,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.f629a3cd.chunk.js.map