(this["webpackJsonpweather-app-ver2"]=this["webpackJsonpweather-app-ver2"]||[]).push([[0],{108:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(25),r=n.n(i),s=(n(83),n(84),n(14)),o=n(137),l=n(144),j=n(143),d=n(72),u=n(32),m=n.n(u),b=n(48),h=n(43),p=n(63),O=n.n(p).a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),A="e52f6e745ca76353e86b7276db7daaf4",g=function(e){return O.get("weather?appid=".concat(A,"&units=metric&q=").concat(e)).then((function(e){return e.data}))},x=function(e,t){return O.get("onecall?lat=".concat(e,"&lon=").concat(t,"&exclude=current,minutely,daily,alerts&appid=").concat(A,"&units=metric")).then((function(e){return e.data}))},y=function(e){return"https://openweathermap.org/img/wn/".concat(e,"@2x.png")},I="IS_LOADING",v={isLoading:!1},f=function(e){return{type:I,isLoading:e}},D="ADD_CITY",R="REFRESH_CARD",M="DELETE_CITY",S="ADD_CHART_DATA",E={city:[],hourlyData:[]},Z=function(e){return{type:R,city:e}},N=function(e,t){return function(){var n=Object(b.a)(m.a.mark((function n(c,a){var i,r,s;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("ADD"!==t){n.next=10;break}return c(f(!0)),n.next=4,g(e);case 4:i=n.sent,r=a().city.city.find((function(e){return e.id===i.id})),c(r?Z(i):{type:D,city:i}),c(f(!1)),n.next=15;break;case 10:if("REFRESH"!==t){n.next=15;break}return n.next=13,g(e);case 13:s=n.sent,c(Z(s));case 15:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},C=n(13),w=n(2),L=Object(o.a)((function(e){return{button:{background:"linear-gradient(115deg, #C5CED3 30%, #83CBCB)",color:"white"},input:{color:"white"}}})),W=function(){var e=Object(C.b)(),t=L(),n=Object(d.a)({initialValues:{name:""},onSubmit:function(t){0===localStorage.length&&localStorage.setItem("name",JSON.stringify([])),""!==t.name&&(e(N(t.name,"ADD")),n.resetForm())}});return Object(w.jsx)("div",{children:Object(w.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(w.jsx)(l.a,Object(s.a)(Object(s.a)({className:t.input,placeholder:"Type here the city name"},n.getFieldProps("name")),{},{onChange:n.handleChange,value:n.values.name})),Object(w.jsx)(j.a,{type:"submit",variant:"contained",className:t.button,children:" Add City"})]})})},T=n(139),k=n(140);function B(){var e=new Date,t=e.getDay(),n=e.getMonth(),c=e.getHours(),a=e.getMinutes(),i=e.getDate();return Object(w.jsxs)("span",{children:[Object(w.jsxs)("span",{children:[["Mon","Tue","Wed","Thu","Fri","Sun","Sat"][t],", "]}),Object(w.jsxs)("span",{children:["  ",i," ",["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n],", "]}),Object(w.jsxs)("span",{children:[c,"h : ",a,"m "]})]})}n(108);var G="data:image/png;base64,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",Y="data:image/png;base64,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",V=n(69),J=n.n(V),F=n(141),P=n(4),U=Object(o.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary,marginTop:"15px",background:"linear-gradient(to right, #FFFFFF, #C5CED3)",maxWidth:"300px",height:"200px"},clickZone:{cursor:"pointer"},buttons:{textAlign:"right"},icoButtonWrap:{display:"flex",flexDirection:"column",justifyContent:"space-between"}}})),z=function(e){var t=U(),n=e.city,a=Object(C.b)();function i(e){return Math.round(e)}Object(c.useEffect)((function(){if(localStorage.length>0){var e=JSON.parse(localStorage.getItem("name"));if(e.length>0)e.indexOf(n.name)>=0||(e.push(n.name),localStorage.setItem("name",JSON.stringify(e)));else e.push(n.name),localStorage.setItem("name",JSON.stringify(e))}}),[n.name]);var r=y(n.weather[0].icon),s=Object(P.f)();return Object(w.jsx)("div",{className:"shortCardWrapper",children:Object(w.jsx)(T.a,{className:t.paper,children:Object(w.jsxs)(k.a,{container:!0,spacing:3,children:[Object(w.jsxs)(k.a,{item:!0,xs:8,onClick:function(){s.push("/".concat(n.name))},className:t.clickZone,children:[Object(w.jsx)("div",{className:"dateContainer",children:B()}),Object(w.jsx)("div",{children:Object(w.jsxs)("h2",{children:[" ",n.name," "]})}),Object(w.jsxs)("div",{className:"tempContent",children:[Object(w.jsxs)("span",{className:"tempValue",children:[i(n.main.temp)," \xb0"]}),Object(w.jsx)("span",{className:"tempDescription",children:n.weather[0].description})]}),Object(w.jsxs)("div",{className:"additionalParams",children:[Object(w.jsxs)("span",{className:"windContainer",children:[Object(w.jsx)("img",{src:G,alt:"windIco"}),i(n.wind.speed)," mps"]}),Object(w.jsxs)("span",{className:"humidityContainer",children:[Object(w.jsx)("img",{src:Y,alt:"humidityIco"}),n.main.humidity," %"]})]})]}),Object(w.jsxs)(k.a,{item:!0,xs:4,className:t.icoButtonWrap,children:[Object(w.jsx)("img",{src:r,alt:"weatherIco"}),Object(w.jsxs)("div",{className:t.buttons,children:[Object(w.jsx)(j.a,{variant:"text",color:"secondary",className:t.button,startIcon:Object(w.jsx)(J.a,{}),onClick:function(){var e;a((e=n.name,{type:M,name:e}));var t=JSON.parse(localStorage.getItem("name"));t=t.filter((function(e){return e!==n.name})),console.log(t),localStorage.setItem("name",JSON.stringify(t))}}),Object(w.jsx)(j.a,{variant:"text",color:"primary",className:t.button,startIcon:Object(w.jsx)(F.a,{}),onClick:function(){a(N(n.name,"REFRESH"))}})]})]})]})})})},H=(n(114),n.p+"static/media/preloader.27daef19.svg"),X=(n(115),function(){return Object(w.jsx)("div",{className:"mainPreloaderWrap",children:Object(w.jsx)("img",{src:H,alt:"preloader"})})}),Q=Object(o.a)((function(e){return{root:{flexGrow:1,justifyContent:"center",width:"calc(100%)",margin:"0"}}})),K=function(e){var t=Q(),n=Object(C.c)((function(e){return e.loading.isLoading}));return Object(w.jsxs)("div",{className:"mainBody",children:[Object(w.jsx)("h1",{children:" Type city name to look at the weather forecast"}),Object(w.jsx)("div",{className:"searchItem",children:Object(w.jsx)(W,{})}),Object(w.jsxs)("div",{children:[n&&Object(w.jsx)(X,{}),Object(w.jsx)(k.a,{container:!0,spacing:3,className:t.root,children:function(){if(e.city.length>0)return e.city.map((function(e){return Object(w.jsx)(k.a,{item:!0,children:Object(w.jsx)(z,{city:e})},e.id)}))}()})]})]})},q=n(73),_=n.p+"static/media/pressureIco.4b86ccf5.png",$=(n(116),n(142)),ee=(n(117),function(e){var t,n=new Date(1e3*e.dt).getHours(),c=(t=e.temp,Math.round(t)),a=-1*(c-5),i=e.description;return Object(w.jsx)("div",{className:"graphBody",style:{top:a},"data-title":c+"\xb0C "+i+" Time:"+n+"h",children:"-"})}),te=Object(o.a)((function(e){return{root:{flexGrow:1,justifyContent:"center",borderBottom:"1px solid",borderLeft:"1px solid",position:"relative",padding:"15px 5px 15px 0"},chart:{paddingRight:"25px !important"}}})),ne=function(e){var t,n,a,i,r=Object(P.f)(),s=Object(C.b)(),o=Object(C.c)((function(e){return e.loading.isLoading})),l=te(),d=Object(P.g)(),u=Object(c.useState)(""),h=Object(q.a)(u,2),p=h[0],O=h[1];if(Object(c.useEffect)((function(){var e,t;p&&s((e=p.coord.lat,t=p.coord.lon,function(){var n=Object(b.a)(m.a.mark((function n(c){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(f(!0)),n.next=3,x(e,t);case 3:a=n.sent,c({type:S,hourlyData:a}),c(f(!1));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))}),[p,s]),0===p.length)for(var A=0;A<e.city.length;A++)if(e.city[A].name===d.name)return O(e.city[A]);var g=y(null===p||void 0===p||null===(t=p.weather[0])||void 0===t?void 0:t.icon);function I(e){return Math.round(e)}var v=(null===(n=e.hourlyData[0])||void 0===n?void 0:n.hourly.length)>24?null===(a=e.hourlyData[0])||void 0===a?void 0:a.hourly.splice(24):null===(i=e.hourlyData[0])||void 0===i?void 0:i.hourly,D=null===v||void 0===v?void 0:v.map((function(e){return Object(w.jsx)(k.a,{item:!0,className:l.chart,children:Object(w.jsx)(ee,{temp:e.temp,dt:e.dt,description:e.weather[0].description})},e.id)}));return Object(w.jsxs)("div",{className:"detailPageWrapp",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("span",{className:"detailPageHeader",children:[Object(w.jsx)(B,{}),Object(w.jsx)(j.a,{startIcon:Object(w.jsx)($.a,{}),onClick:function(){r.push("/")},children:"Close"})]}),Object(w.jsxs)("h1",{children:[" ",p.name]})]}),Object(w.jsxs)("div",{className:"tempBlock",children:[Object(w.jsxs)("div",{children:[" LOW: ",I(p.main.temp_max)," \xb0C"]}),Object(w.jsxs)("div",{className:"mainTempCount",children:[" ",I(p.main.temp)," \xb0C"]}),Object(w.jsxs)("div",{children:[" HIGH: ",I(p.main.temp_min)," \xb0C"]})]}),Object(w.jsxs)("div",{className:"weatherVisual",children:[Object(w.jsx)("img",{src:g,alt:"weatherIco"}),Object(w.jsxs)("div",{className:"weatherDescription",children:[" ",p.weather[0].description," "]})]}),Object(w.jsx)("div",{className:"detailBox",children:Object(w.jsxs)(k.a,{container:!0,spacing:3,children:[Object(w.jsxs)(k.a,{item:!0,xs:3,children:[Object(w.jsx)("img",{src:Y,alt:"humidityIco"}),"HUMIDITY: ",p.main.humidity,"%"]}),Object(w.jsxs)(k.a,{item:!0,xs:3,children:[Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTE0VDIwOjQyOjM2KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMy0xNFQyMDo0NToyNCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMy0xNFQyMDo0NToyNCswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxN2NlYmVjMS0yZWE2LTg0NGYtYjZiYi1hMzdjOGUzMWViZWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTdjZWJlYzEtMmVhNi04NDRmLWI2YmItYTM3YzhlMzFlYmVhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTdjZWJlYzEtMmVhNi04NDRmLWI2YmItYTM3YzhlMzFlYmVhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxN2NlYmVjMS0yZWE2LTg0NGYtYjZiYi1hMzdjOGUzMWViZWEiIHN0RXZ0OndoZW49IjIwMjEtMDMtMTRUMjA6NDI6MzYrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7GfWFeAAACSElEQVRoge1aQU7DMBCcIG5wLV8Id4r4AQVRwSPiF4QHwAfiF4Q3IBUVUV7AoeWMv9DcERcIBxowxk4ce1OnEnPKOpvNTrz27iaJyrKEK/Yvb5pUVONRnfJLljj7su18ZT1MT6caryXkgq6IyKic/kVOcLYH4EgaKpAlT6436ZpIpBzLZA7iNJ9UguBsBuDE9UbrmBETZoKzHUn+8DEWksg34jR/9bURksgoTvP71bH34g9JZCE4OweAOM29jQUjEqf5EsAdlb0tKkNtITg7xdcuVgIoBWcPPvZChtZScDaR5GcfYyFDawHggspeyNAa4Se0vBGMCDVChtYMhMVjMCKCsyGAa2logSy5crUXctcaxGl+VgmCMy9foo4aK1PfUduP9LGxaoTgbADgEACkmssZ6yBimoVhnOZTw7nWCLlGHgVnu8CGF40yVg3WO7LkzdVGSCLH8trY5FZ3LjgbS3LhYyxkZi8ATBsVLdGXfsQbIUOrEJxNgQ3fteI0nwMYNypaoi/9SCk4u/Wx16d+xCu7r6NoNB3/gU/R2MWM2DwZkp1KBjWRNg6SkqEkYvNRJ1LGychQEZEdkp0ta3R0486gIKJz0JSx5XFSMpShpf0yZQD5JzjfzN7ktKlnN9lyJtblrmVa7Dpdb1ARUZ2ue7JtdK3RpxLFC11svzrZVdca/zOyQl28q7lElUnXShclim7LNZUvvStRKtgkOh2JXrxpVH/NqBJbnXO9LeNtwsk0TpJHKF8+qDMDjay7hgTUb1FsFzH5/1qfphOt/D1WhzEAAAAASUVORK5CYII=",alt:"temperatureIco"}),"FEELS LIKE: ",I(p.main.feels_like)," \xb0C"]}),Object(w.jsxs)(k.a,{item:!0,xs:3,children:[Object(w.jsx)("img",{src:G,alt:"windIco"}),"SPEED: ",p.wind.speed," M/S, DEG: ",p.wind.deg]}),Object(w.jsxs)(k.a,{item:!0,xs:3,children:[Object(w.jsx)("img",{src:_,alt:"pressureIco"}),"PRESSURE: ",p.main.pressure]})]})}),Object(w.jsxs)("div",{className:"graphChart",children:[Object(w.jsx)("div",{className:"chartTitle",children:"HOURLY TEMPERATURE GRAPHIC"}),o&&Object(w.jsx)(X,{}),Object(w.jsx)(k.a,{container:!0,spacing:1,className:l.root,children:D})]})]})};var ce=function(){var e=Object(C.c)((function(e){return e.city.city})),t=Object(C.c)((function(e){return e.city.hourlyData})),n=Object(C.b)();return Object(c.useEffect)((function(){if(0===e.length){var t=JSON.parse(localStorage.getItem("name"));if(null!=t)for(var c=0;c<t.length;c++)n(N(t[c],"ADD"))}}),[n,e.length]),Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(P.c,{children:[Object(w.jsxs)(P.a,{exact:!0,path:"/",children:[Object(w.jsx)(K,{city:e})," "]}),Object(w.jsxs)(P.a,{path:"/:name",children:[" ",function(){if(e.length>0)return Object(w.jsx)(ne,{city:e,hourlyData:t})}()]})]})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},ie=n(27),re=n(70),se=Object(ie.c)({city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(s.a)(Object(s.a)({},e),{},{city:[t.city].concat(Object(h.a)(e.city))});case M:return Object(s.a)(Object(s.a)({},e),{},{city:e.city.filter((function(e){return e.name!==t.name}))});case R:return Object(s.a)(Object(s.a)({},e.state),{},{city:Object(h.a)(e.city)});case S:return Object(s.a)(Object(s.a)({},e),{},{hourlyData:[t.hourlyData].concat(Object(h.a)(e.hourlyData))});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(s.a)(Object(s.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),oe=Object(ie.d)(se,Object(ie.a)(re.a));window.store=oe;var le=oe,je=n(71);r.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(C.a,{store:le,children:Object(w.jsx)(je.a,{children:Object(w.jsx)(ce,{})})})}),document.getElementById("root")),ae()},83:function(e,t,n){},84:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.a225bc0d.chunk.js.map