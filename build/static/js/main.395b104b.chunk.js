(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),s=n.n(c),i=(n(21),n(3)),o=n.n(i),l=n(4),u=n(2),m=(n(23),n(15)),p=n.n(m);function f(e){return d(e)}function d(e){return p.a.get(e).then((function(e){return e.data}))}function v(e){return d(e)}function E(e,t){return r.a.createElement("button",{key:e.name,type:"button",value:e.name,className:"nes-btn is-primary list-item",onClick:function(n){return t(e)}},e.name)}var b=function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)};var h=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),i=Object(u.a)(s,2),m=i[0],p=i[1],h=Object(a.useState)(null),N=Object(u.a)(h,2),k=N[0],y=N[1],O=Object(a.useState)(""),_=Object(u.a)(O,2),j=_[0],S=_[1],x=Object(a.useState)([]),g=Object(u.a)(x,2),C=g[0],w=g[1],A=Object(a.useState)("pokemon_info_not_holder"),I=Object(u.a)(A,2),R=I[0],T=I[1],F=Object(a.useState)(null),M=Object(u.a)(F,2),P=M[0],K=M[1],L="https://pokeapi.co/api/v2/pokemon",B="https://pokeapi.co/api/v2/type",H=Object(a.useState)(0),J=Object(u.a)(H,2),U=J[0],V=J[1];function X(){return(X=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,f(t);case 4:n=e.sent,c(n),p(n.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v(t);case 4:n=e.sent,y(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){alert("Cannot fetch data, reason: "+e)}function z(e){var t;(t=L+"/"+e.name,d(t)).then((function(e){K(e),T("pokemon_info_holder")}))}Object(a.useEffect)((function(){!function(e){q.apply(this,arguments)}(B),function(e){X.apply(this,arguments)}(L)}),[]);var D,G=m.map((function(e){return E(e,z)})),Q=null===k||void 0===k?void 0:k.results.map(b);function W(e,t){return"https://pokeapi.co/api/v2/pokemon?offset="+e+"&limit="+t}function Z(){return""!==j}function $(){var e;(e=B+"/"+j,d(e)).then((function(e){var t=e.pokemon.map((function(e){return e.pokemon}));w(t),V(0),p(t.slice(0,20))})).catch((function(e){return Y(e)}))}function ee(){Z()?$():f(L).then((function(e){var t=e.results;p(t)})).catch((function(e){return Y(e)}))}function te(){Z()?function(){if(0===U)return;var e=U-=20;V(e);var t=C.slice(U,U+20);p(t)}():function(){if(0===U)return;var e=U-=20;V(e),f(W(e,20)).then((function(e){p(e.results)})).catch((function(e){return Y(e)}))}()}function ne(){Z()?function(){if(C.length<=U+20)return;var e=U+=20;V(e);var t=C.slice(U,U+20);p(t)}():function(){if(null==n||n.count<=U+20)return;var e=U+=20;V(e),f(W(e,20)).then((function(e){var t=e.results;p(t)}))}()}function ae(e){return null===P||void 0===P?void 0:P.stats.filter((function(t){return t.stat.name===e}))[0].base_stat}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"contaner_components nes-container  "},r.a.createElement("div",{className:"filters nes-container with-title  is-rounded"},r.a.createElement("p",{className:"title"}," FILTER POKEMONS "),r.a.createElement("label",{htmlFor:"default_select",className:"select_type"},"Filter by type"),r.a.createElement("div",{className:"nes-select"},r.a.createElement("select",{required:!0,id:"default_select",defaultValue:"",onChange:function(e){S(e.target.value)}},r.a.createElement("option",{value:""},"No filter"),Q)),r.a.createElement("div",{className:"show-pokemon"},r.a.createElement("button",{type:"button",className:"nes-btn is-primary btn--filt",onClick:function(){return ee()}},"SEE YOUR POKEMONS!"))),r.a.createElement("div",{className:"spacer"},r.a.createElement("i",{className:"nes-logo"})),r.a.createElement("div",{className:"container_display-pokemon-list nes-container with-title  is-rounded"},r.a.createElement("p",{className:"title"}," SEE MORE INFO "),r.a.createElement("div",{className:"pokemon-list nes-container is-rounded"},G),r.a.createElement("div",{className:"pagination_holder"},r.a.createElement("button",{type:"button",onClick:function(){return te()},className:"nes-btn is-primary btn-previous-page"},"PREVIOUS"),r.a.createElement("button",{type:"button",onClick:function(){return ne()},className:"nes-btn is-primary btn-next-page"},"NEXT"))),r.a.createElement("div",{className:"blank_cover"}),r.a.createElement("div",{className:R},r.a.createElement("div",{className:"img_holder"},r.a.createElement("h1",null," ",null===P||void 0===P?void 0:P.name," "),r.a.createElement("img",{className:"pokemon-image",src:(D=null===P||void 0===P?void 0:P.sprites,null===(null===D||void 0===D?void 0:D.front_default)||void 0===(null===D||void 0===D?void 0:D.front_default)?"pokeball.png":D.front_default),alt:"displayed pokemon"})),r.a.createElement("div",{className:"info-holder nes-container is-centered"},r.a.createElement("p",{className:"nes-text is-success"},"HEALTH:"),r.a.createElement("h3",{className:"nes-text is-success"},ae("hp")),r.a.createElement("p",{className:"nes-text is-error"},"ATTACK:"),r.a.createElement("h3",{className:"nes-text is-error"},ae("attack")),r.a.createElement("p",{className:"nes-text is-primary"},"BASE EXPERIENCE:"),r.a.createElement("h3",{className:"nes-text is-primary"},null===P||void 0===P?void 0:P.base_experience)),r.a.createElement("button",{type:"button",className:"nes-btn is-primary close-display",onClick:function(){return T("pokemon_info_not_holder"),void K(null)}},"CLOSE"))))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.395b104b.chunk.js.map