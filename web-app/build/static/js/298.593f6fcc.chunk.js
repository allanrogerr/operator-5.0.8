"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[298],{24298:function(e,n,t){t.r(n);var r=t(29439),a=t(1413),o=t(72791),s=t(78687),c=t(11135),i=t(25787),u=t(87995),l=t(23814),Z=t(81207),d=t(39281),f=t(35527),h=t(79836),p=t(56890),m=t(35855),v=t(53994),j=t(53382),x=t(57689),b=t(41320),T=t(80184);n.default=(0,i.Z)((function(e){return(0,c.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},l.OR),l.qg),l.VX),l.Bz))}))((function(e){var n=e.classes,t=(0,b.TL)(),a=(0,x.UO)(),c=a.tenantName,i=a.tenantNamespace,l=(0,s.v9)((function(e){return e.tenants.loadingTenant})),w=(0,o.useState)(!0),N=(0,r.Z)(w,2),g=N[0],M=N[1],R=(0,o.useState)([""]),S=(0,r.Z)(R,1)[0],C=(0,o.useState)([""]),k=(0,r.Z)(C,1)[0],E=(0,o.useState)([""]),H=(0,r.Z)(E,1)[0];return(0,o.useEffect)((function(){l&&M(!0)}),[l]),(0,o.useEffect)((function(){g&&Z.Z.invoke("GET","/api/v1/namespaces/".concat(i||"","/tenants/").concat(c||"","/csr")).then((function(e){for(var n=0;n<e.csrElement.length;n++){var t=e.csrElement[n];S.push(t.status),k.push(t.name),H.push(t.annotations)}M(!1)})).catch((function(e){t((0,u.Ih)(e))}))}),[g,i,c,H,k,S,t]),(0,T.jsxs)(o.Fragment,{children:[(0,T.jsx)("h1",{className:n.sectionTitle,children:"Certificate Signing Requests"}),(0,T.jsx)(d.Z,{component:f.Z,children:(0,T.jsxs)(h.Z,{"aria-label":"collapsible table",children:[(0,T.jsx)(p.Z,{children:(0,T.jsxs)(m.Z,{children:[(0,T.jsx)(v.Z,{children:"Name"}),(0,T.jsx)(v.Z,{children:"Status"}),(0,T.jsx)(v.Z,{children:"Annotation"}),(0,T.jsx)(v.Z,{})]})}),(0,T.jsx)(j.Z,{children:(0,T.jsxs)(m.Z,{children:[(0,T.jsx)(v.Z,{children:k.map((function(e){return(0,T.jsx)("p",{children:e})}))}),(0,T.jsx)(v.Z,{children:S.map((function(e){return(0,T.jsx)("p",{children:e})}))}),(0,T.jsx)(v.Z,{children:H.map((function(e){return(0,T.jsx)("p",{children:e})}))})]})})]})})]})}))},39281:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(63366),o=t(72791),s=t(28182),c=t(94419),i=t(31402),u=t(66934),l=t(75878),Z=t(21217);function d(e){return(0,Z.Z)("MuiTableContainer",e)}(0,l.Z)("MuiTableContainer",["root"]);var f=t(80184),h=["className","component"],p=(0,u.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,n){return n.root}})({width:"100%",overflowX:"auto"}),m=o.forwardRef((function(e,n){var t=(0,i.Z)({props:e,name:"MuiTableContainer"}),o=t.className,u=t.component,l=void 0===u?"div":u,Z=(0,a.Z)(t,h),m=(0,r.Z)({},t,{component:l}),v=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},d,n)}(m);return(0,f.jsx)(p,(0,r.Z)({ref:n,as:l,className:(0,s.Z)(v.root,o),ownerState:m},Z))}))},56890:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(87462),a=t(63366),o=t(72791),s=t(28182),c=t(94419),i=t(829),u=t(31402),l=t(66934),Z=t(75878),d=t(21217);function f(e){return(0,d.Z)("MuiTableHead",e)}(0,Z.Z)("MuiTableHead",["root"]);var h=t(80184),p=["className","component"],m=(0,l.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,n){return n.root}})({display:"table-header-group"}),v={variant:"head"},j="thead",x=o.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiTableHead"}),o=t.className,l=t.component,Z=void 0===l?j:l,d=(0,a.Z)(t,p),x=(0,r.Z)({},t,{component:Z}),b=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},f,n)}(x);return(0,h.jsx)(i.Z.Provider,{value:v,children:(0,h.jsx)(m,(0,r.Z)({as:Z,className:(0,s.Z)(b.root,o),ref:n,role:Z===j?null:"rowgroup",ownerState:x},d))})}))}}]);
//# sourceMappingURL=298.593f6fcc.chunk.js.map