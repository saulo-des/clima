(this.webpackJsonpclima=this.webpackJsonpclima||[]).push([[0],{56:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(20),o=a.n(r),s=a(24),i=a.n(s),l=a(38),d=a(21),j=(a(51),a(42)),u=a(33),b=a(44),h=a(45),m=a(29),x=a(43),p=a(41),O=a(15),f=a(39),g=a(34),v=a(40),w=a(25),y=a(5);var N=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),o=Object(d.a)(r,2),s=o[0],N=o[1],k=Object(c.useState)(!1),C=Object(d.a)(k,2),S=C[0],A=C[1],I=Object(c.useState)(null),z=Object(d.a)(I,2),P=z[0],B=z[1],q=Object(c.useState)(null),E=Object(d.a)(q,2),F=E[0],H=E[1];function J(){return(J=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),"53ee103e248292c575932ae02c989170",a="http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&lang=pt&units=metric&appid=").concat("53ee103e248292c575932ae02c989170"),e.next=5,fetch(a).then((function(e){return e.json()})).then((function(e){switch(e.cod){case"401":B("A API Key informada inv\xe1lida!"),N(null);break;case"404":B("A cidade informada n\xc3o existe!"),N(null),n("");break;case"429":B("O uso gratuito da API foi excedido! (60 chamadas por minuto)"),N(null);break;default:N(e)}})).catch((function(e){console.error("Erro ao obter o clima: ".concat(e.message))}));case 5:A(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e="13e16ac1c1ee40fe9d2f2d168ebec2af";function t(){return(t=Object(l.a)(i.a.mark((function t(a,c){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.opencagedata.com/geocode/v1/json?q=".concat(a,"+").concat(c,"&key=").concat(e),t.next=3,fetch(r).then((function(e){return e.json()})).then((function(e){n(e.results[0].components.city+", "+e.results[0].components.country)})).catch((function(e){console.error("N\xe3o foi possivel buscar a cidade a partir da lat/long. Erro: ".concat(e.message))}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){!function(e,a){t.apply(this,arguments)}(e.coords.latitude,e.coords.longitude)}),(function(e){console.error(e),H(e.code)}))}),[]),Object(y.jsxs)(y.Fragment,{children:[" ",Object(y.jsxs)(j.a,{bg:"primary",children:[Object(y.jsx)(j.a.Brand,{href:"#inicio",children:"FateClima"}),Object(y.jsxs)(u.a,{className:"mr-auto",children:[Object(y.jsx)(u.a.Link,{href:"#inicio",children:"In\xc3\xadcio"}),Object(y.jsx)(u.a.Link,{href:"#contato",children:"Contato"})]}),Object(y.jsxs)(h.a,{inline:!0,children:[Object(y.jsx)(m.a,{type:"text",value:a,placeholder:"Informe a cidade...",onChange:function(e){return n(e.target.value)}}),"\xa0",Object(y.jsxs)(x.a,{variant:"secondary",onClick:function(){return function(e){return J.apply(this,arguments)}(a)},disabled:a.length<3,children:[S?Object(y.jsx)(f.a,{size:"sm",animation:"grow",variant:"light"}):Object(y.jsx)(w.d,{}),"Obter Clima"]})]})]}),Object(y.jsxs)(b.a,{children:[Object(y.jsxs)("h1",{children:[Object(y.jsx)(w.c,{})," FateClima"]}),Object(y.jsxs)("p",{children:["Consulte o clima de qualquer cidade do mundo. ",Object(y.jsx)("br",{}),"App desenvolvido em ReactJS e integrado com a API OpenWeatherMap."]})]}),F&&Object(y.jsxs)(v.a,{variant:"danger",onClose:function(){return H(null)},dismissible:!0,children:[Object(y.jsx)(v.a.Heading,{children:"Ops! Ocorreu um erro ao obter a sua localiza\xe7\xe3o."}),Object(y.jsx)("p",{children:[{codigo:1,texto:"N\xe3o foi dada a permiss\xe3o para o sistema encontrar sua localiza\xe7\xe3o"},{codigo:2,texto:"N\xe3o foi possivel obter sua localiza\xe7\xe3o"},{codigo:3,texto:"O tempo para obter sua localiza\xe7\xe3o foi expirado!"}][F].texto})]}),P&&Object(y.jsxs)(g.a,{onClose:function(){return B(null)},delay:4e3,autohide:!0,className:"bg-danger",children:[Object(y.jsxs)(g.a.Header,{children:[Object(y.jsx)("strong",{className:"mr-auto",children:P}),Object(y.jsx)("small",{children:"\ud83d\ude1e"})]}),Object(y.jsx)(g.a.Body,{className:"bg-white text-danger",children:"Por favor, fa\xe7a uma nova busca."})]}),S&&Object(y.jsx)(p.a,{className:"justify-content-center",children:Object(y.jsx)(f.a,{animation:"border",variant:"primary"})}),Object(y.jsx)(p.a,{className:"justify-content-center",children:s&&Object(y.jsxs)(O.a,{bg:"primary",className:"text-center",children:[Object(y.jsxs)(O.a.Header,{children:[Object(y.jsx)("h2",{children:s.name}),Object(y.jsxs)("h3",{children:[Object(y.jsx)("strong",{children:s.main.temp}),"\u2103"]}),Object(y.jsxs)("h5",{children:["min: ",Object(y.jsx)("strong",{children:s.main.temp_min}),"\u2103",Object(y.jsx)(w.a,{className:"text-danger"}),"- m\xe1x: ",Object(y.jsx)("strong",{children:s.main.temp_max}),"\u2103",Object(y.jsx)(w.b,{className:"text-success"})]})]}),Object(y.jsxs)(O.a.Body,{className:"bg-white",children:[Object(y.jsx)(O.a.Img,{src:"http://openweathermap.org/img/wn/".concat(s.weather[0].icon,"@4x.png"),title:s.weather[0].description}),Object(y.jsx)(O.a.Title,{className:"text-dark",children:s.weather[0].description})]}),Object(y.jsxs)(O.a.Footer,{className:"text-white",children:["Atualizado em: ",new Date(1e3*s.dt).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})]})]})})]})};o.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(N,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.d80eb787.chunk.js.map