(this.webpackJsonppicsomereact=this.webpackJsonppicsomereact||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),o=(n(28),n(29),n(8)),l=n(22),u=n(16),s=n(13),m=n.n(s),f=n(20),v=n(5),d=r.a.createContext();function E(e){var t=e.children,n=Object(a.useState)([]),c=Object(v.a)(n,2),i=c[0],o=c[1],s=Object(a.useState)([]),E=Object(v.a)(s,2),b=E[0],p=E[1],h=Object(a.useState)(0),g=Object(v.a)(h,2),j=g[0],O=g[1],C="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";return Object(a.useEffect)((function(){function e(){return(e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(C);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){return o(e)}))}),[]),Object(a.useEffect)((function(){O((function(){return 5.99*b.length}))}),[b]),r.a.createElement(d.Provider,{value:{photos:i,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?(console.log(e),console.log(!t.isFavorite),Object(u.a)(Object(u.a)({},t),{},{isFavorite:!t.isFavorite})):t}));o((function(){return t}))},addCartItem:function(e){p((function(t){return[].concat(Object(l.a)(t),[e])}))},removeCartItem:function(e){p((function(t){return t.filter((function(t){return t.id!==e}))}))},setCartItems:p,cartItems:b,totalCost:j}},t)}var b=function(){var e=Object(a.useContext)(d).cartItems;return r.a.createElement("header",null,r.a.createElement(o.b,{to:"/picsomereact"},r.a.createElement("h2",null,"Pic Some")),r.a.createElement(o.b,{to:"/cart"},e.length>0?r.a.createElement("i",{className:"ri-shopping-cart-fill ri-fw ri-2x"}):0===e.length?r.a.createElement("i",{className:"ri-shopping-cart-line ri-fw ri-2x"}):void 0))};var p=function(){var e=Object(a.useState)(!1),t=Object(v.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(null);function i(){r(!0)}function o(){r(!1)}return Object(a.useEffect)((function(){var e=c.current;return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",o),function(){e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",o)}}),[]),[n,c]};var h=function(e){var t=e.item,n=Object(a.useContext)(d).removeCartItem,c=p(),i=Object(v.a)(c,2),o=i[0],l=i[1],u="ri-delete-bin-".concat(o?"fill":"line");return r.a.createElement("div",{className:"cart-item"},r.a.createElement("i",{ref:l,className:u,onClick:function(){return n(t.id)}}),r.a.createElement("img",{src:t.url,width:"130px"}),r.a.createElement("p",null,"$5.99"))};var g=function(){var e=Object(a.useContext)(d),t=e.cartItems,n=e.setCartItems,c=e.totalCost,i=t.map((function(e){return r.a.createElement(h,{key:e.id,item:e})})),o=Object(a.useState)(!1),l=Object(v.a)(o,2),u=l[0],s=l[1],m=0===t.length;return console.log(m),r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"),i,r.a.createElement("p",{className:"total-cost"}," Total: ",c.toLocaleString("en-US",{style:"currency",currency:"USD"})),r.a.createElement("div",{className:"order-button"},r.a.createElement("button",{disabled:m,onClick:function(){s(!0),setTimeout((function(){n([]),s(!1)}),3e3)}},u?"Ordering...":"Place Order")),m&&r.a.createElement("p",null,"You have no items in your cart."))};var j=function(e){var t=e.imgObj,n=e.className,c=Object(a.useContext)(d),i=c.toggleFavorite,o=c.addCartItem,l=c.removeCartItem,u=c.cartItems,s=p(),m=Object(v.a)(s,2),f=m[0],E=m[1];return r.a.createElement("div",{ref:E,className:"".concat(n," image-container")},r.a.createElement("img",{src:t.url,className:"image-grid"}),t.isFavorite?r.a.createElement("i",{className:"ri-heart-fill favorite",onClick:function(){return i(t.id)}}):f?r.a.createElement("i",{className:"ri-heart-line favorite",onClick:function(){return i(t.id)}}):void 0,u.some((function(e){return e.id===t.id}))?r.a.createElement("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return l(t.id)}}):f?r.a.createElement("i",{className:"ri-add-circle-line cart",onClick:function(){return o(t)}}):void 0)};var O=function(){var e=Object(a.useContext)(d).photos.map((function(e,t){return r.a.createElement(j,{key:e.id,imgObj:e,className:(n=t,n%5===0?"big":n%6===0?"wide":void 0)});var n}));return r.a.createElement("main",{className:"photos"},e)},C=n(1);var x=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(C.d,null,r.a.createElement(C.a,{exact:!0,from:"/",to:"/picsomereact"}),r.a.createElement(C.b,{exact:!0,path:"/picsomereact"},r.a.createElement(O,null)),r.a.createElement(C.b,{exact:!0,path:"/cart"},r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null,r.a.createElement(o.a,null,r.a.createElement(x,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d6e9b240.chunk.js.map