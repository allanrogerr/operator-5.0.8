"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[33],{81806:function(e,t,n){var a=n(1413),i=n(45987),r=(n(72791),n(11135)),s=n(25787),l=n(80184),c=["classes","children"];t.Z=(0,s.Z)((function(e){return(0,r.Z)({root:{padding:0,margin:0,border:0,backgroundColor:"transparent",textDecoration:"underline",cursor:"pointer",fontSize:"inherit",color:e.palette.info.main,fontFamily:"Inter, sans-serif"}})}))((function(e){var t=e.classes,n=e.children,r=(0,i.Z)(e,c);return(0,l.jsx)("button",(0,a.Z)((0,a.Z)({},r),{},{className:t.root,children:n}))}))},75578:function(e,t,n){var a=n(1413),i=n(72791),r=n(80184);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(n){return(0,r.jsx)(i.Suspense,{fallback:t,children:(0,r.jsx)(e,(0,a.Z)({},n))})}}},27454:function(e,t,n){var a=n(1413),i=n(72791),r=n(96040),s=n(80184);t.Z=function(e){var t=e.tooltip,n=e.children,l=e.errorProps,c=void 0===l?null:l,o=e.placement;return(0,s.jsx)(r.Z,{title:t,placement:o,children:(0,s.jsx)("span",{children:c?(0,i.cloneElement)(n,(0,a.Z)({},c)):n})})}},76033:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(29439),i=n(1413),r=n(72791),s=n(75952),l=n(61889),c=n(57482),o=n(23814),u=n(57689),d=n(17238),h=n(82295),f=n(45248),x=n(80184),p=function(e){var t=e.label,n=e.value,a=e.unit,i=e.variant,s=void 0===i?"normal":i;return(0,x.jsxs)("div",{style:{margin:"0px 20px"},children:[(0,x.jsxs)("div",{style:{textAlign:"center"},children:[(0,x.jsx)("span",{style:{fontSize:18,color:"normal"===s?"#000":"#999",fontWeight:400},children:n}),a&&(0,x.jsxs)(r.Fragment,{children:[" ",(0,x.jsx)("span",{style:{fontSize:12,color:"#8F9090",fontWeight:"bold"},children:a})]})]}),(0,x.jsx)("div",{style:{textAlign:"center",color:"normal"===s?"#767676":"#bababa",fontSize:12,whiteSpace:"nowrap"},children:t})]})},v=n(74815),m=n(41320),g=n(72455),j=(0,g.Z)((function(e){return{redState:{color:e.palette.error.main,"& .min-icon":{width:16,height:16,float:"left",marginRight:4}},yellowState:{color:e.palette.warning.main,"& .min-icon":{width:16,height:16,float:"left",marginRight:4}},greenState:{color:e.palette.success.main,"& .min-icon":{width:16,height:16,float:"left",marginRight:4}},greyState:{color:"grey","& .min-icon":{width:16,height:16,float:"left",marginRight:4}},tenantItem:{border:"1px solid #EAEAEA",marginBottom:16,padding:"15px 30px","&:hover":{backgroundColor:"#FAFAFA",cursor:"pointer"}},titleContainer:{display:"flex",justifyContent:"space-between",width:"100%"},title:{fontSize:18,fontWeight:"bold"},namespaceLabel:{display:"inline-flex",backgroundColor:"#EAEDEF",borderRadius:2,padding:"4px 8px",fontSize:10,marginRight:20},status:{fontSize:12,color:"#8F9090"}}})),y=function(e){var t=e.tenant,n=(0,m.TL)(),a=(0,u.s0)(),i=j(),c={value:"n/a",unit:""},o={value:"n/a",unit:""},g={value:"n/a",unit:""},y={value:"n/a",unit:""},b={value:"n/a",unit:""};if(t.capacity_raw){var Z=(0,f.ae)("".concat(t.capacity_raw),!0).split(" ");c.value=Z[0],c.unit=Z[1]}if(t.capacity){var S=(0,f.ae)("".concat(t.capacity),!0).split(" ");o.value=S[0],o.unit=S[1]}if(t.capacity_usage){var C=(0,f.l5)(t.capacity_usage,!0).split(" ");g.value=C[0],g.unit=C[1]}var w=[];if(t.tiers&&0!==t.tiers.length){var z,A;w=null===(z=t.tiers)||void 0===z?void 0:z.map((function(e){return{value:e.size,variant:e.name}}));var F=null===(A=t.tiers)||void 0===A?void 0:A.filter((function(e){return"internal"===e.type})).reduce((function(e,t){return e+t.size}),0),_=t.tiers.filter((function(e){return"internal"!==e.type})).reduce((function(e,t){return e+t.size}),0),T=(0,f.l5)(_,!0).split(" ");b.value=T[0],b.unit=T[1];var P=(0,f.l5)(F,!0).split(" ");y.value=P[0],y.unit=P[1]}else w=[{value:t.capacity_usage||0,variant:"STANDARD"}];return(0,x.jsx)(r.Fragment,{children:(0,x.jsx)("div",{className:i.tenantItem,id:"list-tenant-".concat(t.name),onClick:function(){n((0,d.V7)({name:t.name,namespace:t.namespace})),n((0,h.v)()),a("/namespaces/".concat(t.namespace,"/tenants/").concat(t.name,"/summary"))},children:(0,x.jsxs)(l.ZP,{container:!0,children:[(0,x.jsxs)(l.ZP,{item:!0,xs:12,className:i.titleContainer,children:[(0,x.jsx)("div",{className:i.title,children:(0,x.jsx)("span",{children:t.name})}),(0,x.jsx)("div",{children:(0,x.jsxs)("span",{className:i.namespaceLabel,children:["Namespace:\xa0",t.namespace]})})]}),(0,x.jsx)(l.ZP,{item:!0,xs:12,sx:{marginTop:2},children:(0,x.jsxs)(l.ZP,{container:!0,children:[(0,x.jsx)(l.ZP,{item:!0,xs:2,children:(0,x.jsx)(v.Z,{totalCapacity:t.capacity||0,usedSpaceVariants:w,statusClass:function(e){switch(e){case"red":return i.redState;case"yellow":return i.yellowState;case"green":return i.greenState;default:return i.greyState}}(t.health_status)})}),(0,x.jsxs)(l.ZP,{item:!0,xs:!0,children:[(0,x.jsxs)(l.ZP,{item:!0,xs:!0,sx:{display:"flex",justifyContent:"flex-start",alignItems:"center",marginTop:"10px"},children:[(0,x.jsx)(p,{label:"Raw Capacity",value:c.value,unit:c.unit}),(0,x.jsx)(p,{label:"Usable Capacity",value:o.value,unit:o.unit}),(0,x.jsx)(p,{label:"Pools",value:"".concat(t.pool_count),variant:"faded"})]}),(0,x.jsx)(l.ZP,{item:!0,xs:12,sx:{paddingLeft:"20px",marginTop:"15px"},children:(0,x.jsxs)("span",{className:i.status,children:[(0,x.jsx)("strong",{children:"State:"})," ",t.currentState]})})]}),(0,x.jsx)(l.ZP,{item:!0,xs:3,children:(0,x.jsx)(r.Fragment,{children:(0,x.jsxs)(l.ZP,{container:!0,children:[(0,x.jsxs)(l.ZP,{item:!0,xs:2,textAlign:"center",justifyContent:"center",justifyItems:"center",children:[(0,x.jsx)(s.FU8,{style:{width:25,color:"rgb(91,91,91)"}}),(0,x.jsx)("div",{style:{color:"rgb(118, 118, 118)",fontSize:12,fontWeight:"400"},children:"Usage"})]}),(0,x.jsx)(l.ZP,{item:!0,xs:1}),(0,x.jsxs)(l.ZP,{item:!0,style:{paddingTop:8},children:[(!t.tiers||0===t.tiers.length)&&(0,x.jsxs)("div",{style:{fontSize:14,fontWeight:400},children:[(0,x.jsxs)("span",{style:{color:"rgb(62,62,62)"},children:["Internal:"," "]})," ","".concat(g.value," ").concat(g.unit)]}),t.tiers&&t.tiers.length>0&&(0,x.jsxs)(r.Fragment,{children:[(0,x.jsxs)("div",{style:{fontSize:14,fontWeight:400},children:[(0,x.jsxs)("span",{style:{color:"rgb(62,62,62)"},children:["Internal:"," "]})," ","".concat(y.value," ").concat(y.unit)]}),(0,x.jsxs)("div",{style:{fontSize:14,fontWeight:400},children:[(0,x.jsxs)("span",{style:{color:"rgb(62,62,62)"},children:["Tiered:"," "]})," ","".concat(b.value," ").concat(b.unit)]})]})]})]})})})]})})]})})})},b=n(81806),Z=n(75578),S=n(22338),C=n(79762),w=n(5171),z={},A=function(e){var t=e.rowRenderFunction,n=e.totalItems,a=e.defaultHeight,i=function(e){var n=e.index,a=e.style;return(0,x.jsx)("div",{style:a,children:t(n)})};return(0,x.jsx)(r.Fragment,{children:(0,x.jsx)(C.Z,{isItemLoaded:function(e){return!!z[e]},loadMoreItems:function(e,t){for(var n=e;n<=t;n++)z[n]=1;for(var a=e;a<=t;a++)z[a]=2},itemCount:n,children:function(e){var t=e.onItemsRendered,r=e.ref;return(0,x.jsx)(w.qj,{children:function(e){var s=e.width,l=e.height;return(0,x.jsx)(S.t7,{itemSize:a||220,height:l,itemCount:n,width:s,ref:r,onItemsRendered:t,children:i})}})}})})},F=n(4942),_=n(63466),T=n(27391),P=n(25787),R=n(11135),N=(0,P.Z)((function(e){return(0,R.Z)({searchField:(0,i.Z)({},o.qg.searchField),adornment:{}})}))((function(e){var t=e.placeholder,n=void 0===t?"":t,a=e.classes,i=e.onChange,r=e.adornmentPosition,l=void 0===r?"end":r,c=e.overrideClass,o=e.value,u=(0,F.Z)({disableUnderline:!0},"".concat(l,"Adornment"),(0,x.jsx)(_.Z,{position:l,className:a.adornment,children:(0,x.jsx)(s.W1M,{})}));return(0,x.jsx)(T.Z,{placeholder:n,className:c||a.searchField,id:"search-resource",label:"",InputProps:u,onChange:function(e){i(e.target.value)},variant:"standard",value:o})})),I=n(74794),k=n(87995),B=n(90673),D=n(27454),E=n(47974),L=n(79626),W=(0,Z.Z)(r.lazy((function(){return n.e(798).then(n.bind(n,37798))}))),U=(0,g.Z)((function(e){return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},o.OR),o.qg),o.Bz),{},{tenantsList:{height:"calc(100vh - 195px)"},sortByContainer:{display:"flex",justifyContent:"flex-end",marginBottom:10},innerSort:{maxWidth:200,width:"95%",display:"flex",flexDirection:"row",alignItems:"center"},sortByLabel:{whiteSpace:"nowrap",fontSize:14,color:"#838383",fontWeight:"bold",marginRight:10}})})),M=function(){var e=(0,m.TL)(),t=(0,u.s0)(),n=U(),i=(0,r.useState)(!1),o=(0,a.Z)(i,2),d=o[0],h=o[1],f=(0,r.useState)(""),p=(0,a.Z)(f,2),v=p[0],g=p[1],j=(0,r.useState)([]),Z=(0,a.Z)(j,2),S=Z[0],C=Z[1],w=(0,r.useState)(!1),z=(0,a.Z)(w,2),F=z[0],_=z[1],T=(0,r.useState)(null),P=(0,a.Z)(T,2),R=P[0],M=P[1],V=(0,r.useState)("name"),K=(0,a.Z)(V,2),q=K[0],O=K[1],H=S.filter((function(e){return""===v||e.name.indexOf(v)>=0}));H.sort((function(e,t){switch(q){case"capacity":return e.capacity&&t.capacity?e.capacity>t.capacity?1:e.capacity<t.capacity?-1:0:0;case"usage":return e.capacity_usage&&t.capacity_usage?e.capacity_usage>t.capacity_usage?1:e.capacity_usage<t.capacity_usage?-1:0:0;case"active_status":return"red"===e.health_status&&"red"!==t.health_status?1:"red"!==e.health_status&&"red"===t.health_status?-1:0;case"failing_status":return"green"===e.health_status&&"green"!==t.health_status?1:"green"!==e.health_status&&"green"===t.health_status?-1:0;default:return e.name>t.name?1:e.name<t.name?-1:0}})),(0,r.useEffect)((function(){if(d){L.h.tenants.listAllTenants().then((function(e){var t;if(e.data){var n=null!==(t=e.data.tenants)&&void 0!==t?t:[];C(n),h(!1)}else h(!1)})).catch((function(t){e((0,k.Ih)(t)),h(!1)}))}}),[d,e]),(0,r.useEffect)((function(){h(!0)}),[]);return(0,x.jsxs)(r.Fragment,{children:[F&&(0,x.jsx)(W,{newServiceAccount:R,open:F,closeModal:function(){_(!1),M(null)},entity:"Tenant"}),(0,x.jsx)(E.Z,{label:"Tenants",middleComponent:(0,x.jsx)(N,{placeholder:"Filter Tenants",onChange:function(e){g(e)},value:v}),actions:(0,x.jsxs)(l.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:[(0,x.jsx)(D.Z,{tooltip:"Refresh Tenant List",children:(0,x.jsx)(s.zxk,{id:"refresh-tenant-list",onClick:function(){h(!0)},icon:(0,x.jsx)(s.DuK,{}),variant:"regular"})}),(0,x.jsx)(D.Z,{tooltip:"Create Tenant",children:(0,x.jsx)(s.zxk,{id:"create-tenant",label:"Create Tenant",onClick:function(){t("/tenants/add")},icon:(0,x.jsx)(s.dtP,{}),variant:"callAction"})})]})}),(0,x.jsx)(I.Z,{children:(0,x.jsxs)(l.ZP,{item:!0,xs:12,className:n.tenantsList,children:[d&&(0,x.jsx)(c.Z,{}),!d&&(0,x.jsxs)(r.Fragment,{children:[0!==H.length&&(0,x.jsxs)(r.Fragment,{children:[(0,x.jsx)(l.ZP,{item:!0,xs:12,className:n.sortByContainer,children:(0,x.jsxs)("div",{className:n.innerSort,children:[(0,x.jsx)("span",{className:n.sortByLabel,children:"Sort by"}),(0,x.jsx)(B.Z,{id:"sort-by",label:"",value:q,onChange:function(e){O(e.target.value)},name:"sort-by",options:[{label:"Name",value:"name"},{label:"Capacity",value:"capacity"},{label:"Usage",value:"usage"},{label:"Active Status",value:"active_status"},{label:"Failing Status",value:"failing_status"}]})]})}),(0,x.jsx)(A,{rowRenderFunction:function(e){var t=H[e]||null;return t?(0,x.jsx)(y,{tenant:t}):null},totalItems:H.length})]}),0===H.length&&(0,x.jsx)(l.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,x.jsx)(l.ZP,{item:!0,xs:8,children:(0,x.jsx)(s.KfX,{iconComponent:(0,x.jsx)(s.zb0,{}),title:"Tenants",help:(0,x.jsxs)(r.Fragment,{children:["Tenant is the logical structure to represent a MinIO deployment. A tenant can have different size and configurations from other tenants, even a different storage class.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"To get started,\xa0",(0,x.jsx)(b.Z,{onClick:function(){t("/tenants/add")},children:"Create a Tenant."})]})})})})]})]})})]})}},74815:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(93433),i=(n(72791),n(2600)),r=n(65390),s=n(41048),l=n(45248),c=n(75952),o=n(80184),u=function(e){var t=e.totalValue,n=e.sizeItems,a=e.bgColor,i=void 0===a?"#ededed":a;return(0,o.jsx)("div",{style:{width:"100%",height:12,backgroundColor:i,borderRadius:30,display:"flex",transitionDuration:"0.3s",overflow:"hidden"},children:n.map((function(e,n){var a=100*e.value/t;return(0,o.jsx)("div",{style:{width:"".concat(a,"%"),height:"100%",backgroundColor:e.color,transitionDuration:"0.3s"}},"itemSize-".concat(n.toString()))}))})},d=function(e){var t=e.totalCapacity,n=e.usedSpaceVariants,d=e.statusClass,h=e.render,f=void 0===h?"pie":h,x=["#8dacd3","#bca1ea","#92e8d2","#efc9ac","#97f274","#f7d291","#71ACCB","#f28282","#e28cc1","#2781B0"],p="#ededed",v=n.reduce((function(e,t){return e+t.value}),0),m=t-v,g=[],j=n.find((function(e){return"STANDARD"===e.variant}))||{value:0,variant:"empty"};n.length>10?g=[{value:v-j.value,color:"#2781B0",label:"Total Tiers Space"}]:g=n.filter((function(e){return"STANDARD"!==e.variant})).map((function(e,t){return{value:e.value,color:x[t],label:"Tier - ".concat(e.variant)}}));var y="#07193E",b=100*j.value/t;b>=90?y="#C83B51":b>=75&&(y="#FFAB0F");var Z=[{value:j.value,color:y,label:"Used Space by Tenant"}].concat((0,a.Z)(g),[{value:m,color:"bar"===f?p:"transparent",label:"Empty Space"}]);if("bar"===f){var S=Z.map((function(e){return{value:e.value,color:e.color,itemName:e.label}}));return(0,o.jsx)("div",{style:{width:"100%",marginBottom:15},children:(0,o.jsx)(u,{totalValue:t,sizeItems:S,bgColor:p})})}return(0,o.jsxs)("div",{style:{position:"relative",width:110,height:110},children:[(0,o.jsx)("div",{style:{position:"absolute",right:-5,top:15,zIndex:400},className:d,children:(0,o.jsx)(c.J$M,{style:{border:"#fff 2px solid",borderRadius:"100%",width:20,height:20}})}),(0,o.jsx)("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontWeight:"bold",color:"#000",fontSize:12},children:isNaN(v)?"N/A":(0,l.l5)(v)}),(0,o.jsx)("div",{children:(0,o.jsxs)(i.u,{width:110,height:110,children:[(0,o.jsx)(r.b,{data:[{value:100}],cx:"50%",cy:"50%",dataKey:"value",outerRadius:50,innerRadius:40,fill:p,isAnimationActive:!1,stroke:"none"}),(0,o.jsx)(r.b,{data:Z,cx:"50%",cy:"50%",dataKey:"value",outerRadius:50,innerRadius:40,children:Z.map((function(e,t){return(0,o.jsx)(s.b,{fill:e.color,stroke:"none"},"cellCapacity-".concat(t))}))})]})})]})}}}]);
//# sourceMappingURL=33.a6099543.chunk.js.map